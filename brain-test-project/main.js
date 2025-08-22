(function initNumGrid() {
  const root = document.getElementById('ngRoot');
  const BEST_KEY = 'numgrid:best:1to20';

  function renderIntro() {
    const bestMs = localStorage.getItem(BEST_KEY);
    const bestChip = (() => {
      if (!bestMs) return '';
      const s = (+bestMs) / 1000;
      const age = secondsToAge(s); // 최고기록 시간 → 나이 환산
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
    document.getElementById('ngStart').addEventListener('click', startGame);
    const clearBtn = document.getElementById('ngClear');
    if (clearBtn) clearBtn.addEventListener('click', () => { localStorage.removeItem(BEST_KEY); renderIntro(); });
  }

  function startGame() {
    let next = 1;
    let t0 = 0;
    let finished = false;
    let locked = true; // 카운트다운 동안 입력 잠금

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

    // 타이머
    let rafId = 0;
    function tick() {
      if (finished) return;
      const ms = performance.now() - t0;
      timeEl.textContent = (ms / 1000).toFixed(2);
      rafId = requestAnimationFrame(tick);
    }

    // 3-2-1 카운트다운 후 시작
    function startCountdown() {
      let c = 3;
      cdEl.textContent = c;
      const timer = setInterval(() => {
        c -= 1;
        if (c > 0) {
          cdEl.textContent = c;
        } else {
          clearInterval(timer);
          cdEl.textContent = '시작!';
          setTimeout(() => {
            locked = false;
            t0 = performance.now();            // 여기서부터 카운트 시작
            grid.style.pointerEvents = 'auto'; // 입력 허용
            cdEl.style.display = 'none';
            rafId = requestAnimationFrame(tick);
          }, 500);
        }
      }, 1000);
    }
    startCountdown();

    function onCell(e) {
      if (locked) return;                 // 카운트다운 중 입력 차단
      const n = +e.currentTarget.dataset.n;
      if (finished || n !== next) return;
      e.currentTarget.classList.add('hit');
      next += 1;
      nextEl.textContent = String(Math.min(next, 20));
      if (next > 20) {
        finished = true;
        cancelAnimationFrame(rafId);
        const ms = performance.now() - t0;
        showResult(ms);
      }
    }
    grid.querySelectorAll('.ng-cell').forEach(el => el.addEventListener('click', onCell));
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
    const sRaw = ms / 1000;
    const adj = adjustSecondsForDevice ? adjustSecondsForDevice(sRaw, lastInputType) : { seconds: sRaw, offset: 0 };
    const s = adj.seconds;

    const age = secondsToAge(s);

    const prevBest = localStorage.getItem(BEST_KEY);
    const isBest = !prevBest || ms < +prevBest;
    if (isBest) localStorage.setItem(BEST_KEY, String(ms));

    // 갱신 후 기준으로 최고기록 표기(시간 + 나이)
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
    document.getElementById('ngRetry').addEventListener('click', startGame);
  }

  renderIntro();
})();