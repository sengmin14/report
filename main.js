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
        errors.push(`[${i + 1}행] 들여쓰기는 2칸 이상 금지(불필요한 앞공백).`);
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

    // 6. 혼동/유사 문자 검사 (소분류 기호 / 전각 기호 / 유사 dash / wave dash)
    // 소분류 기호: 반드시 U+2024(․) 사용. ('.' U+002E, '·' U+00B7, '•' U+2022 는 오류)
    if (/^ *[.\u00B7\u2022] /.test(line)) {
      const wrong = line.match(/^ *(.) /)[1];
      errors.push(`[${i + 1}행] 소분류 기호는 '․'(U+2024)만 허용합니다. '${wrong}' 문자 대신 '․' 사용.`);
    }
    // 중분류 기호: en/em dash 등 금지 (허용: - U+002D)
    if (/^ *[‐–—]\s/.test(line)) { // U+2010 ‐, U+2013 –, U+2014 —
      const wrong = line.match(/^ *([‐–—])\s/)[1];
      errors.push(`[${i + 1}행] 중분류 기호는 '-'(ASCII)만 허용합니다. '${wrong}' → '-' 로 수정.`);
    }
    // 날짜 범위 등에서 wave dash / 풀각 틸드 사용 금지 (허용: '~' U+007E)
    if (/[～∼]/.test(line)) { // U+FF5E, U+223C
      errors.push(`[${i + 1}행] 날짜/범위 표기는 '~'(ASCII)만 허용합니다. '～' 또는 '∼' 발견.`);
    }
    // 전각 괄호 / 콜론 / 부등호 / 플러스 / 콤마 사용 금지
    const fullWidthMap = [
      { re: /[（）]/g, desc: "괄호", suggest: "()" },
      { re: /[：]/g, desc: "콜론", suggest: ":" },
      { re: /[＞]/g, desc: ">'", suggest: ">" },
      { re: /[＋]/g, desc: "플러스", suggest: "+" },
      { re: /[，]/g, desc: "콤마", suggest: "," }
    ];
    for (const item of fullWidthMap) {
      const m = line.match(item.re);
      if (m) {
        const unique = [...new Set(m)];
        errors.push(
          `[${i + 1}행] 전각 ${item.desc} ${unique.map(c=>`'${c}'`).join(", ")} 사용됨. ASCII '${item.suggest}' 로 교체하세요.`
        );
      }
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

/* ------------------------------ Highlight Util ------------------------------ */

// === 하이라이트 로직 개선 패치 시작 ======================================

// 1) 오류 유형 식별 개선 (문구 변경에도 안정적)
//    - 최소한의 정규식 / 순서 기반 매칭
function determineErrorType(msg) {
  if (/들여쓰기.*2칸 이상/.test(msg)) return "indent";
  if (/괄호\/대괄호/.test(msg)) return "bracket";
  if (/'?>'?,? ':'?/.test(msg) || />', ':'/.test(msg) || /기호의 앞뒤/.test(msg)) return "anglecolon";
  if (/\+.*공백/.test(msg)) return "plus";
  if (/','의/.test(msg) || /콤마/.test(msg)) return "comma";
  if (/허용되지 않는 날짜|날짜.*금지/.test(msg)) return "date";
  if (/소분류가 모두 같은 상태/.test(msg)) return "low-dup-state";
  if (/소분류 기호는/.test(msg) || /전각 .* 사용됨/.test(msg) || /wave|ASCII/.test(msg)) return "confusable";
  if (/중분류 기호는/.test(msg)) return "confusable";
  return "generic";
}

// 2) 공통 마킹 유틸
function highlightError(lineIndex, type) {
  editor.getAllMarks().forEach(m => m.clear());
  const text = editor.getLine(lineIndex);

  const addMark = (start, end) => {
    if (start < 0 || end <= start) return;
    editor.markText(
      { line: lineIndex, ch: start },
      { line: lineIndex, ch: end },
      { className: "error-highlight", css: "background:#ffd7d7; border-radius:3px;" }
    );
  };

  switch (type) {
    case "indent": {
      const m = text.match(/^\s{2,}/);
      if (m) addMark(0, m[0].length);
      break;
    }
    case "bracket": {
      // 괄호 주변 불필요 공백
      [...text.matchAll(/\s+[\(\[\]\)]|[\(\[\]\)]\s+/g)]
        .forEach(m => addMark(m.index, m.index + m[0].length));
      break;
    }
    case "anglecolon": {
      [...text.matchAll(/\s+[>:]|[>:]\s+/g)]
        .forEach(m => addMark(m.index, m.index + m[0].length));
      break;
    }
    case "plus": {
      // lookbehind 미사용 버전: '+' 스캔 후 적합 패턴(앞뒤 정확히 한 칸) 아니면 마킹
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== '+') continue;
        const prev = text[i - 1];
        const next = text[i + 1];
        const prev2 = text[i - 2];
        const next2 = text[i + 2];
        const ok =
          prev === ' ' &&
          next === ' ' &&
          prev2 !== ' ' && // 앞쪽 한 칸만
          next2 !== ' ';   // 뒤쪽 한 칸만
        if (!ok) addMark(i, i + 1);
      }
      break;
    }
    case "comma": {
      // 앞 공백 / 뒤 없음 / 뒤 2칸 이상
      [...text.matchAll(/\s+,|,[^\s]|,\s{2,}/g)]
        .forEach(m => addMark(m.index, m.index + m[0].length));
      break;
    }
    case "date": {
      [...text.matchAll(/\([^)]*?까지[^)]*\)/g)]
        .forEach(m => addMark(m.index, m.index + m[0].length));
      [...text.matchAll(/\(~?\s*0\d\s*\/\s*\d{1,2}\s*\)|\(~?\s*\d{1,2}\s*\/\s*0\d\s*\)/g)]
        .forEach(m => addMark(m.index, m.index + m[0].length));
      break;
    }
    case "low-dup-state": {
      // 마지막 상태 토큰만
      const m = text.match(/\((완료|진행중|보류|취소|~?\d{1,2}\/\d{1,2})\)\s*$/);
      if (m) {
        const start = text.lastIndexOf(m[0]);
        addMark(start, start + m[0].length);
      }
      break;
    }
    case "confusable": {
      // 1) 잘못된 소분류 기호 (행 시작 한정)
      const wrongBullet = text.match(/^( *?)([.\u00B7\u2022]) (?=\S)/);
      if (wrongBullet) {
        const start = wrongBullet[1].length;
        addMark(start, start + 1);
      }
      // 2) 잘못된 중분류 dash
      const wrongDash = text.match(/^( *?)([‐–—])\s/);
      if (wrongDash) {
        const start = wrongDash[1].length;
        addMark(start, start + wrongDash[2].length);
      }
      // 3) 틸드 변종
      [...text.matchAll(/[～∼]/g)].forEach(m => addMark(m.index, m.index + 1));
      // 4) 전각 기호들
      [...text.matchAll(/[（）：＞＋，]/g)].forEach(m => addMark(m.index, m.index + 1));
      break;
    }
    default: {
      // 안전 기본: 처음 120자 정도만 (성능 보호)
      addMark(0, Math.min(text.length, 120));
    }
  }

  editor.focus();
  editor.setCursor({ line: lineIndex, ch: 0 });
  editor.scrollIntoView({ line: lineIndex, ch: 0 }, 100);
}

