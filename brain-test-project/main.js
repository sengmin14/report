(function initNumGrid() {
  // 전체 문서(<html>)에 숫자 격자 전용 클래스 추가 -> 다른 페이지와 구분
  document.documentElement.classList.add('numgrid-root');

  // <body>에도 페이지 구분을 위한 전용 클래스 부여 -> 스타일 관리 용이
  document.body.classList.add('numgrid-page');

  // 스크롤 허용 여부를 제어하는 헬퍼 함수
  // allow가 true면 클래스를 추가, false면 제거하여 스크롤 가능/불가 상태를 전환
  const setScroll = (allow) => document.documentElement.classList.toggle('ng-scroll', !!allow);

  // 페이지 진입 직후에는 스크롤을 숨김 -> 숫자 격자 초기 연출에 집중하도록 설정
  setScroll(false);

  // 숫자 격자를 렌더링할 루트 DOM 요소를 미리 찾아 저장 -> 반복 접근 비용 절약
  const root = document.getElementById('ngRoot');

  // 최고 기록을 로컬 스토리지에 저장할 때 사용할 키 값을 상수로 선언 -> 오타 방지 및 재사용 용이
  const BEST_KEY = 'numgrid:best:1to20';

// 입력 방식/디바이스 보정 ----------------------------------------------
// 최근 입력 타입(마우스/터치 등)을 기억해 이후 게임 결과 보정에 활용
let lastInputType = null;

// 실제 기록(ms)을 장치 특성에 따라 가감해 보다 공정한 비교가 되도록 조정
function adjustSecondsForDevice(seconds, inputType) {
  // 다양한 포인팅 디바이스별 평균적인 입력 지연값(초)을 사전 정의
  const OFFSETS = {
    mouse: -0.35,          // 정밀 포인터(마우스)는 평균적으로 빠른 반응 → 약간 빼줌
    pen:   -0.15,          // 펜 입력은 마우스보다 조금 느리지만 터치보다는 빠름
    touch:  0.00,          // 손가락 터치는 별도 보정 없음
    defaultDesktop: -0.30, // 명시적 타입이 없지만 데스크톱 정밀 입력이라 추정되는 경우
  };

  // 현재 장치가 정밀 포인터(fine)인지, 손가락 위주(coarse)인지 파악
  const fine = window.matchMedia?.('(any-pointer: fine)').matches;
  const coarse = window.matchMedia?.('(any-pointer: coarse)').matches;

  let offset = 0;
  if (inputType === 'mouse') offset = OFFSETS.mouse;
  else if (inputType === 'pen') offset = OFFSETS.pen;
  else if (inputType === 'touch') offset = OFFSETS.touch;
  else if (fine && !coarse) offset = OFFSETS.defaultDesktop; // 마우스로 추정될 때 적용

  // 최종 초 단위 기록과 적용된 보정값을 반환
  return { seconds: Math.max(0, seconds + offset), offset };
}

  function renderIntro() {
    // 최고 기록(ms)이 저장되어 있으면 불러와 인트로 카드에 표시
    const bestMs = localStorage.getItem(BEST_KEY);

    // 최고 기록이 있을 때만 칩(chip)을 만들어 보여주기
    const bestChip = (() => {
      if (!bestMs) return '';
      const s = (+bestMs) / 1000;
      const age = secondsToAge(s); // 최고 기록을 뇌 나이로 환산
      return `<div class="ng-chip">최고 기록: <b>${s.toFixed(2)}s</b> <span style="color:var(--soft)">(${age}세)</span></div>`;
    })();

    root.innerHTML = `
      <div class="ng-card">
        <p>화면에 <b>1~20</b>이 무작위로 배치됩니다. <b>1 → 20</b> 순서대로 빠르게 누르세요.</p>
        <div class="ng-kpi">
          ${bestChip}
        </div>
        <div class="ng-actions">
          <button class="ng-btn primary" id="ngStart">시작</button>
          ${bestMs ? `<button class="ng-btn" id="ngClear">기록 초기화</button>` : ''}
        </div>
      </div>
    `;
    setScroll(false); // 인트로에서는 스크롤 숨김
    document.getElementById('ngStart').addEventListener('click', startGame);
    const clearBtn = document.getElementById('ngClear');
    if (clearBtn) clearBtn.addEventListener('click', () => { localStorage.removeItem(BEST_KEY); renderIntro(); });
  }

  function startGame() {
    setScroll(false); // 게임 중 스크롤 방지

    // 다음에 눌러야 할 숫자, 스톱워치 시작 시각 등 핵심 상태 변수 초기화
    let next = 1;
    let t0 = 0;
    let finished = false;
    let locked = true; // 카운트다운 중에는 입력 막기

    // 1~20 숫자를 셔플(Fisher-Yates)하여 무작위 배치
    const nums = Array.from({ length: 20 }, (_, i) => i + 1);
    for (let i = nums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    root.innerHTML = `
      <div class="ng-card">
        <div class="ng-kpi">
          <div class="ng-chip">다음 숫자: <b id="ngNext">1</b></div>
          <div class="ng-chip">시간: <b id="ngTime">0.00</b>s</div>
        </div>
        <div class="ng-grid-box" style="position:relative;">
          <div class="ng-grid" id="ngGrid" style="pointer-events:none;"></div>
          <div id="ngCountdown"
               style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
                      background:rgba(255,255,255,.85); border-radius:12px; font-weight:800; font-size:52px;
                      color:var(--ui,#1f2b44);">3</div>
        </div>
      </div>
    `;

    const grid = document.getElementById('ngGrid');
    const timeEl = document.getElementById('ngTime');
    const nextEl = document.getElementById('ngNext');
    const cdEl = document.getElementById('ngCountdown');

    // 셀 렌더
    nums.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ng-cell';
      btn.textContent = String(n);
      btn.dataset.n = String(n);
      grid.appendChild(btn);
    });

    // 타이머 루프: requestAnimationFrame으로 매 프레임마다 UI 갱신
    let rafId = 0;
    function tick() {
      if (finished) return;                   // 게임이 끝나면 중단
      const ms = performance.now() - t0;      // 경과 시간 계산
      timeEl.textContent = (ms / 1000).toFixed(2); // 소수 2자리까지 표시
      rafId = requestAnimationFrame(tick);    // 다음 프레임 예약
    }

    // 3→2→1 카운트다운 UI를 보여준 뒤 실제 게임 시작
    function startCountdown() {
      let c = 3;
      cdEl.textContent = c;
      const timer = setInterval(() => {
        c -= 1;
        if (c > 0) {
          cdEl.textContent = c;               // 카운트다운 숫자 갱신
        } else {
          clearInterval(timer);
          cdEl.textContent = '시작!';         // 0이 되면 "시작!" 안내
          setTimeout(() => {
            locked = false;                   // 입력 허용
            t0 = performance.now();           // 스톱워치 시작
            grid.style.pointerEvents = 'auto';
            cdEl.style.display = 'none';      // 카운트다운 오버레이 숨김
            rafId = requestAnimationFrame(tick);
          }, 500);                            // 0.5초 후 본게임 시작
        }
      }, 1000);
    }
    startCountdown();

    // 숫자 셀을 누를 때 호출되는 공통 핸들러
    function onCell(e) {
      if (locked) return;                     // 카운트다운 중이면 무시

      // 첫 입력 시 어떤 기기로 눌렀는지 저장 → 결과 보정에 사용
      if (!lastInputType) {
        lastInputType = e.pointerType || (e.type === 'mousedown' ? 'mouse' : e.type === 'touchstart' ? 'touch' : null);
      }

      const n = +e.currentTarget.dataset.n;
      if (finished || n !== next) return;     // 순서가 아니면 무시
      e.currentTarget.classList.add('hit');   // 맞춘 숫자 시각적 표시
      next += 1;
      nextEl.textContent = String(Math.min(next, 20));

      if (next > 20) {
        finished = true;
        cancelAnimationFrame(rafId);          // 타이머 정지
        const ms = performance.now() - t0;
        showResult(ms);                       // 결과 화면으로 이동
      }
    }

    // 클릭 대신 즉시 반응하는 입력 이벤트로 바인딩
    grid.querySelectorAll('.ng-cell').forEach(el => {
      el.addEventListener('pointerdown', onCell, { passive: true });
      el.addEventListener('mousedown', onCell, { passive: true });
      el.addEventListener('touchstart', onCell, { passive: true });
    });
  }

  // 시간(초) → 나이 매핑 테이블
  const AGE_TABLE = [
    { t: 6.5, age: 20 }, { t: 6.6, age: 21 }, { t: 6.7, age: 22 }, { t: 6.8, age: 24 }, { t: 6.9, age: 25 },
    { t: 7.0, age: 26 }, { t: 7.1, age: 27 }, { t: 7.2, age: 28 }, { t: 7.3, age: 30 }, { t: 7.4, age: 31 },
    { t: 7.5, age: 32 }, { t: 7.6, age: 33 }, { t: 7.7, age: 34 }, { t: 7.8, age: 35 }, { t: 7.9, age: 37 },
    { t: 8.0, age: 38 }, { t: 8.1, age: 39 }, { t: 8.2, age: 40 }, { t: 8.3, age: 41 }, { t: 8.4, age: 43 },
    { t: 8.5, age: 44 }, { t: 8.6, age: 45 }, { t: 8.7, age: 46 }, { t: 8.8, age: 47 }, { t: 8.9, age: 48 },
    { t: 9.0, age: 49 }, { t: 9.1, age: 51 }, { t: 9.2, age: 52 }, { t: 9.3, age: 53 }, { t: 9.4, age: 54 },
    { t: 9.5, age: 55 }, { t: 9.6, age: 56 }, { t: 9.7, age: 58 }, { t: 9.8, age: 59 }, { t: 9.9, age: 60 },
    { t: 10.0, age: 61 }, { t: 10.1, age: 62 }, { t: 10.2, age: 63 }, { t: 10.3, age: 64 }, { t: 10.4, age: 65 },
    { t: 10.5, age: 67 }, { t: 10.6, age: 68 }, { t: 10.7, age: 69 }, { t: 10.8, age: 70 }, { t: 10.9, age: 71 },
    { t: 11.0, age: 72 }, { t: 11.1, age: 73 }, { t: 11.2, age: 74 }, { t: 11.3, age: 76 }, { t: 11.4, age: 77 },
    { t: 11.5, age: 78 }, { t: 11.6, age: 79 }, { t: 11.7, age: 80 }, { t: 11.8, age: 81 }, { t: 11.9, age: 82 },
    { t: 12.0, age: 83 }, { t: 12.1, age: 84 }, { t: 12.2, age: 86 }, { t: 12.3, age: 87 }, { t: 12.4, age: 88 },
    { t: 12.5, age: 89 }, { t: 12.6, age: 90 }, { t: 12.7, age: 91 }, { t: 12.8, age: 92 }, { t: 12.9, age: 93 },
    { t: 13.0, age: 94 }, { t: 13.1, age: 95 }, { t: 13.2, age: 96 }, { t: 13.3, age: 98 }, { t: 13.4, age: 99 },
    { t: 13.5, age: 99 },
  ];

  // 테이블 기반 환산(선형 보간, 범위 밖은 양끝값으로 클램프)
  function secondsToAge(s) {
    const tbl = AGE_TABLE;
    if (s <= tbl[0].t) return tbl[0].age;
    if (s >= tbl[tbl.length - 1].t) return tbl[tbl.length - 1].age;
    for (let i = 0; i < tbl.length - 1; i++) {
      const a = tbl[i], b = tbl[i + 1];
      if (s >= a.t && s <= b.t) {
        const r = (s - a.t) / (b.t - a.t);
        return Math.round(a.age + r * (b.age - a.age));
      }
    }
    return tbl[tbl.length - 1].age;
  }

  // 결과 계산부에 적용
  function showResult(ms) {
    const sRaw = ms / 1000;                   // ms → 초 변환
    const adj = adjustSecondsForDevice(sRaw, lastInputType); // 입력 방식 보정
    const s = adj.seconds;

    const age = secondsToAge(s);              // 보정된 초를 뇌 나이로 환산

    const prevBest = localStorage.getItem(BEST_KEY);
    const isBest = !prevBest || ms < +prevBest; // 기존 최고 기록과 비교
    if (isBest) localStorage.setItem(BEST_KEY, String(ms)); // 최고 기록 갱신 시 저장

    // 갱신 이후 값을 다시 읽어와 최종 최고 기록 정보 구성
    const bestMsAfter = +localStorage.getItem(BEST_KEY);
    const bestSecAfter = bestMsAfter / 1000;
    const bestAgeAfter = secondsToAge(bestSecAfter);

    root.innerHTML = `
      <div class="ng-card">
        <h2 style="margin:0 0 8px; font-size:20px;">결과</h2>
        <div class="ng-kpi">
          <div class="ng-chip">기록: <b>${sRaw.toFixed(2)}s</b>${adj.offset ? ` <span style="color:var(--soft)">(보정 ${adj.offset.toFixed(2)}s → ${s.toFixed(2)}s)</span>` : ''}</div>
          <div class="ng-chip">추정 뇌나이: <b>${age}세</b></div>
          ${isBest ? `<div class="ng-chip" style="color:var(--primary)">🎉 최고 기록 갱신</div>` : ''}
          <div class="ng-chip">최고 기록: <b>${bestSecAfter.toFixed(2)}s</b> <span style="color:var(--soft)">(${bestAgeAfter}세)</span></div>
        </div>
        <div class="ng-actions">
          <button class="ng-btn primary" id="ngRetry">다시 하기</button>
          <a class="ng-btn" href="../index.html">메인으로</a>
        </div>

        <div style="margin-top:12px;">
          <div style="overflow:auto;">
            <table style="width:100%; border-collapse:collapse; font-size:13px;">
              <thead>
                <tr>
                  <th style="text-align:left; padding:6px 8px; border-bottom:1px solid var(--border, #e5e7eb);">나이</th>
                  <th style="text-align:left; padding:6px 8px; border-bottom:1px solid var(--border, #e5e7eb);">평균 성공 시간(초)</th>
                  <th style="text-align:left; padding:6px 8px; border-bottom:1px solid var(--border, #e5e7eb);">의학적 근거 요약</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style="padding:6px 8px;">20세</td><td style="padding:6px 8px;"><b>6.5</b></td><td style="padding:6px 8px;">뇌 처리속도·반응속도 최고, 시각탐색 최소</td></tr>
                <tr><td style="padding:6px 8px;">25세</td><td style="padding:6px 8px;">6.7</td><td style="padding:6px 8px;">반응속도 최적, 손-눈 협응 안정화</td></tr>
                <tr><td style="padding:6px 8px;">30세</td><td style="padding:6px 8px;">7.1</td><td style="padding:6px 8px;">처리속도 약간 저하 시작</td></tr>
                <tr><td style="padding:6px 8px;">35세</td><td style="padding:6px 8px;">7.4</td><td style="padding:6px 8px;">시각 탐색 속도 약간 감소</td></tr>
                <tr><td style="padding:6px 8px;">40세</td><td style="padding:6px 8px;">7.8</td><td style="padding:6px 8px;">반응속도 10~15% 저하, 주의력 분산 ↑</td></tr>
                <tr><td style="padding:6px 8px;">45세</td><td style="padding:6px 8px;">8.2</td><td style="padding:6px 8px;">신경 전달속도·작업기억 감소 시작</td></tr>
                <tr><td style="padding:6px 8px;">50세</td><td style="padding:6px 8px;">8.7</td><td style="padding:6px 8px;">손가락 민첩성·근육 반응 저하</td></tr>
                <tr><td style="padding:6px 8px;">55세</td><td style="padding:6px 8px;">9.2</td><td style="padding:6px 8px;">시각 주의 전환 지연 뚜렷</td></tr>
                <tr><td style="padding:6px 8px;">60세</td><td style="padding:6px 8px;">9.8</td><td style="padding:6px 8px;">작업기억 감소, 오탈자 증가</td></tr>
                <tr><td style="padding:6px 8px;">65세</td><td style="padding:6px 8px;">10.3</td><td style="padding:6px 8px;">전두엽 기능 저하 영향 커짐</td></tr>
                <tr><td style="padding:6px 8px;">70세</td><td style="padding:6px 8px;">10.9</td><td style="padding:6px 8px;">시각·운동 기능 저하 본격화</td></tr>
                <tr><td style="padding:6px 8px;">75세</td><td style="padding:6px 8px;">11.5</td><td style="padding:6px 8px;">탐색·반응 속도 모두 확연히 느림</td></tr>
                <tr><td style="padding:6px 8px;">80세</td><td style="padding:6px 8px;">12.2</td><td style="padding:6px 8px;">시각·인지·운동 저하 누적, 20대 대비 약 2배</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
    setScroll(true); // 결과 표시 때만 스크롤 허용
    document.getElementById('ngRetry').addEventListener('click', startGame);
  }

  renderIntro();
})();