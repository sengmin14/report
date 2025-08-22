(function initNumGrid() {
  const root = document.getElementById('ngRoot');
  const BEST_KEY = 'numgrid:best:1to20';

  function renderIntro() {
    const best = localStorage.getItem(BEST_KEY);
    root.innerHTML = `
      <div class="ng-card">
        <p>화면에 <b>1~20</b>이 무작위로 배치됩니다. <b>1 → 20</b> 순서대로 빠르게 누르세요.</p>
        <div class="ng-kpi">
          ${best ? `<div class="ng-chip">최고 기록: <b>${(+best/1000).toFixed(2)}s</b></div>` : ''}
        </div>
        <div class="ng-actions">
          <button class="ng-btn primary" id="ngStart">시작</button>
          ${best ? `<button class="ng-btn" id="ngClear">기록 초기화</button>` : ''}
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
        <div class="ng-grid" id="ngGrid"></div>
      </div>
    `;

    const grid = document.getElementById('ngGrid');
    const timeEl = document.getElementById('ngTime');
    const nextEl = document.getElementById('ngNext');

    nums.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ng-cell';
      btn.textContent = String(n);
      btn.dataset.n = String(n);
      grid.appendChild(btn);
    });

    let rafId = 0;
    function tick() {
      if (!t0 || finished) return;
      const ms = performance.now() - t0;
      timeEl.textContent = (ms / 1000).toFixed(2);
      rafId = requestAnimationFrame(tick);
    }

    function onCell(e) {
      const n = +e.currentTarget.dataset.n;
      if (finished || n !== next) return;
      if (next === 1) { t0 = performance.now(); rafId = requestAnimationFrame(tick); }
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

  function showResult(ms) {
    const s = ms / 1000;
    const age = Math.round(s <= 10 ? 20 : s >= 30 ? 80 : 20 + (s - 10) * 3);
    const best = localStorage.getItem(BEST_KEY);
    const isBest = !best || ms < +best;
    if (isBest) localStorage.setItem(BEST_KEY, String(ms));

    root.innerHTML = `
      <div class="ng-card">
        <h2 style="margin:0 0 8px; font-size:20px;">결과</h2>
        <div class="ng-kpi">
          <div class="ng-chip">기록: <b>${s.toFixed(2)}s</b></div>
          <div class="ng-chip">추정 뇌나이: <b>${age}세</b></div>
          ${isBest ? `<div class="ng-chip" style="color:var(--primary)">🎉 최고 기록 갱신</div>` : ''}
          ${best ? `<div class="ng-chip">최고 기록: <b>${(+best/1000).toFixed(2)}s</b></div>` : ''}
        </div>
        <div class="ng-actions">
          <button class="ng-btn primary" id="ngRetry">다시 하기</button>
          <a class="ng-btn" href="../index.html">메인으로</a>
        </div>
        <p style="color:var(--soft); margin:.6rem 0 0;">참고: 단순 미니게임 기반 추정치입니다.</p>
      </div>
    `;
    document.getElementById('ngRetry').addEventListener('click', startGame);
  }

  renderIntro();
})();