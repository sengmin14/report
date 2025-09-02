// 하드코딩된 부산 맛집 데이터
const restaurants = [
  {
    id: 1,
    name: "해운대 암소갈비",
    category: "korean",
    rating: 4.5,
    address: "부산 해운대구 중동 1234",
    description: "해운대에서 유명한 갈비 전문점으로 한우 갈비가 특히 인기",
    image: "https://via.placeholder.com/150",
    phone: "051-123-4567",
    location: { lat: 35.1586, lng: 129.1592 }
  },
  {
    id: 2,
    name: "자갈치 활어회",
    category: "seafood",
    rating: 4.7,
    address: "부산 중구 자갈치해안로 52",
    description: "자갈치 시장에서 가장 신선한 회를 맛볼 수 있는 곳",
    image: "https://via.placeholder.com/150",
    phone: "051-234-5678",
    location: { lat: 35.0971, lng: 129.0307 }
  },
  {
    id: 3,
    name: "광안리 소문난 돼지국밥",
    category: "korean",
    rating: 4.2,
    address: "부산 수영구 광안해변로 123",
    description: "부산 대표 음식인 돼지국밥을 정통 방식으로 제공",
    image: "https://via.placeholder.com/150",
    phone: "051-345-6789",
    location: { lat: 35.1556, lng: 129.1193 }
  },
  {
    id: 4,
    name: "송정 서핑 커피",
    category: "cafe",
    rating: 4.4,
    address: "부산 해운대구 송정해변로 50",
    description: "서핑을 즐기는 사람들이 많이 찾는 감성 카페",
    image: "https://via.placeholder.com/150",
    phone: "051-456-7890",
    location: { lat: 35.1792, lng: 129.1993 }
  },
  {
    id: 5,
    name: "기장 멸치쌈밥",
    category: "korean",
    rating: 4.6,
    address: "부산 기장군 기장읍 대변로 120",
    description: "기장에서 잡힌 신선한 멸치로 만든 멸치쌈밥 전문점",
    image: "https://via.placeholder.com/150",
    phone: "051-567-8901",
    location: { lat: 35.2461, lng: 129.2240 }
  },
  {
    id: 6,
    name: "영도 대교 횟집",
    category: "seafood",
    rating: 4.3,
    address: "부산 영도구 태종로 250",
    description: "영도 앞바다에서 잡은 횟감으로 만든 회를 저렴하게 즐길 수 있는 곳",
    image: "https://via.placeholder.com/150",
    phone: "051-678-9012",
    location: { lat: 35.0917, lng: 129.0354 }
  }
];

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
    displayRestaurants(restaurants);
    setupEventListeners();
  }
  
  // 지도 초기화 함수
  function initMap() {
    if (!window.kakao || !window.kakao.maps) {
      console.error('카카오맵 API를 로드할 수 없습니다');
      
      // 지도 영역에 오류 메시지 표시
      document.getElementById('map').innerHTML = `
        <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #f8f9fa;">
          <p style="color: #e53e3e; margin-bottom: 10px;">지도를 로드할 수 없습니다</p>
          <p style="font-size: 14px; color: #718096;">
            브라우저의 보안 설정이나 확장 프로그램이 지도 로드를 차단했습니다.<br>
            시크릿 모드에서 다시 시도해보세요.
          </p>
        </div>
      `;
      
      // 맛집 목록은 계속 표시
      displayRestaurants(restaurants);
      return;
    }
    
    // 지도 중심 좌표 (부산시청)
    const defaultCenter = new kakao.maps.LatLng(35.1798, 129.0750);
    
    // 지도 생성 옵션
    const mapOptions = {
      center: defaultCenter,
      level: 7
    };
    
    // 지도 생성
    map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
    
    // 식당 마커 표시
    displayMarkers(restaurants);
  }
  
  // 식당 마커 표시 함수
  function displayMarkers(restaurantsToShow) {
    // 기존 마커 제거
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    
    // 새 마커 생성
    restaurantsToShow.forEach(restaurant => {
      const markerPosition = new kakao.maps.LatLng(
        restaurant.location.lat, 
        restaurant.location.lng
      );
      
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        title: restaurant.name
      });
      
      // 지도에 마커 표시
      marker.setMap(map);
      markers.push(marker);
      
      // 인포윈도우 생성
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;">${restaurant.name}</div>`
      });
      
      // 클릭 이벤트 추가
      kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
        
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
    });
  }
  
  // 식당 목록 표시 함수
  function displayRestaurants(restaurantsToShow) {
    restaurantList.innerHTML = '';
    
    if (restaurantsToShow.length === 0) {
      restaurantList.innerHTML = '<p class="no-results">검색 결과가 없습니다</p>';
      return;
    }
    
    restaurantsToShow.forEach(restaurant => {
      const card = document.createElement('div');
      card.className = 'restaurant-card';
      card.id = `restaurant-${restaurant.id}`;
      
      card.innerHTML = `
        <h3>${restaurant.name}</h3>
        <div class="rating">★ ${restaurant.rating}</div>
        <span class="category-tag">${getCategoryName(restaurant.category)}</span>
        <address>${restaurant.address}</address>
        <p>${restaurant.description}</p>
        <p class="phone">${restaurant.phone}</p>
      `;
      
      card.addEventListener('click', () => {
        // 지도 이동 및 줌
        const position = new kakao.maps.LatLng(
          restaurant.location.lat, 
          restaurant.location.lng
        );
        map.setCenter(position);
        map.setLevel(3); // 줌 레벨 설정
        
        // 해당 마커의 인포윈도우 열기
        const marker = markers.find((m, i) => 
          restaurantsToShow[i].id === restaurant.id
        );
        if (marker) {
          const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px;font-size:12px;">${restaurant.name}</div>`
          });
          infowindow.open(map, marker);
        }
      });
      
      restaurantList.appendChild(card);
    });
  }
  
  // 카테고리 이름 변환
  function getCategoryName(category) {
    const categories = {
      korean: '한식',
      seafood: '해산물',
      cafe: '카페'
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
  }
  
  // 앱 초기화
  init();
});