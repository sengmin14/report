(function installNoZoom() {
  // 데스크톱 더블클릭 확대/선택 방지
  document.addEventListener('dblclick', (e) => {
    e.preventDefault();
  }, { passive: false, capture: true });

  // iOS/모바일 더블탭 확대 방지
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (e.touches.length === 0 && now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, { passive: false });

  // iOS 핀치 제스처 확대 방지(비표준 이벤트)
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(type => {
    document.addEventListener(type, (e) => e.preventDefault(), { passive: false });
  });

  // 힌트: 버튼/링크의 더블탭 딜레이 제거
  document.documentElement.classList.add('no-zoom');
})();