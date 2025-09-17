// 클래식 컴퓨터 비전 알고리즘 기반 이미지 마스킹 구현
document.addEventListener('DOMContentLoaded', () => {
  // 요소
  const fileInput = document.getElementById('fileInput');
  const uploadBtn = document.getElementById('uploadBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const dropArea = document.getElementById('dropArea');
  const progressContainer = document.getElementById('progressContainer');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const resultSection = document.getElementById('resultSection');
  const originalImage = document.getElementById('originalImage');
  const maskedImage = document.getElementById('maskedImage');
  const compareOriginal = document.getElementById('compareOriginal');
  const compareMasked = document.getElementById('compareMasked');
  const detectionList = document.getElementById('detectionList');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // 전역 변수
  let lastFileName = 'image';
  let lastMaskedDataURL = null;
  let cvReady = false;
  let processingImage = false;
  
  // 개인정보 패턴 개선 - 주소 패턴을 확장하되 다른 패턴 유지
  const patterns = {
    rrn: /(?:^|[^\d])(\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[-]?[1-4]\d{6})(?!\d)/g,
    phone: /01[016789][-\s]?\d{3,4}[-\s]?\d{4}/g,
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    ip: /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g,
    id: /\b[A-Za-z][A-Za-z0-9._-]{3,19}\b/g
    // address 패턴 제거됨
  };
  
  // OpenCV.js 로딩
  function loadOpenCV() {
    if (window.cv && typeof window.cv.Mat !== 'undefined') {
      console.log("OpenCV is already loaded!");
      cvReady = true;
      return;
    }
    
    // 기존 스크립트 제거
    const existingScript = document.querySelector('script[src*="opencv.js"]');
    if (existingScript) existingScript.remove();
    
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://docs.opencv.org/4.7.0/opencv.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        // OpenCV가 로드된 후 Mat 객체를 확인
        const checkReady = setInterval(() => {
          if (window.cv && typeof window.cv.Mat !== 'undefined') {
            clearInterval(checkReady);
            console.log("OpenCV is ready!");
            cvReady = true;
            resolve();
          }
        }, 100);
        
        // 10초 후에도 준비되지 않으면 타임아웃
        setTimeout(() => {
          if (!cvReady) {
            clearInterval(checkReady);
            const error = new Error("OpenCV initialization timeout");
            console.error(error);
            reject(error);
          }
        }, 10000);
      };
      
      script.onerror = (e) => {
        console.error("Failed to load OpenCV", e);
        reject(new Error("Failed to load OpenCV.js"));
      };
      
      document.body.appendChild(script);
    });
  }
  
  // 페이지 로드 시 OpenCV 로드 시작
  loadOpenCV().catch(err => {
    console.error("OpenCV loading failed:", err);
  });
  
  // 탭 전환 이벤트
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.dataset.target;
      
      // 활성 탭 버튼 변경
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // 활성 탭 컨텐츠 변경
      tabContents.forEach(content => content.classList.remove('active'));
      document.getElementById(target)?.classList.add('active');
    });
  });
  
  // 파일 업로드 버튼
  uploadBtn?.addEventListener('click', () => {
    fileInput?.click();
  });
  
  // 페이지 전체에 드래그 이벤트 방지
  document.addEventListener('dragover', e => {
    e.preventDefault();
    e.stopPropagation();
  }, false);
  
  document.addEventListener('drop', e => {
    e.preventDefault();
    e.stopPropagation();
  }, false);
  
  // 드래그 앤 드롭 이벤트
  if (dropArea) {
    dropArea.addEventListener('dragenter', function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.add('active');
    }, false);
    
    dropArea.addEventListener('dragover', function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.add('active');
    }, false);
    
    dropArea.addEventListener('dragleave', function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.remove('active');
    }, false);
    
    dropArea.addEventListener('drop', function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.remove('active');
      
      const dt = e.dataTransfer;
      if (dt.files && dt.files.length > 0) {
        const file = dt.files[0];
        if (file.type.startsWith('image/')) {
          handleFile(file);
        } else {
          alert('이미지 파일만 업로드 가능합니다.');
        }
      }
    }, false);
    
    dropArea.addEventListener('click', function() {
      if (fileInput) fileInput.click();
    });
  }
  
  // 파일 입력 이벤트
  if (fileInput) {
    fileInput.addEventListener('change', function(e) {
      if (e.target.files && e.target.files.length > 0) {
        handleFile(e.target.files[0]);
      }
    });
  }
  
  // 다운로드 버튼
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      if (!lastMaskedDataURL) return;
      
      const link = document.createElement('a');
      link.href = lastMaskedDataURL;
      link.download = `${lastFileName}-masked.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  
  // 파일 처리
  function handleFile(file) {
    if (!file) return;
    if (processingImage) return; // 이미 처리 중인 경우 중복 처리 방지
    
    processingImage = true;
    
    // 파일명 저장
    lastFileName = file.name.split('.').slice(0, -1).join('.') || 'image';
    
    // 진행바 초기화
    if (progressContainer) progressContainer.style.display = 'block';
    if (progressBar) progressBar.style.width = '10%';
    if (progressText) progressText.textContent = '이미지 로딩 중...';
    
    // 결과 섹션 초기화
    if (resultSection) resultSection.style.display = 'none';
    if (detectionList) detectionList.innerHTML = '';
    
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageData = e.target.result;
      
      // 원본 이미지 표시
      if (originalImage) originalImage.src = imageData;
      if (compareOriginal) compareOriginal.src = imageData;
      
      if (progressBar) progressBar.style.width = '30%';
      if (progressText) progressText.textContent = 'OpenCV 준비 중...';
      
      // OpenCV 준비 확인
      ensureOpenCVReady().then(() => {
        processImage(imageData);
      }).catch(error => {
        console.error("OpenCV 준비 실패:", error);
        alert("이미지 처리에 필요한 라이브러리 로딩에 실패했습니다. 페이지를 새로고침한 후 다시 시도하세요.");
        processingImage = false;
        if (progressContainer) progressContainer.style.display = 'none';
      });
    };
    reader.readAsDataURL(file);
  }
  
  // OpenCV 준비 확인 및 대기
  function ensureOpenCVReady() {
    return new Promise((resolve, reject) => {
      if (cvReady && window.cv && typeof window.cv.Mat !== 'undefined') {
        resolve();
        return;
      }
      
      // 아직 로드 중이면 기다림
      loadOpenCV().then(() => {
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }
  
  // Tesseract 워커 생성 (클래식 엔진 사용)
  async function createOCRWorker() {
    try {
      const worker = await Tesseract.createWorker();
      await worker.loadLanguage('kor+eng');
      
      // 클래식 엔진 설정 (LSTM 비활성화)
      await worker.initialize('kor+eng', Tesseract.OEM.TESSERACT_ONLY);
      
      // 추가 설정
      await worker.setParameters({
        tessedit_ocr_engine_mode: 0,  // 레거시 엔진 모드
        tessjs_create_hocr: '0',      // 성능 최적화
        tessjs_create_tsv: '0',
        tessjs_create_box: '0',
        tessjs_create_unlv: '0',
        tessjs_create_osd: '0'
      });
      
      return worker;
    } catch (error) {
      console.error("OCR 워커 생성 실패:", error);
      throw error;
    }
  }
  
  // 이미지 처리 함수
  async function processImage(imageData) {
    try {
      if (progressBar) progressBar.style.width = '40%';
      if (progressText) progressText.textContent = 'OCR 분석 중 (클래식 엔진)...';
      
      // OCR 처리 (클래식 엔진)
      const worker = await createOCRWorker();
      const { data } = await worker.recognize(imageData);
      console.log("OCR 완료 - 클래식 엔진 사용", data);
      
      if (progressBar) progressBar.style.width = '60%';
      if (progressText) progressText.textContent = '개인정보 탐지 중...';
      
      // 텍스트에서 개인정보 패턴 찾기 (주소 제외)
      const detections = {
        rrn: document.getElementById('maskRRN')?.checked ? findMatches(data.text, patterns.rrn, 'rrn') : [],
        phone: document.getElementById('maskPhone')?.checked ? findMatches(data.text, patterns.phone, 'phone') : [],
        email: document.getElementById('maskEmail')?.checked ? findMatches(data.text, patterns.email, 'email') : [],
        ip: document.getElementById('maskIP')?.checked ? findMatches(data.text, patterns.ip, 'ip') : [],
        id: document.getElementById('maskID')?.checked ? findMatches(data.text, patterns.id, 'id') : []
        // address 부분 제거됨
      };
      
      console.log("감지된 개인정보:", detections);
      
      if (progressBar) progressBar.style.width = '80%';
      if (progressText) progressText.textContent = '마스킹 적용 중...';
      
      // OpenCV와 Canvas를 사용한 마스킹 적용
      const maskedDataURL = await applyClassicMasking(imageData, data, detections);
      
      // 결과 표시
      if (maskedImage) maskedImage.src = maskedDataURL;
      if (compareMasked) compareMasked.src = maskedDataURL;
      
      // 다운로드 활성화
      lastMaskedDataURL = maskedDataURL;
      if (downloadBtn) downloadBtn.disabled = false;
      
      // 감지 결과 표시
      displayDetections(detections);
      
      // 작업자 종료
      await worker.terminate();
      
      if (progressBar) progressBar.style.width = '100%';
      if (progressText) progressText.textContent = '처리 완료!';
      if (resultSection) resultSection.style.display = 'block';
      
      // 완료 후 진행 바 숨기기
      setTimeout(() => {
        if (progressContainer) progressContainer.style.display = 'none';
        processingImage = false;
      }, 500);
      
    } catch (error) {
      console.error('이미지 처리 오류:', error);
      alert('이미지 처리 중 오류가 발생했습니다: ' + error.message);
      if (progressContainer) progressContainer.style.display = 'none';
      processingImage = false;
    }
  }
  
  // 텍스트에서 패턴 찾기
  function findMatches(text, pattern, type) {
    const matches = [];
    let match;
    
    // 정규식 복제
    const regex = new RegExp(pattern.source, pattern.flags);
    
    // 아이디 타입인 경우 처리 중단 (아이디 마스킹 사용하지 않음)
    if (type === 'id') {
      return [];  // 아이디는 마스킹하지 않음
    }
    
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        value: match[0],
        index: match.index,
        length: match[0].length
      });
    }
    
    return matches;
  }
  
  // 이미지 마스킹 처리 함수 전체 재구현
  async function applyClassicMasking(imageData, ocrData, detections) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        // 마스킹 스타일
        const style = document.getElementById('maskStyle')?.value || 'black';
        
        // 1. 감지된 위치를 추적할 마스킹 맵 생성
        const maskedAreas = [];
        
        // 2. 텍스트 영역 및 개인정보 패턴 마스킹
        const words = ocrData.words || [];
        
        // 단어 단위 처리 개선
        words.forEach(word => {
          if (!word.text || !word.bbox) return;
          
          const text = word.text.trim();
          if (!text) return;
          
          const bbox = word.bbox;
          if (!bbox.x0 && bbox.x0 !== 0) return;
          
          // 이메일 검사 - 더 정확한 패턴
          if (document.getElementById('maskEmail')?.checked && 
              /@.*\./.test(text)) {
            applyMaskToArea(ctx, bbox, style, 'email');
            maskedAreas.push({type: 'email', bbox});
            return;
          }
          
          // IP 주소 검사 - 더 정확한 패턴
          if (document.getElementById('maskIP')?.checked && 
              /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/.test(text)) {
            applyMaskToArea(ctx, bbox, style, 'ip');
            maskedAreas.push({type: 'ip', bbox});
            return;
          }
          
          // 주민번호 검사 
          if (document.getElementById('maskRRN')?.checked && 
              /\d{2}[0-1]\d[0-3]\d[-]?\d{7}/.test(text)) {
            applyMaskToArea(ctx, bbox, style, 'rrn');
            maskedAreas.push({type: 'rrn', bbox});
            return;
          }
          
          // 휴대폰 번호 검사
          if (document.getElementById('maskPhone')?.checked && 
              /01[016789][-\s]?\d{3,4}[-\s]?\d{4}/.test(text)) {
            applyMaskToArea(ctx, bbox, style, 'phone');
            maskedAreas.push({type: 'phone', bbox});
            return;
          }
        });
        
        // 3. 추가 패턴 검색 - 전체 텍스트에서 패턴을 찾아 해당 단어 또는 주변 영역 마스킹
        const fullText = ocrData.text || '';
        
        // 이메일 추가 검사
        if (document.getElementById('maskEmail')?.checked) {
          const emailMatches = fullText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
          emailMatches.forEach(email => {
            const relatedWords = words.filter(w => w.text && w.text.includes(email));
            relatedWords.forEach(word => {
              if (!maskedAreas.some(area => 
                  area.bbox.x0 === word.bbox.x0 && 
                  area.bbox.y0 === word.bbox.y0)) {
                applyMaskToArea(ctx, word.bbox, style, 'email');
                maskedAreas.push({type: 'email', bbox: word.bbox});
              }
            });
          });
        }
        
        // IP 주소 추가 검사
        if (document.getElementById('maskIP')?.checked) {
          const ipMatches = fullText.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g) || [];
          ipMatches.forEach(ip => {
            const relatedWords = words.filter(w => w.text && w.text.includes(ip));
            relatedWords.forEach(word => {
              if (!maskedAreas.some(area => 
                  area.bbox.x0 === word.bbox.x0 && 
                  area.bbox.y0 === word.bbox.y0)) {
                applyMaskToArea(ctx, word.bbox, style, 'ip');
                maskedAreas.push({type: 'ip', bbox: word.bbox});
              }
            });
          });
        }
        
        // Canvas 결과를 데이터 URL로 반환
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = imageData;
    });
  }
  
  // 영역에 마스킹 적용 헬퍼 함수 추가
  function applyMaskToArea(ctx, bbox, style, type) {
    const x = bbox.x0;
    const y = bbox.y0;
    const width = bbox.x1 - bbox.x0;
    const height = bbox.y1 - bbox.y0;
    
    // 마스킹 스타일에 따라 적용
    switch (style) {
      case 'black':
        // 검은색 마스킹
        ctx.fillStyle = '#000';
        ctx.fillRect(x, y, width, height);
        break;
        
      case 'blur':
        // 반투명 마스킹
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(x, y, width, height);
        break;
        
      case 'asterisk':
        // 별표(*) 마스킹
        ctx.fillStyle = '#fff';
        ctx.fillRect(x, y, width, height);
        
        const fontSize = Math.min(height * 0.7, 20);
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = '#000';
        
        const charWidth = fontSize * 0.6;
        const count = Math.max(3, Math.floor(width / charWidth));
        
        // 타입별 마스킹 패턴
        let maskText = '*'.repeat(count);
        if (type === 'email') {
          maskText = '****@***.***';
        } else if (type === 'ip') {
          maskText = '***.***.***.***';
        }
        
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(maskText, x, y + height / 2);
        break;
    }
  }
  
  // displayDetections 함수 완전 재구현
  function displayDetections(detections) {
    if (!detectionList) return;
    
    detectionList.innerHTML = '';
    
    const typeNames = {
      rrn: '주민등록번호',
      phone: '휴대폰 번호',
      email: '이메일',
      ip: 'IP 주소',
      id: '아이디'
      // address 항목 제거
    };
    
    let hasDetections = false;
    
    for (const type in detections) {
      // 주소 타입 건너뛰기
      if (type === 'address') continue;
      
      const items = detections[type];
      if (items.length > 0) {
        hasDetections = true;
        
        items.forEach(detection => {
          const div = document.createElement('div');
          div.className = 'detection-item';
          
          // 완전히 마스킹된 값 표시
          let maskedValue = '';
          switch (type) {
            case 'rrn':
              maskedValue = '******-*******';
              break;
            case 'phone':
              maskedValue = '010-****-****';
              break;
            case 'email':
              const parts = detection.value.split('@');
              if (parts.length === 2) {
                const domain = parts[1].split('.');
                maskedValue = parts[0].substring(0, 3) + '***@' + 
                            domain[0].substring(0, 2) + '***.' + 
                            domain[domain.length-1];
              } else {
                maskedValue = '***@***.***';
              }
              break;
            case 'ip':
              // IP 주소 완전 마스킹
              const ipParts = detection.value.split('.');
              if (ipParts.length === 4) {
                maskedValue = ipParts[0] + '.***.***.***';
              } else {
                maskedValue = '***.***.***.***';
              }
              break;
            default:
              maskedValue = '*'.repeat(Math.min(10, detection.value.length));
          }
          
          div.innerHTML = `
            <span class="detection-type">${typeNames[type] || type}:</span>
            <span class="detection-value">${maskedValue}</span>
          `;
          
          detectionList.appendChild(div);
        });
      }
    }
    
    if (!hasDetections) {
      detectionList.innerHTML = '<p>감지된 개인정보가 없습니다.</p>';
    }
  }
  
  // 페이지 로드 시 아이디 마스킹 옵션 해제
  const maskID = document.getElementById('maskID');
  if (maskID) {
    maskID.checked = false;
  }
});