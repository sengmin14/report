// CodeMirror 에디터 세팅
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "markdown",
  lineWrapping: true,
});

// ▶️ 포커스 시 플레이스홀더 자동 삭제
let clearedPlaceholder = false;
editor.on("focus", function () {
  if (!clearedPlaceholder && editor.getValue().trim() === "여기에 붙여넣으세요") {
    editor.setValue("");
    clearedPlaceholder = true;
  }
});

// --- 업무보고 포맷 검증 메인 함수 ---
function checkReportFormatting(text) {
  // 줄바꿈 통일 (\r\n -> \n) 후 라인별로 분리
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  let errors = [];

  // --- 날짜 표기 검증 ---
  // 금지되는 날짜 패턴:
  // 1. 월/일이 0으로 시작 (예: 08/23, 8/05)
  // 2. "까지" 포함된 경우 (예: ~8/30까지)
  const forbiddenZeroOrUntilDate = /\(\~?((0\d{1}|[1-9]|1[0-2]))\/((0\d{1}|[1-9]|[12][0-9]|3[01]))(\s*까지)?\)/g;

  // --- 유틸리티 함수 정의 ---
  // 특정 위치의 라인 반환 (존재하지 않으면 빈 문자열)
  function getLine(idx, offset) {
    return lines[idx + offset] !== undefined ? lines[idx + offset] : "";
  }
  // 빈 줄 체크 (공백/탭만 있는 줄도 빈 줄로 처리)
  function isBlank(line) {
    return line.trim() === "";
  }
  // 중분류 라인 체크 (- 로 시작)
  function isMid(line) {
    return /^ *- /.test(line);
  }
  // 소분류 라인 체크 (․ 로 시작)
  function isLow(line) {
    return /^ *․ /.test(line);
  }
  // 대분류/대중분류 체크 (1. 또는 (1) 형태)
  function isSection(line) {
    return /^([1-9]\d*\.\s|\(\d+\)\s)/.test(line);
  }
  // 월 제목 체크 ([8월] 형태)
  function isMonth(line) {
    return /^\[[가-힣]+\]$/.test(line);
  }
  // 구분선 체크 (5개 이상의 -)
  function isSeparator(line) {
    return /^-{5,}$/.test(line);
  }

  // --- 날짜 표기 검증 로직 ---
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let matches = line.match(forbiddenZeroOrUntilDate);
    if (matches) {
      for (let m of matches) {
        const dateContent = m.replace(/[()~]/g, "").replace(/\s/g, "");
        const [month, rest] = dateContent.split("/");
        const untilIncluded = m.includes("까지");
        
        // 날짜 형식 체크
        if ((month.length === 2 && month.startsWith("0")) || // 월이 0으로 시작
            (rest.length > 1 && rest.startsWith("0")) ||     // 일이 0으로 시작
            untilIncluded) {                                 // "까지" 포함
          errors.push(
            `[${i + 1}행] 허용되지 않는 날짜 표기: ${m} (날짜는 (8/23), (~7/30) 형태만 허용, 월/일 0으로 시작·"까지" 포함은 금지)`
          );
        }
      }
    }
  }

  // --- 소분류(․) 상태 중복 체크 ---
  let idx = 0;
  while (idx < lines.length) {
    const line = lines[idx];
    if (isMid(line)) {
      // 중분류의 상태 추출 (완료/진행중/보류/취소/날짜)
      const midStateMatch = line.match(/(.+)\((완료|진행중|보류|취소|~?\d{1,2}\/\d{1,2})\)$/);
      const midState = midStateMatch ? midStateMatch[2] : null;

      // 연속된 소분류 블록 탐색 (빈 줄 허용)
      let lowList = [];
      let j = idx + 1;
      while (j < lines.length && (isLow(lines[j]) || isBlank(lines[j]))) {
        if (isLow(lines[j])) {
          let m = lines[j].match(/(.+)\((완료|진행중|보류|취소|~?\d{1,2}\/\d{1,2})\)$/);
          let state = m ? m[2] : null;
          lowList.push({ idx: j, state });
        }
        j++;
      }

      // 소분류들의 상태가 모두 동일한 경우 체크
      if (lowList.length > 1) {
        const allStates = lowList.map(x => x.state);
        const uniqueStates = [...new Set(allStates.filter(Boolean))];
        // 모든 소분류가 같은 상태면 중분류에만 상태 표시해야 함
        if (uniqueStates.length === 1 && uniqueStates[0] !== null && allStates.every(x => x)) {
          for (const low of lowList) {
            if (low.state) {
              errors.push(
                `[${low.idx + 1}행] 소분류가 모두 같은 상태(${uniqueStates[0]})일 때는, 소분류에는 상태를 입력하지 마시고 중분류에만 상태를 입력하세요.`
              );
            }
          }
        }
      }
      idx = j;
      continue;
    }
    idx++;
  }

  // --- 공백 및 특수문자 규칙 검증 ---
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 1. 들여쓰기 검증 (2칸 이상 금지)
    if (!isBlank(line)) {
      if (/^\s{2,}/.test(line)) {
        errors.push(`[${i + 1}행] 들여쓰기는 1칸 이상 금지(불필요한 앞공백).`);
      }
    }

    // 2. 괄호/대괄호 공백 규칙
    let skipLeftBracketSpace = false;
    // 중분류/소분류의 시작 부분 괄호는 예외 처리
    if ((isMid(line) || isLow(line)) &&
        (line.match(/^ *- \(/) || line.match(/^ *- \[/) || 
         line.match(/^ *․ \(/) || line.match(/^ *․ \[/))) {
      skipLeftBracketSpace = true;
    }

    if (!isSection(line)) {
      // 좌측 공백+괄호 예외처리
      if (/( \(|\[ )/.test(line)) {
        if (!(skipLeftBracketSpace && (/( \(|\[ )/.test(line)))) {
          errors.push(`[${i + 1}행] ( ) 또는 [ ] 괄호/대괄호 양쪽에 공백이 있으면 안 됩니다.`);
        }
      }
      // 나머지 괄호 공백(오른쪽) 체크
      if (/(\(\s| \)|\)\s|\[\s| \]|\]\s)/.test(line)) {
        errors.push(`[${i + 1}행] ( ) 또는 [ ] 괄호/대괄호 양쪽에 공백이 있으면 안 됩니다.`);
      }
    }

    // 3. 특수문자 공백 규칙
    // >와 : 앞뒤 공백 금지
    if (/( [>:])|([>:] )/.test(line)) {
      errors.push(`[${i + 1}행] '>', ':' 기호의 앞뒤에 공백이 있으면 안 됩니다.`);
    }

    // 4. + 기호는 반드시 앞뒤 공백 1칸씩 필요
    if (/\S\+\S/.test(line) || /\+\+/.test(line)) {
      errors.push(`[${i + 1}행] '+' 기호는 반드시 앞뒤로 공백이 1칸씩 있어야 합니다.`);
    }
    if (/\+/.test(line)) {
      if (!/ (\+) /.test(line) && !/(^|\s)\+(\s|$)/.test(line)) {
        errors.push(`[${i + 1}행] '+' 기호는 반드시 앞뒤로 공백이 1칸씩 있어야 합니다.`);
      }
    }

    // 5. 콤마(,) 공백 규칙
    // 앞에 공백 금지, 뒤에 반드시 공백 1칸
    if (/\s,/.test(line)) {
      errors.push(`[${i + 1}행] ','의 앞에는 공백이 있으면 안 됩니다.`);
    }
    if (/,[^ ]/.test(line)) {
      errors.push(`[${i + 1}행] ','의 뒤에는 반드시 공백이 1칸 있어야 합니다.`);
    }
    if (/,\s{2,}/.test(line)) {
      errors.push(`[${i + 1}행] ','의 뒤에는 공백이 1칸만 있어야 합니다.`);
    }
  }
  return errors;
}

// 디바운스 함수 추가 (너무 자주 검증하지 않도록)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 오류 메시지 클릭 핸들러 함수 (수정됨)
function attachErrorClickHandlers() {
  document.querySelectorAll(".error-msg").forEach((el) => {
    el.style.cursor = "pointer";
    // 기존 이벤트 제거 후 새로 등록
    el.onclick = null;
    el.onclick = function () {
      // 기존 마커 모두 제거
      editor.getAllMarks().forEach(marker => marker.clear());
      
      const line = parseInt(this.getAttribute("data-line"), 10) - 1;
      const lineContent = editor.getLine(line);
      const msg = this.textContent;

      // 1. 들여쓰기 규칙
      if (msg.includes("들여쓰기")) {
        const match = lineContent.match(/^\s{2,}/);
        if (match) {
          editor.markText(
            {line: line, ch: 0},
            {line: line, ch: match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        }
      }
      
      // 2. 특수문자 공백 규칙 (수정됨)
      else if (msg.includes(">") || msg.includes(":")) {
        const matches = [...lineContent.matchAll(/\s+[>:]|[>:]\s+/g)];
        matches.forEach(match => {
          editor.markText(
            {line: line, ch: match.index},
            {line: line, ch: match.index + match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        });
      }
      else if (msg.includes("+")) {
        const matches = [...lineContent.matchAll(/\S\+\S|\+\+/g)];
        matches.forEach(match => {
          editor.markText(
            {line: line, ch: match.index},
            {line: line, ch: match.index + match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        });
      }
      else if (msg.includes(",")) {
        const matches = [...lineContent.matchAll(/\s+,|,\s{2,}|,[^\s]/g)];
        matches.forEach(match => {
          editor.markText(
            {line: line, ch: match.index},
            {line: line, ch: match.index + match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        });
      }
      
      // 3. 괄호 규칙
      else if (msg.includes("괄호") || msg.includes("대괄호")) {
        const matches = [...lineContent.matchAll(/\s+[\(\[\]\)]|[\(\[\]\)]\s+/g)];
        matches.forEach(match => {
          editor.markText(
            {line: line, ch: match.index},
            {line: line, ch: match.index + match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        });
      }
      
      // 4. 날짜 표기 규칙
      else if (msg.includes("날짜")) {
        // "까지"가 포함된 날짜
        const dateUntilMatches = [...lineContent.matchAll(/\([^)]*?까지[^)]*\)/g)];
        dateUntilMatches.forEach(match => {
          editor.markText(
            {line: line, ch: match.index},
            {line: line, ch: match.index + match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        });

        // 월/일이 0으로 시작하는 날짜
        const zeroDateMatches = [...lineContent.matchAll(/\(~?\s*0\d{1}\s*\/\s*\d{1,2}\s*\)|\(~?\s*\d{1,2}\s*\/\s*0\d{1}\s*\)/g)];
        zeroDateMatches.forEach(match => {
          editor.markText(
            {line: line, ch: match.index},
            {line: line, ch: match.index + match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        });
      }
      
      // 5. 분류 표기 규칙
      else if (msg.includes("대분류")) {
        const match = lineContent.match(/^[1-9]\d*\.\s{2,}/);
        if (match) {
          editor.markText(
            {line: line, ch: 0},
            {line: line, ch: match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        }
      }
      else if (msg.includes("대중분류")) {
        const match = lineContent.match(/^\(\d+\)\s{2,}/);
        if (match) {
          editor.markText(
            {line: line, ch: 0},
            {line: line, ch: match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        }
      }
      else if (msg.includes("중분류")) {
        const match = lineContent.match(/^-\s{2,}/);
        if (match) {
          editor.markText(
            {line: line, ch: 0},
            {line: line, ch: match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        }
      }
      else if (msg.includes("소분류")) {
        const match = lineContent.match(/^․\s{2,}/);
        if (match) {
          editor.markText(
            {line: line, ch: 0},
            {line: line, ch: match[0].length},
            {
              className: "error-highlight",
              css: "background-color: #ffd7d7; border-radius: 3px;"
            }
          );
        }
      }

      // 항상 해당 라인으로 이동 및 포커스
      editor.focus();
      editor.setCursor({line, ch: 0});
      editor.scrollIntoView({line, ch: 0}, 100);
    };
  });
}

// 실시간 검증 함수
function performRealTimeValidation() {
  const input = editor.getValue();
  const resultDiv = document.getElementById("result");
  
  // 빈 내용이거나 플레이스홀더면 결과 숨기기
  if (!input.trim() || input.trim() === "여기에 붙여넣으세요") {
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none";
    return;
  }
  
  resultDiv.style.display = "block";
  const errors = checkReportFormatting(input);
  
  // 기존 마커 모두 제거
  editor.getAllMarks().forEach(marker => marker.clear());

  if (errors.length === 0) {
    resultDiv.innerHTML = `<div class="pass">✅ 모든 항목이 규칙에 맞습니다.</div>`;
  } else {
    // 오류 메시지를 행 번호 순서대로 정렬
    const sortedErrors = errors.sort((a, b) => {
      const lineA = parseInt(a.match(/^\[(\d+)행\]/)[1]);
      const lineB = parseInt(b.match(/^\[(\d+)행\]/)[1]);
      return lineA - lineB;
    });

    resultDiv.innerHTML =
      `<div class="fail">❌ ${errors.length}건의 오류가 발견되었습니다.<br><ul style="list-style-type: none; padding-left: 0;">` +
      sortedErrors
        .map((msg) => {
          const match = msg.match(/^\[(\d+)행\]/);
          const lineNum = match ? parseInt(match[1], 10) : 1;
          return `<li class="error-msg" data-line="${lineNum}">
          <span style="color: #ff5353; margin-right: 4px;">▶</span>
          ${msg}
        </li>`;
        })
        .join("") +
      "</ul></div>";

    // 오류 메시지 클릭 이벤트 핸들러 재등록 (하이라이트 기능 포함)
    attachErrorClickHandlers();
  }
}

// 에디터 변경 시 실시간 검증 (500ms 디바운스)
const debouncedValidation = debounce(performRealTimeValidation, 500);

editor.on("change", function() {
  debouncedValidation();
});

// 초기 로드 시에도 검증 실행
editor.on("focus", function () {
  if (!clearedPlaceholder && editor.getValue().trim() === "여기에 붙여넣으세요") {
    editor.setValue("");
    clearedPlaceholder = true;
  }
  // 포커스 시에도 검증 실행
  setTimeout(performRealTimeValidation, 100);
});

// 모달 관련 코드
const modal = document.getElementById("ruleModal");
const helpBtn = document.getElementById("helpBtn");
const closeBtn = document.getElementsByClassName("close")[0];

helpBtn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

// 기능 추가 이력 모달 관련 코드
const changelogModal = document.getElementById("changelogModal");
const changelogBtn = document.getElementById("changelogBtn");
const changelogCloseBtn = document.querySelector(".changelog-close");

changelogBtn.onclick = function () {
  changelogModal.style.display = "block";
  document.body.style.overflow = "hidden";
};

changelogCloseBtn.onclick = function () {
  changelogModal.style.display = "none";
  document.body.style.overflow = "auto";
};

// 배경 클릭 시 모달 닫기
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
  if (event.target == changelogModal) {
    changelogModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// ESC 키로 모달 닫기
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
    if (changelogModal.style.display === "block") {
      changelogModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
});