// 3) 이벤트 위임 (이미 존재할 경우 중복 등록되지 않도록 1회만)
// 이전 attachErrorClickHandlers 기반 개별 바인딩 제거 권장
(function initErrorClickDelegation() {
  const resultDiv = document.getElementById("result");
  if (!resultDiv || resultDiv.__errorDelegated) return;
  resultDiv.__errorDelegated = true;
  resultDiv.addEventListener("click", (e) => {
    const li = e.target.closest(".error-msg");
    if (!li) return;
    const line = parseInt(li.dataset.line, 10) - 1;
    const type = li.dataset.type || "generic";
    if (Number.isInteger(line) && line >= 0) {
      highlightError(line, type);
    }
  });
})();

// 4) 미사용(구식) 함수 제거 권장: attachErrorClickHandlers
// 기존 attachErrorClickHandlers 정의가 아래에 남아있다면 완전히 삭제하세요.

// === 하이라이트 로직 개선 패치 끝 =========================================

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

    // 오류가 너무 많은 경우 요약 표시
    const maxDisplayErrors = 50; // 최대 표시할 오류 개수
    const displayErrors = sortedErrors.slice(0, maxDisplayErrors);
    const hiddenCount = errors.length - displayErrors.length;

    resultDiv.innerHTML =
      `<div class="fail">❌ ${errors.length}건의 오류가 발견되었습니다.` +
      (hiddenCount > 0 ? ` (${maxDisplayErrors}개만 표시, ${hiddenCount}개 숨김)` : '') +
      `<br><ul class="error-list" style="list-style:none; padding-left:0; margin:10px 0 0;">` +
      displayErrors.map((msg) => {
        const match = msg.match(/^\[(\d+)행\]/);
        const lineNum = match ? parseInt(match[1], 10) : 1;
        const type = determineErrorType(msg);
        return `<li class="error-msg" data-line="${lineNum}" data-type="${type}">
          <span style="color:#ff5353; margin-right:4px;">▶</span>${msg}
        </li>`;
      }).join("") +
      "</ul></div>";

    // (삭제) 항상 맨 위로 스크롤 초기화하던 코드 제거
    // resultDiv.scrollTop = 0;
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