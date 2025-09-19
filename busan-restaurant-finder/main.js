// 맛집 데이터는 data.js 파일로 이동했습니다

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
  // 요소 참조
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const searchBtn = document.getElementById('searchBtn');
  const restaurantList = document.getElementById('restaurantList');
  
  // 지도 변수 선언
  let map;
  let markers = [];
  
  // 초기화 함수
  function init() {
    initMap();
    displayRestaurants(restaurants); // data.js에서 가져온 데이터 사용
    setupEventListeners();
    
    // 모바일에서 초기 탭 상태 설정
    const mainContent = document.querySelector('.main-content');
    if (mainContent && window.innerWidth <= 768) {
      mainContent.classList.add('show-map');
      
      // 지도 로드 후 크기 재조정
      setTimeout(() => {
        if (map) map.invalidateSize();
      }, 500);
    }
  }
  
  // 지도 초기화 함수 - Leaflet.js 사용
  function initMap() {
    try {
      // 지도 중심 좌표 (한국청소년상담복지개발원)
      const busanCenter = [35.17414164719, 129.12641555476];
      
      // 지도 생성 - 줌 레벨을 13에서 15로 증가
      map = L.map('map').setView(busanCenter, 18);
      
      // 타일 레이어 추가 (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // 한국청소년상담복지개발원 작은 빨간색 마커 추가
      const redIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [18, 29],     // 기존 [25, 41]에서 작게 조정
        iconAnchor: [9, 29],    // 기존 [12, 41]에서 조정
        popupAnchor: [1, -25],  // 기존 [1, -34]에서 조정
        shadowSize: [29, 29]    // 기존 [41, 41]에서 작게 조정
      });
      
      // 한국청소년상담복지개발원 마커 생성 및 팝업 추가
      const kyciMarker = L.marker(busanCenter, {
        icon: redIcon,
        zIndexOffset: 1000 // 다른 마커보다 위에 표시
      }).addTo(map);
      
      kyciMarker.bindPopup(`
        <div>
          <h3>한국청소년상담복지개발원</h3>
          <p>센텀시티 내 위치</p>
        </div>
      `);
      
      // 맛집 마커 표시
      displayMarkers(restaurants);
      
      // 모바일 환경에서 지도 크기 조정 문제 해결
      setTimeout(() => {
        map.invalidateSize();
      }, 300);
      
      // 창 크기 변경 시 지도 다시 그리기
      window.addEventListener('resize', function() {
        setTimeout(() => {
          map.invalidateSize();
        }, 200);
      });
      
    } catch (error) {
      console.error('지도 초기화 중 오류 발생:', error);
      document.getElementById('map').innerHTML = 
        '<div style="padding: 20px; text-align: center;">지도를 불러오는데 실패했습니다.<br>페이지를 새로고침 해보세요.</div>';
    }
  }
  
  // 맛집 마커 표시 함수 - Leaflet.js 사용
  function displayMarkers(restaurantsToShow) {
    // 기존 마커 제거
    markers.forEach(marker => marker.remove());
    markers = [];
    
    // 작은 크기의 기본 마커 아이콘 정의
    const smallIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [18, 29],     // 작게 조정
      iconAnchor: [9, 29],
      popupAnchor: [1, -25],
      shadowSize: [29, 29]
    });
    
    // 새 마커 생성
    restaurantsToShow.forEach(restaurant => {
      // 마커 생성
      const marker = L.marker([restaurant.location.lat, restaurant.location.lng], {
        icon: smallIcon
      }).addTo(map);
      
      // 팝업 설정
      const popupContent = `
        <div>
          <h3>${restaurant.name}</h3>
          <div class="rating">★ ${restaurant.rating}</div>
          <div class="category">${getCategoryName(restaurant.category)}</div>
        </div>
      `;
      marker.bindPopup(popupContent);
      
      // 마커 클릭 이벤트
      marker.on('click', function() {
        // 해당 식당으로 스크롤
        const restaurantElement = document.getElementById(`restaurant-${restaurant.id}`);
        if (restaurantElement) {
          restaurantElement.scrollIntoView({ behavior: 'smooth' });
          restaurantElement.classList.add('highlight');
          setTimeout(() => {
            restaurantElement.classList.remove('highlight');
          }, 2000);
        }
      });
      
      markers.push(marker);
    });
  }
  
  // 식당 목록 표시 함수
  function displayRestaurants(restaurantsToShow) {
    const restaurantList = document.getElementById('restaurantList');
    restaurantList.innerHTML = '';
    
    restaurantsToShow.forEach(restaurant => {
      const card = document.createElement('div');
      card.className = 'restaurant-card';
      card.id = `restaurant-${restaurant.id}`;
      
      // 가격 정보가 있으면 표시
      const priceHtml = restaurant.price ? 
        `<div class="price-info">💰 ${restaurant.price}</div>` : '';
      
      card.innerHTML = `
        <h3>${restaurant.name}</h3>
        <div class="rating">★ ${restaurant.rating}</div>
        <span class="category-tag">${getCategoryName(restaurant.category)}</span>
        ${priceHtml}
        <address>${restaurant.address}</address>
        <p>${restaurant.description}</p>
        <p class="phone">${restaurant.phone}</p>
      `;
      
      // 카드 클릭 이벤트 - 모바일과 데스크톱 모두에서 작동
      card.addEventListener('click', function() {
        // 시각적 피드백 (클릭 효과)
        this.classList.add('highlight');
        
        // 해당 맛집 찾기
        const id = this.id.split('-')[1];
        const restaurant = restaurants.find(r => r.id == id);
        
        if (restaurant) {
          // 모바일인 경우 탭 전환
          if (window.innerWidth <= 768) {
            // 지도 탭 버튼 찾기 (data-target 속성이 map인 버튼)
            const mapTabBtn = document.querySelector('.tab-btn[data-target="map"]');
            if (mapTabBtn) {
              // 지도 탭으로 전환 시키기
              mapTabBtn.click();
            }
            
            // 탭 전환 후 메인 컨텐츠에 직접 클래스 추가
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
              mainContent.classList.remove('show-list');
              mainContent.classList.add('show-map');
            }
          }
          
          // 지도 위치 이동 및 줌
          if (map) {
            map.setView([restaurant.location.lat, restaurant.location.lng], 16);
            
            // 해당 마커 찾기
            const markerIndex = restaurants.findIndex(r => r.id == id);
            if (markerIndex >= 0 && markers[markerIndex]) {
              markers[markerIndex].openPopup();
            }
            
            // 지도 크기 재조정 (모바일에서 필요)
            setTimeout(() => {
              map.invalidateSize();
            }, 300);
          }
        }
        
        // 하이라이트 효과 제거
        setTimeout(() => {
          this.classList.remove('highlight');
        }, 300);
      });
      
      restaurantList.appendChild(card);
    });
  }
  
  // 카테고리 이름 변환
  function getCategoryName(category) {
    const categories = {
      korean: '한식',
      japanese: '일식',
      chinese: '중식',
      western: '양식',
      cafe: '카페',
      snack: '분식',
      bakery: '베이커리',
      other: '기타'
    };
    return categories[category] || category;
  }
  
  // 검색 필터링 함수
  function filterRestaurants() {
    const searchTerm = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    
    const filteredRestaurants = restaurants.filter(restaurant => {
      // 검색어 필터링
      const nameMatch = restaurant.name.toLowerCase().includes(searchTerm);
      const addressMatch = restaurant.address.toLowerCase().includes(searchTerm);
      const descriptionMatch = restaurant.description.toLowerCase().includes(searchTerm);
      
      // 카테고리 필터링
      const categoryMatch = categoryValue === '' || restaurant.category === categoryValue;
      
      return (nameMatch || addressMatch || descriptionMatch) && categoryMatch;
    });
    
    // 결과 표시
    displayRestaurants(filteredRestaurants);
    displayMarkers(filteredRestaurants);
  }
  
  // 이벤트 리스너 설정
  function setupEventListeners() {
    searchBtn.addEventListener('click', filterRestaurants);
    
    // 엔터키 검색 지원
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        filterRestaurants();
      }
    });
    
    // 카테고리 필터 변경 시
    categoryFilter.addEventListener('change', filterRestaurants);
    
    // 모바일 탭 전환 기능
    const tabBtns = document.querySelectorAll('.tab-btn');
    const mainContent = document.querySelector('.main-content');
    
    if (tabBtns.length > 0 && mainContent) {
      tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          console.log('탭 클릭:', this.getAttribute('data-target')); // 디버깅용
          
          // 모든 버튼에서 active 클래스 제거
          tabBtns.forEach(b => b.classList.remove('active'));
          // 현재 버튼에 active 클래스 추가
          this.classList.add('active');
          
          // 타겟에 따라 컨텐츠 전환
          const target = this.getAttribute('data-target');
          
          // 모든 표시 클래스 초기화 후 적용
          mainContent.classList.remove('show-map', 'show-list');
          
          if (target === 'map') {
            mainContent.classList.add('show-map');
            // 지도 크기 재조정
            setTimeout(() => {
              if (map) map.invalidateSize();
            }, 100);
          } else if (target === 'list') {
            mainContent.classList.add('show-list');
          }
        });
      });
    }
    
    // 맨 위로 스크롤 버튼
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
    
    // 모바일 뷰에서 카드 터치 개선
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // 모바일에서는 카드 클릭으로 바로 지도 이동
      document.querySelectorAll('.restaurant-card').forEach(card => {
        // 기존 클릭 이벤트 제거
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        // 클릭 이벤트 추가 (한 번 클릭으로 즉시 이동)
        newCard.addEventListener('click', function(event) {
          // 카드 하이라이트 효과
          this.classList.add('highlight');
          
          // ID에서 음식점 번호 추출
          const id = this.id.split('-')[1];
          const restaurant = restaurants.find(r => r.id == id);
          
          if (restaurant) {
            // 지도 탭으로 전환
            document.querySelector('[data-target="map"]').click();
            
            // 해당 위치로 지도 이동
            map.setView([restaurant.location.lat, restaurant.location.lng], 16);
            
            // 마커 팝업 열기
            const marker = markers.find((_, i) => 
              restaurants[i].id == id
            );
            
            if (marker) {
              marker.openPopup();
            }
          }
          
          // 하이라이트 효과 제거
          setTimeout(() => {
            this.classList.remove('highlight');
          }, 300);
        });
      });
    }
  }
  
  // 앱 초기화
  init();
});