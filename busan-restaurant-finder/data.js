const restaurants = [
  {
    "id": 1,
    "name": "더파티 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 79",
    "description": "",
    "phone": "051-711-7770",
    "price": null,
    "location": {
      "lat": 35.1739455226063,
      "lng": 129.126345524752
    }
  },
  {
    "id": 2,
    "name": "스페이스단단 마틴3호점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 79",
    "description": "",
    "phone": "051-746-2279",
    "price": null,
    "location": {
      "lat": 35.174252704894066,
      "lng": 129.12578721235099
    }
  },
  {
    "id": 3,
    "name": "어오케이커피 센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 78",
    "description": "",
    "phone": "051-714-3143",
    "price": null,
    "location": {
      "lat": 35.17460888226473,
      "lng": 129.1268007125356
    }
  },
  {
    "id": 4,
    "name": "스타벅스 센텀그린타워점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 78",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.174671678729,
      "lng": 129.126662964482
    }
  },
  {
    "id": 5,
    "name": "카페051 본사",
    "category": "other",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 78",
    "description": "",
    "phone": "1577-7978",
    "price": null,
    "location": {
      "lat": 35.1746383846375,
      "lng": 129.126916720129
    }
  },
  {
    "id": 6,
    "name": "BBQ 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-744-3999",
    "price": null,
    "location": {
      "lat": 35.17460509680965,
      "lng": 129.12542543015394
    }
  },
  {
    "id": 7,
    "name": "보리맥주",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-781-3092",
    "price": null,
    "location": {
      "lat": 35.1750828761207,
      "lng": 129.12623686507
    }
  },
  {
    "id": 8,
    "name": "고더커피 스카이비즈점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "070-8800-5955",
    "price": null,
    "location": {
      "lat": 35.1746980800264,
      "lng": 129.125467361808
    }
  },
  {
    "id": 9,
    "name": "한솥도시락 센텀중앙로점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-783-0737",
    "price": null,
    "location": {
      "lat": 35.17510387253169,
      "lng": 129.12632411605404
    }
  },
  {
    "id": 10,
    "name": "치킨신드롬 센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-781-3092",
    "price": null,
    "location": {
      "lat": 35.1751010834687,
      "lng": 129.126226364153
    }
  },
  {
    "id": 11,
    "name": "해운대맛집 봉계한우로스구이 애견동반식당",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "0507-1352-7993",
    "price": null,
    "location": {
      "lat": 35.1751369202174,
      "lng": 129.126238272855
    }
  },
  {
    "id": 12,
    "name": "고품격커피공장 스카이비즈점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17458151736376,
      "lng": 129.12527994448877
    }
  },
  {
    "id": 13,
    "name": "메가MGC커피 부산센텀큐비점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-782-0656",
    "price": null,
    "location": {
      "lat": 35.17517274269033,
      "lng": 129.12640493159566
    }
  },
  {
    "id": 14,
    "name": "해운대맛집 하숙집 본점 부산애견동반식당",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-784-8034",
    "price": null,
    "location": {
      "lat": 35.17516670226535,
      "lng": 129.12623575608154
    }
  },
  {
    "id": 15,
    "name": "장돌뱅이 부산오뎅",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-784-8034",
    "price": null,
    "location": {
      "lat": 35.1751972069294,
      "lng": 129.126294719302
    }
  },
  {
    "id": 16,
    "name": "만랩커피 부산센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "070-4266-6010",
    "price": null,
    "location": {
      "lat": 35.1747471906242,
      "lng": 129.125339133821
    }
  },
  {
    "id": 17,
    "name": "광안리맛집 부산오뎅& 을지로통골뱅이 애견동반식당",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-784-8034",
    "price": null,
    "location": {
      "lat": 35.17520016431269,
      "lng": 129.12622894508306
    }
  },
  {
    "id": 18,
    "name": "슈마우스만찬",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-923-6008",
    "price": null,
    "location": {
      "lat": 35.17460151113435,
      "lng": 129.1252190043222
    }
  },
  {
    "id": 19,
    "name": "맘스터치 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-783-8259",
    "price": null,
    "location": {
      "lat": 35.17525820652995,
      "lng": 129.1265158126592
    }
  },
  {
    "id": 20,
    "name": "부산곱창",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17528255501861,
      "lng": 129.1262069457799
    }
  },
  {
    "id": 21,
    "name": "쿠킹마더스",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-783-9123",
    "price": null,
    "location": {
      "lat": 35.1753146974809,
      "lng": 129.12658313573
    }
  },
  {
    "id": 22,
    "name": "존슨식당",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1753495131124,
      "lng": 129.12644794995
    }
  },
  {
    "id": 23,
    "name": "마녀김밥 센텀점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-783-1114",
    "price": null,
    "location": {
      "lat": 35.1753509773742,
      "lng": 129.126364576353
    }
  },
  {
    "id": 24,
    "name": "부산맛집",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-782-8036",
    "price": null,
    "location": {
      "lat": 35.1753759426918,
      "lng": 129.126431078112
    }
  },
  {
    "id": 25,
    "name": "재벌김밥 센텀점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-784-3082",
    "price": null,
    "location": {
      "lat": 35.17450133876728,
      "lng": 129.12497055360916
    }
  },
  {
    "id": 26,
    "name": "다와푸드 큐비점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1754041543623,
      "lng": 129.126620587132
    }
  },
  {
    "id": 27,
    "name": "기네스블루문",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1754038460639,
      "lng": 129.126638139478
    }
  },
  {
    "id": 28,
    "name": "파스타루",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-781-8270",
    "price": null,
    "location": {
      "lat": 35.17541499211344,
      "lng": 129.12631136778595
    }
  },
  {
    "id": 29,
    "name": "더블린데이 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-784-7755",
    "price": null,
    "location": {
      "lat": 35.1754148090295,
      "lng": 129.126629644917
    }
  },
  {
    "id": 30,
    "name": "전주남문토종순대국 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-731-3337",
    "price": null,
    "location": {
      "lat": 35.17542401872778,
      "lng": 129.12631050540543
    }
  },
  {
    "id": 31,
    "name": "영커피 큐비e센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "0507-0289-4838",
    "price": null,
    "location": {
      "lat": 35.1754322361711,
      "lng": 129.126355717956
    }
  },
  {
    "id": 32,
    "name": "스페이스바",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-782-3346",
    "price": null,
    "location": {
      "lat": 35.175431243872396,
      "lng": 129.12630959609646
    }
  },
  {
    "id": 33,
    "name": "왓더버거 센텀점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-715-8533",
    "price": null,
    "location": {
      "lat": 35.1754398948617,
      "lng": 129.12643274416
    }
  },
  {
    "id": 34,
    "name": "마라당 센텀점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-781-9666",
    "price": null,
    "location": {
      "lat": 35.17544349775357,
      "lng": 129.12643283800995
    }
  },
  {
    "id": 35,
    "name": "이태리부대찌개 부산센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-782-3851",
    "price": null,
    "location": {
      "lat": 35.1754434978009,
      "lng": 129.126432838022
    }
  },
  {
    "id": 36,
    "name": "착한까스",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-781-1006",
    "price": null,
    "location": {
      "lat": 35.1754434978009,
      "lng": 129.126432838022
    }
  },
  {
    "id": 37,
    "name": "미스사이공 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-782-3878",
    "price": null,
    "location": {
      "lat": 35.1754434978009,
      "lng": 129.126432838022
    }
  },
  {
    "id": 38,
    "name": "댄싱컵 부산센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-781-2221",
    "price": null,
    "location": {
      "lat": 35.1754434978009,
      "lng": 129.126432838022
    }
  },
  {
    "id": 39,
    "name": "리본레시피 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1754435362873,
      "lng": 129.126430643965
    }
  },
  {
    "id": 40,
    "name": "로이파이 센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "0507-2085-0270",
    "price": null,
    "location": {
      "lat": 35.1754435362873,
      "lng": 129.126430643965
    }
  },
  {
    "id": 41,
    "name": "불백고수락 센텀본점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-781-7574",
    "price": null,
    "location": {
      "lat": 35.1754435363346,
      "lng": 129.126430643978
    }
  },
  {
    "id": 42,
    "name": "엄마손식당",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-782-9113",
    "price": null,
    "location": {
      "lat": 35.1754435363346,
      "lng": 129.126430643978
    }
  },
  {
    "id": 43,
    "name": "안주가 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1754435363346,
      "lng": 129.126430643978
    }
  },
  {
    "id": 44,
    "name": "BHC치킨 센텀중앙점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-781-9922",
    "price": null,
    "location": {
      "lat": 35.17544382047723,
      "lng": 129.12646577214312
    }
  },
  {
    "id": 45,
    "name": "카페051 센텀큐비점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "010-6296-0851",
    "price": null,
    "location": {
      "lat": 35.17543642175758,
      "lng": 129.1266817916434
    }
  },
  {
    "id": 46,
    "name": "고택남",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.175455390321,
      "lng": 129.126320102831
    }
  },
  {
    "id": 47,
    "name": "금오유비끼",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-782-7824",
    "price": null,
    "location": {
      "lat": 35.175473930113746,
      "lng": 129.12644460607711
    }
  },
  {
    "id": 48,
    "name": "텐퍼센트커피 큐비E센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "010-7400-8498",
    "price": null,
    "location": {
      "lat": 35.17548847658436,
      "lng": 129.12664253949592
    }
  },
  {
    "id": 49,
    "name": "정담생고기",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 71",
    "description": "",
    "phone": "051-731-6355",
    "price": null,
    "location": {
      "lat": 35.1746537415723,
      "lng": 129.127991585811
    }
  },
  {
    "id": 50,
    "name": "운커피 부산센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "0507-872-3850",
    "price": null,
    "location": {
      "lat": 35.17554978918861,
      "lng": 129.1265892606555
    }
  },
  {
    "id": 51,
    "name": "컴포즈커피 센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "070-4152-9543",
    "price": null,
    "location": {
      "lat": 35.1756100226779,
      "lng": 129.126186940234
    }
  },
  {
    "id": 52,
    "name": "레브",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-710-7001",
    "price": null,
    "location": {
      "lat": 35.17562027771289,
      "lng": 129.12657792681628
    }
  },
  {
    "id": 53,
    "name": "파티박스",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 55",
    "description": "",
    "phone": "02-1800-5276",
    "price": null,
    "location": {
      "lat": 35.1730465940456,
      "lng": 129.127655561596
    }
  },
  {
    "id": 54,
    "name": "오슬로우 부산센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.175584252085,
      "lng": 129.125909692348
    }
  },
  {
    "id": 55,
    "name": "국민식육식당",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "051-783-4404",
    "price": null,
    "location": {
      "lat": 35.17559551860706,
      "lng": 129.12593522889358
    }
  },
  {
    "id": 56,
    "name": "뚜레쥬르 부산센텀점",
    "category": "bakery",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 55",
    "description": "",
    "phone": "051-747-6100",
    "price": null,
    "location": {
      "lat": 35.17310699746001,
      "lng": 129.1277822501013
    }
  },
  {
    "id": 57,
    "name": "동네짬뽕",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 71",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1745577789548,
      "lng": 129.128221756587
    }
  },
  {
    "id": 58,
    "name": "해성막창집 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17544800251167,
      "lng": 129.12740755680738
    }
  },
  {
    "id": 59,
    "name": "버닝팜치킨",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.175613884612304,
      "lng": 129.12586436801703
    }
  },
  {
    "id": 60,
    "name": "정담식당",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-714-7010",
    "price": null,
    "location": {
      "lat": 35.1749236463091,
      "lng": 129.1247839943491
    }
  },
  {
    "id": 61,
    "name": "카페피노키오",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 55",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1730147738943,
      "lng": 129.127722776684
    }
  },
  {
    "id": 62,
    "name": "청춘식당 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "051-782-2030",
    "price": null,
    "location": {
      "lat": 35.1754881745338,
      "lng": 129.127377873144
    }
  },
  {
    "id": 63,
    "name": "집밥&기장곰장어",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1753731626751,
      "lng": 129.127615233114
    }
  },
  {
    "id": 64,
    "name": "투썸플레이스 센텀스카이비즈점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-782-6282",
    "price": null,
    "location": {
      "lat": 35.17493150679549,
      "lng": 129.12474688337332
    }
  },
  {
    "id": 65,
    "name": "때깔 센텀직영점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 71",
    "description": "",
    "phone": "051-746-8892",
    "price": null,
    "location": {
      "lat": 35.1746201691737,
      "lng": 129.1283122818017
    }
  },
  {
    "id": 66,
    "name": "곤조커피",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "0503-7150-1364",
    "price": null,
    "location": {
      "lat": 35.17503714315632,
      "lng": 129.12473536538388
    }
  },
  {
    "id": 67,
    "name": "장박사양곱창전문점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 66",
    "description": "",
    "phone": "051-782-0092",
    "price": null,
    "location": {
      "lat": 35.1740172199254,
      "lng": 129.12841948138
    }
  },
  {
    "id": 68,
    "name": "전국5대교동짬뽕",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 66",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.173999128112,
      "lng": 129.128423399662
    }
  },
  {
    "id": 69,
    "name": "미식가의우동 센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "051-781-6362",
    "price": null,
    "location": {
      "lat": 35.17570411184664,
      "lng": 129.12708936381006
    }
  },
  {
    "id": 70,
    "name": "마린비어",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "051-784-5556",
    "price": null,
    "location": {
      "lat": 35.1756980136077,
      "lng": 129.127128715879
    }
  },
  {
    "id": 71,
    "name": "가야포차선지국밥 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "051-781-1202",
    "price": null,
    "location": {
      "lat": 35.1757229257945,
      "lng": 129.127146925543
    }
  },
  {
    "id": 72,
    "name": "일취월장 관리형스터디카페 센텀점",
    "category": "other",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "010-8671-1782",
    "price": null,
    "location": {
      "lat": 35.1757218412596,
      "lng": 129.127259942627
    }
  },
  {
    "id": 73,
    "name": "바로바로횟집",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1757218412596,
      "lng": 129.127259942627
    }
  },
  {
    "id": 74,
    "name": "스시마이우 센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "051-784-3444",
    "price": null,
    "location": {
      "lat": 35.1757218413069,
      "lng": 129.12725994264
    }
  },
  {
    "id": 75,
    "name": "생활맥주 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "051-782-7778",
    "price": null,
    "location": {
      "lat": 35.1757226842176,
      "lng": 129.127263257191
    }
  },
  {
    "id": 76,
    "name": "커피스미스 부산센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 55",
    "description": "",
    "phone": "051-741-3141",
    "price": null,
    "location": {
      "lat": 35.1728877929026,
      "lng": 129.12787201797
    }
  },
  {
    "id": 77,
    "name": "화이트펜슬스터디카페 센텀점",
    "category": "other",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "010-2788-8002",
    "price": null,
    "location": {
      "lat": 35.1757243700387,
      "lng": 129.127269886293
    }
  },
  {
    "id": 78,
    "name": "하도족발",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1757243700387,
      "lng": 129.127269886293
    }
  },
  {
    "id": 79,
    "name": "손가네정육식당 본점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "051-784-2324",
    "price": null,
    "location": {
      "lat": 35.1758077449933,
      "lng": 129.1269867017
    }
  },
  {
    "id": 80,
    "name": "양정명동찌개마을",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1757261907345,
      "lng": 129.127268836205
    }
  },
  {
    "id": 81,
    "name": "유가네한우곰탕 재송센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1757261907345,
      "lng": 129.127268836205
    }
  },
  {
    "id": 82,
    "name": "유가네닭갈비 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "051-783-2154",
    "price": null,
    "location": {
      "lat": 35.1757261907818,
      "lng": 129.127268836218
    }
  },
  {
    "id": 83,
    "name": "싸와디식당 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-784-0161",
    "price": null,
    "location": {
      "lat": 35.1751324945157,
      "lng": 129.124642363139
    }
  },
  {
    "id": 84,
    "name": "모리모리덮밥 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17513184805751,
      "lng": 129.12457649508625
    }
  },
  {
    "id": 85,
    "name": "개미집 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "051-782-3335",
    "price": null,
    "location": {
      "lat": 35.17589040561382,
      "lng": 129.12694934464727
    }
  },
  {
    "id": 86,
    "name": "올드머그 센텀스카이비즈점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "070-4759-3691",
    "price": null,
    "location": {
      "lat": 35.1751165010472,
      "lng": 129.124526707217
    }
  },
  {
    "id": 87,
    "name": "보돌미역 센텀스카이비즈점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-782-0011",
    "price": null,
    "location": {
      "lat": 35.1751420873922,
      "lng": 129.124506520283
    }
  },
  {
    "id": 88,
    "name": "일공일일공이 센텀점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1751583391379,
      "lng": 129.124504748236
    }
  },
  {
    "id": 89,
    "name": "미니코미 센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1751583391379,
      "lng": 129.124504748236
    }
  },
  {
    "id": 90,
    "name": "더레시피",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-513-1679",
    "price": null,
    "location": {
      "lat": 35.175163705055,
      "lng": 129.1245070829393
    }
  },
  {
    "id": 91,
    "name": "커피프로젝트",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-783-5655",
    "price": null,
    "location": {
      "lat": 35.175163705055,
      "lng": 129.124507082939
    }
  },
  {
    "id": 92,
    "name": "영커피 센텀스카이비즈점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-783-0197",
    "price": null,
    "location": {
      "lat": 35.175163705055,
      "lng": 129.124507082939
    }
  },
  {
    "id": 93,
    "name": "매머드익스프레스 부산센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.175163705055,
      "lng": 129.124507082939
    }
  },
  {
    "id": 94,
    "name": "포앤스마일",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-715-7772",
    "price": null,
    "location": {
      "lat": 35.175163705055,
      "lng": 129.124507082939
    }
  },
  {
    "id": 95,
    "name": "제이앤제이 스카이비즈점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1751628235684,
      "lng": 129.124505962475
    }
  },
  {
    "id": 96,
    "name": "바푸리포 부산센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 97",
    "description": "",
    "phone": "051-783-5655",
    "price": null,
    "location": {
      "lat": 35.1751567301584,
      "lng": 129.12449373115
    }
  },
  {
    "id": 97,
    "name": "몽불",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 90",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1760363245867,
      "lng": 129.12695314706
    }
  },
  {
    "id": 98,
    "name": "샤브 애작",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 67",
    "description": "",
    "phone": "051-743-1114",
    "price": null,
    "location": {
      "lat": 35.1744700560863,
      "lng": 129.128803345058
    }
  },
  {
    "id": 99,
    "name": "밥이요 센텀본점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 67",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1744682353786,
      "lng": 129.128804395096
    }
  },
  {
    "id": 100,
    "name": "엘리스도넛 센텀본점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 67",
    "description": "",
    "phone": "051-731-5838",
    "price": null,
    "location": {
      "lat": 35.1744682353786,
      "lng": 129.128804395096
    }
  },
  {
    "id": 101,
    "name": "간지츠 센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 67",
    "description": "",
    "phone": "051-747-3035",
    "price": null,
    "location": {
      "lat": 35.1744682353786,
      "lng": 129.128804395096
    }
  },
  {
    "id": 102,
    "name": "더벤티 센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 60",
    "description": "",
    "phone": "070-7537-1128",
    "price": null,
    "location": {
      "lat": 35.1738292430037,
      "lng": 129.128860165779
    }
  },
  {
    "id": 103,
    "name": "미진축산 해운대센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 60",
    "description": "",
    "phone": "051-926-0500",
    "price": null,
    "location": {
      "lat": 35.1738292430037,
      "lng": 129.128860165779
    }
  },
  {
    "id": 104,
    "name": "노스커피 리마스터 센텀클래스원점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.176154624626854,
      "lng": 129.1259640592703
    }
  },
  {
    "id": 105,
    "name": "얼루어커피",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1761681888049,
      "lng": 129.126012704068
    }
  },
  {
    "id": 106,
    "name": "라잇커피",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1761736556385,
      "lng": 129.125957969756
    }
  },
  {
    "id": 107,
    "name": "모리야",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "0507-2085-0369",
    "price": null,
    "location": {
      "lat": 35.1761557849266,
      "lng": 129.125846653353
    }
  },
  {
    "id": 108,
    "name": "인생냉면&인생김치찌개 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1761557849738,
      "lng": 129.125846653365
    }
  },
  {
    "id": 109,
    "name": "멘제이텐",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1761557849738,
      "lng": 129.125846653365
    }
  },
  {
    "id": 110,
    "name": "모스멕시칸그릴",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "070-8691-0265",
    "price": null,
    "location": {
      "lat": 35.1761567049708,
      "lng": 129.125845579792
    }
  },
  {
    "id": 111,
    "name": "언양닭칼국수 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "051-781-9030",
    "price": null,
    "location": {
      "lat": 35.1761567049708,
      "lng": 129.125845579792
    }
  },
  {
    "id": 112,
    "name": "대왕전통육개장",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1762134566642,
      "lng": 129.12600071273727
    }
  },
  {
    "id": 113,
    "name": "만나",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1762398623264,
      "lng": 129.126036521657
    }
  },
  {
    "id": 114,
    "name": "진소문난칼국수",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-747-5008",
    "price": null,
    "location": {
      "lat": 35.1762517164812,
      "lng": 129.126746935626
    }
  },
  {
    "id": 115,
    "name": "우미남 본인미트",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "010-8055-1352",
    "price": null,
    "location": {
      "lat": 35.176319185055526,
      "lng": 129.1266510128928
    }
  },
  {
    "id": 116,
    "name": "사대천왕시텐노우 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-784-1117",
    "price": null,
    "location": {
      "lat": 35.176383315585646,
      "lng": 129.12659122176996
    }
  },
  {
    "id": 117,
    "name": "쪽지 해운대센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀6로 21",
    "description": "",
    "phone": "1899-8835",
    "price": null,
    "location": {
      "lat": 35.1736159906335,
      "lng": 129.129098249017
    }
  },
  {
    "id": 118,
    "name": "노스커피리마스터 센텀인텔리움점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀6로 21",
    "description": "",
    "phone": "070-7797-7460",
    "price": null,
    "location": {
      "lat": 35.17346840536893,
      "lng": 129.12908671716866
    }
  },
  {
    "id": 119,
    "name": "로드워크",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀6로 21",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1735211049732,
      "lng": 129.129113334136
    }
  },
  {
    "id": 120,
    "name": "짚신매운갈비찜 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-784-0727",
    "price": null,
    "location": {
      "lat": 35.1764390504056,
      "lng": 129.12654767486794
    }
  },
  {
    "id": 121,
    "name": "대궐면옥 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀6로 21",
    "description": "",
    "phone": "051-747-0526",
    "price": null,
    "location": {
      "lat": 35.17342790503573,
      "lng": 129.1291350481721
    }
  },
  {
    "id": 122,
    "name": "고더커피 센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀6로 21",
    "description": "",
    "phone": "0507-1425-7718",
    "price": null,
    "location": {
      "lat": 35.173422423473056,
      "lng": 129.12913929518342
    }
  },
  {
    "id": 123,
    "name": "센텀스터디카페 해운대센텀시티점",
    "category": "other",
    "rating": null,
    "address": "부산 해운대구 센텀6로 21",
    "description": "",
    "phone": "051-746-1303",
    "price": null,
    "location": {
      "lat": 35.1735886867024,
      "lng": 129.129216066709
    }
  },
  {
    "id": 124,
    "name": "예스예스커피",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 99",
    "description": "",
    "phone": "010-2562-6909",
    "price": null,
    "location": {
      "lat": 35.1764673575872,
      "lng": 129.125910742777
    }
  },
  {
    "id": 125,
    "name": "투마미",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 57",
    "description": "",
    "phone": "051-746-8113",
    "price": null,
    "location": {
      "lat": 35.1740185693343,
      "lng": 129.129367760377
    }
  },
  {
    "id": 126,
    "name": "샐러바웃 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1765764149349,
      "lng": 129.126422841648
    }
  },
  {
    "id": 127,
    "name": "스포독",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-783-1976",
    "price": null,
    "location": {
      "lat": 35.1765834425599,
      "lng": 129.126484486949
    }
  },
  {
    "id": 128,
    "name": "하루엔소쿠 부산센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-782-1008",
    "price": null,
    "location": {
      "lat": 35.1765851669574,
      "lng": 129.126488922033
    }
  },
  {
    "id": 129,
    "name": "교촌치킨 센텀파크점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-781-7999",
    "price": null,
    "location": {
      "lat": 35.1765851669574,
      "lng": 129.126488922033
    }
  },
  {
    "id": 130,
    "name": "역 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "010-6618-3682",
    "price": null,
    "location": {
      "lat": 35.1765869491113,
      "lng": 129.126490065993
    }
  },
  {
    "id": 131,
    "name": "느린마을양조장 부산해운대센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "010-5033-8008",
    "price": null,
    "location": {
      "lat": 35.1765869491113,
      "lng": 129.126490065993
    }
  },
  {
    "id": 132,
    "name": "제주숯놈",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1765998869965,
      "lng": 129.126471744903
    }
  },
  {
    "id": 133,
    "name": "차이밍",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-744-7719",
    "price": null,
    "location": {
      "lat": 35.1765998869965,
      "lng": 129.126471744903
    }
  },
  {
    "id": 134,
    "name": "홍콩반점0410 부산센텀인텔리움점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀6로 21",
    "description": "",
    "phone": "051-746-8968",
    "price": null,
    "location": {
      "lat": 35.17358141825929,
      "lng": 129.12942440181996
    }
  },
  {
    "id": 135,
    "name": "띵크커피 부산센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀서로 30",
    "description": "",
    "phone": "051-664-6860",
    "price": null,
    "location": {
      "lat": 35.172267559126055,
      "lng": 129.1285011696058
    }
  },
  {
    "id": 136,
    "name": "도야족발 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-783-8452",
    "price": null,
    "location": {
      "lat": 35.1767120116207,
      "lng": 129.12634735132002
    }
  },
  {
    "id": 137,
    "name": "모래성키즈카페",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀북대로 60",
    "description": "",
    "phone": "051-905-3690",
    "price": null,
    "location": {
      "lat": 35.1766261246085,
      "lng": 129.125388058723
    }
  },
  {
    "id": 138,
    "name": "탕화쿵푸마라탕 센텀시티점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀북대로 60",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1766385423211,
      "lng": 129.125399357484
    }
  },
  {
    "id": 139,
    "name": "빠리당",
    "category": "bakery",
    "rating": null,
    "address": "부산 해운대구 센텀북대로 60",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1766472030257,
      "lng": 129.12541933874
    }
  },
  {
    "id": 140,
    "name": "멘토즈스터디카페 부산센텀점",
    "category": "other",
    "rating": null,
    "address": "부산 해운대구 센텀북대로 60",
    "description": "",
    "phone": "051-781-0982",
    "price": null,
    "location": {
      "lat": 35.1766438311835,
      "lng": 129.12540608045
    }
  },
  {
    "id": 141,
    "name": "던킨 센텀KNN점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀서로 30",
    "description": "",
    "phone": "051-664-7770",
    "price": null,
    "location": {
      "lat": 35.1720596687106,
      "lng": 129.128434290363
    }
  },
  {
    "id": 142,
    "name": "르꽁비브",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀북대로 60",
    "description": "",
    "phone": "051-783-3693",
    "price": null,
    "location": {
      "lat": 35.176745248352475,
      "lng": 129.12542957466624
    }
  },
  {
    "id": 143,
    "name": "라무진 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀북대로 60",
    "description": "",
    "phone": "051-784-8986",
    "price": null,
    "location": {
      "lat": 35.1767764466886,
      "lng": 129.125449045307
    }
  },
  {
    "id": 144,
    "name": "더차이나",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀서로 30",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17195021147435,
      "lng": 129.1285093573584
    }
  },
  {
    "id": 145,
    "name": "샐픽",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀북대로 60",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1767334257781,
      "lng": 129.125179027263
    }
  },
  {
    "id": 146,
    "name": "오니기리와이규동 부산센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀북대로 60",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.176826830081254,
      "lng": 129.1254536499592
    }
  },
  {
    "id": 147,
    "name": "공차 부산센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 48",
    "description": "",
    "phone": "051-747-0113",
    "price": null,
    "location": {
      "lat": 35.173067744438804,
      "lng": 129.1296305003792
    }
  },
  {
    "id": 148,
    "name": "쌀통닭 센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-782-5235",
    "price": null,
    "location": {
      "lat": 35.1770105831135,
      "lng": 129.126074158066
    }
  },
  {
    "id": 149,
    "name": "스타벅스 센텀KNN점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀서로 30",
    "description": "",
    "phone": "1522-3232",
    "price": null,
    "location": {
      "lat": 35.17186556410305,
      "lng": 129.1286596993956
    }
  },
  {
    "id": 150,
    "name": "동경규동 센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 102",
    "description": "",
    "phone": "051-781-1333",
    "price": null,
    "location": {
      "lat": 35.177058403793026,
      "lng": 129.12601942888375
    }
  },
  {
    "id": 151,
    "name": "동백커피 센텀직영점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 48",
    "description": "",
    "phone": "070-7543-1580",
    "price": null,
    "location": {
      "lat": 35.17294990976675,
      "lng": 129.12972071290224
    }
  },
  {
    "id": 152,
    "name": "만수르가야밀면",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀서로 30",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1716644087872,
      "lng": 129.12851727012477
    }
  },
  {
    "id": 153,
    "name": "케이디씨",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀서로 30",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17170717556974,
      "lng": 129.1285963058119
    }
  },
  {
    "id": 154,
    "name": "소미돈까스 센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 48",
    "description": "",
    "phone": "051-743-7787",
    "price": null,
    "location": {
      "lat": 35.1730510048777,
      "lng": 129.129864926783
    }
  },
  {
    "id": 155,
    "name": "뤼미에르 카페",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 수영강변대로 120",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17116956200712,
      "lng": 129.12719070076358
    }
  },
  {
    "id": 156,
    "name": "버커피",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 수영강변대로 120",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1710362632487,
      "lng": 129.127084065772
    }
  },
  {
    "id": 157,
    "name": "키즈 리퍼블릭 부산센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 49",
    "description": "",
    "phone": "051-746-2626",
    "price": null,
    "location": {
      "lat": 35.173353755076,
      "lng": 129.13027670421
    }
  },
  {
    "id": 158,
    "name": "상무초밥 해운대센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀5로 41",
    "description": "",
    "phone": "051-746-3008",
    "price": null,
    "location": {
      "lat": 35.17223974797827,
      "lng": 129.1303387240257
    }
  },
  {
    "id": 159,
    "name": "메가MGC커피 센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 123",
    "description": "",
    "phone": "051-781-0656",
    "price": null,
    "location": {
      "lat": 35.17758876771226,
      "lng": 129.12414325703787
    }
  },
  {
    "id": 160,
    "name": "식당3선 센텀1관",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 해운대로 230",
    "description": "",
    "phone": "051-781-0808",
    "price": null,
    "location": {
      "lat": 35.178099653378645,
      "lng": 129.12625179579572
    }
  },
  {
    "id": 161,
    "name": "고봉민김밥인 부산센텀점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "051-731-1195",
    "price": null,
    "location": {
      "lat": 35.177381951242005,
      "lng": 129.12350129502406
    }
  },
  {
    "id": 162,
    "name": "아덴블랑제리 센텀SH밸리점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "070-4833-3504",
    "price": null,
    "location": {
      "lat": 35.17261362135938,
      "lng": 129.13101026432685
    }
  },
  {
    "id": 163,
    "name": "백소정 센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1724797018147,
      "lng": 129.130990306133
    }
  },
  {
    "id": 164,
    "name": "스시잇센",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1724797018147,
      "lng": 129.130990306133
    }
  },
  {
    "id": 165,
    "name": "신전떡볶이 센텀시티점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "051-731-1629",
    "price": null,
    "location": {
      "lat": 35.1724796825079,
      "lng": 129.130991403112
    }
  },
  {
    "id": 166,
    "name": "빽다방 센텀SH밸리점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "051-746-5011",
    "price": null,
    "location": {
      "lat": 35.1725803647794,
      "lng": 129.13105658800242
    }
  },
  {
    "id": 167,
    "name": "홉스",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "051-746-2223",
    "price": null,
    "location": {
      "lat": 35.17246423490702,
      "lng": 129.13099868224054
    }
  },
  {
    "id": 168,
    "name": "고품격커피공장 센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1724579490386,
      "lng": 129.130997420656
    }
  },
  {
    "id": 169,
    "name": "프랭크버거 부산센텀시티점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "070-4895-2972",
    "price": null,
    "location": {
      "lat": 35.172502020358856,
      "lng": 129.1310534453069
    }
  },
  {
    "id": 170,
    "name": "야시장",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 123",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1778132664676,
      "lng": 129.12408544147073
    }
  },
  {
    "id": 171,
    "name": "정성순대 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "051-912-4592",
    "price": null,
    "location": {
      "lat": 35.17231862509099,
      "lng": 129.13097732145738
    }
  },
  {
    "id": 172,
    "name": "아이럽블럭앤아트플레이 센텀본점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 123",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17788151072,
      "lng": 129.124099290677
    }
  },
  {
    "id": 173,
    "name": "대독장 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "051-744-8188",
    "price": null,
    "location": {
      "lat": 35.17234233970727,
      "lng": 129.13106354406423
    }
  },
  {
    "id": 174,
    "name": "프루쉬 센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "010-5689-7609",
    "price": null,
    "location": {
      "lat": 35.172459942731855,
      "lng": 129.13114014547807
    }
  },
  {
    "id": 175,
    "name": "밥심 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 35",
    "description": "",
    "phone": "0507-966-0437",
    "price": null,
    "location": {
      "lat": 35.172343755023256,
      "lng": 129.13108553063822
    }
  },
  {
    "id": 176,
    "name": "올레",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 123",
    "description": "",
    "phone": "070-8861-4305",
    "price": null,
    "location": {
      "lat": 35.1779265167138,
      "lng": 129.123999486617
    }
  },
  {
    "id": 177,
    "name": "커피필립",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1776275166334,
      "lng": 129.123372684867
    }
  },
  {
    "id": 178,
    "name": "팔선생",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀5로 55",
    "description": "",
    "phone": "051-741-8081",
    "price": null,
    "location": {
      "lat": 35.1729719936893,
      "lng": 129.131487150321
    }
  },
  {
    "id": 179,
    "name": "고민석불오뎅가마솥떡볶이 센텀점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "051-714-6688",
    "price": null,
    "location": {
      "lat": 35.17764222055144,
      "lng": 129.1233050190245
    }
  },
  {
    "id": 180,
    "name": "김호권의청년어부 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "051-675-4016",
    "price": null,
    "location": {
      "lat": 35.17764867962195,
      "lng": 129.12329640662207
    }
  },
  {
    "id": 181,
    "name": "본전",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 123",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1779364938788,
      "lng": 129.123841697848
    }
  },
  {
    "id": 182,
    "name": "현풍닭칼국수 센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "051-917-5757",
    "price": null,
    "location": {
      "lat": 35.171800099377954,
      "lng": 129.13089574254167
    }
  },
  {
    "id": 183,
    "name": "냉삼스타",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 123",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17794132476251,
      "lng": 129.1238231650758
    }
  },
  {
    "id": 184,
    "name": "담스시",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀5로 55",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1729812575241,
      "lng": 129.131575191395
    }
  },
  {
    "id": 185,
    "name": "메가MGC커피 부산월드마크센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "051-731-1114",
    "price": null,
    "location": {
      "lat": 35.17171932296786,
      "lng": 129.1308771719563
    }
  },
  {
    "id": 186,
    "name": "나의한잔",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀5로 55",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1729576067405,
      "lng": 129.131587743695
    }
  },
  {
    "id": 187,
    "name": "피자연합 부산센텀점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀5로 55",
    "description": "",
    "phone": "051-731-4777",
    "price": null,
    "location": {
      "lat": 35.173143587806,
      "lng": 129.131670522045
    }
  },
  {
    "id": 188,
    "name": "고민석원조불오뎅가마솥떡볶이",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1776674901223,
      "lng": 129.123148726068
    }
  },
  {
    "id": 189,
    "name": "블루샥 부산센텀스타점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 123",
    "description": "",
    "phone": "070-8844-1050",
    "price": null,
    "location": {
      "lat": 35.178009515019895,
      "lng": 129.12378872006218
    }
  },
  {
    "id": 190,
    "name": "구슬함박 부산센텀시티점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1979",
    "price": null,
    "location": {
      "lat": 35.16996240941131,
      "lng": 129.12824572290705
    }
  },
  {
    "id": 191,
    "name": "아라치 센텀스타점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 123",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1780262478086,
      "lng": 129.12375952135542
    }
  },
  {
    "id": 192,
    "name": "폴바셋 신세계센텀시티몰점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-2323",
    "price": null,
    "location": {
      "lat": 35.1699291207947,
      "lng": 129.128242660226
    }
  },
  {
    "id": 193,
    "name": "피에프창 신세계센텀시티몰점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1699",
    "price": null,
    "location": {
      "lat": 35.169894771681335,
      "lng": 129.1282999295898
    }
  },
  {
    "id": 194,
    "name": "로코스 비비큐 신세계센텀직영점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1925",
    "price": null,
    "location": {
      "lat": 35.1698916260558,
      "lng": 129.128325088924
    }
  },
  {
    "id": 195,
    "name": "빌라드스파이시 신세계센텀시티몰점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1991",
    "price": null,
    "location": {
      "lat": 35.1698916260558,
      "lng": 129.128325088924
    }
  },
  {
    "id": 196,
    "name": "젤라띠젤라띠 신세계센텀시티몰점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1257",
    "price": null,
    "location": {
      "lat": 35.1698916260558,
      "lng": 129.128325088924
    }
  },
  {
    "id": 197,
    "name": "콘타이 신세계센텀시티몰점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1698916260558,
      "lng": 129.128325088924
    }
  },
  {
    "id": 198,
    "name": "버거킹 부산센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "070-7462-8510",
    "price": null,
    "location": {
      "lat": 35.17149967269329,
      "lng": 129.13091533738654
    }
  },
  {
    "id": 199,
    "name": "백미당 신세계센텀시티몰점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1543",
    "price": null,
    "location": {
      "lat": 35.1698700910305,
      "lng": 129.128268557637
    }
  },
  {
    "id": 200,
    "name": "속초코다리냉면 신세계센텀시티몰점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.169860356478,
      "lng": 129.128258426833
    }
  },
  {
    "id": 201,
    "name": "알마튜나 센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "051-747-6787",
    "price": null,
    "location": {
      "lat": 35.1720195347137,
      "lng": 129.131330583923
    }
  },
  {
    "id": 202,
    "name": "태양커피 센텀시티몰점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1698615988004,
      "lng": 129.128290285228
    }
  },
  {
    "id": 203,
    "name": "카멜커피 12호점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1335",
    "price": null,
    "location": {
      "lat": 35.1698615988004,
      "lng": 129.128290285228
    }
  },
  {
    "id": 204,
    "name": "모모유부 키자니아부산점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.169861598753,
      "lng": 129.128290285215
    }
  },
  {
    "id": 205,
    "name": "요거트아이스크림의정석 부산신세계센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.169861598753,
      "lng": 129.128290285215
    }
  },
  {
    "id": 206,
    "name": "JVL부대찌개 센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1677",
    "price": null,
    "location": {
      "lat": 35.1698598166124,
      "lng": 129.128289141319
    }
  },
  {
    "id": 207,
    "name": "아웃백스테이크하우스 부산신세계센텀시티점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1595",
    "price": null,
    "location": {
      "lat": 35.1698598166124,
      "lng": 129.128289141319
    }
  },
  {
    "id": 208,
    "name": "C27 센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1351",
    "price": null,
    "location": {
      "lat": 35.1698598166124,
      "lng": 129.128289141319
    }
  },
  {
    "id": 209,
    "name": "스타벅스 센텀몰1F점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "1522-3232",
    "price": null,
    "location": {
      "lat": 35.1698598166124,
      "lng": 129.128289141319
    }
  },
  {
    "id": 210,
    "name": "크리스탈제이드 신세계센텀시티점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1962",
    "price": null,
    "location": {
      "lat": 35.16985629079843,
      "lng": 129.12828465961135
    }
  },
  {
    "id": 211,
    "name": "남산왕돈까스 신세계센텀몰점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-2622",
    "price": null,
    "location": {
      "lat": 35.1698454819841,
      "lng": 129.128284377838
    }
  },
  {
    "id": 212,
    "name": "아그라 센텀시티몰점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-2328",
    "price": null,
    "location": {
      "lat": 35.1697999329385,
      "lng": 129.128414884161
    }
  },
  {
    "id": 213,
    "name": "올차 신세계센텀시티몰점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1884",
    "price": null,
    "location": {
      "lat": 35.1697402310092,
      "lng": 129.12827395195
    }
  },
  {
    "id": 214,
    "name": "동동국밥 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "0507-142-2048",
    "price": null,
    "location": {
      "lat": 35.1719167988721,
      "lng": 129.131433259314
    }
  },
  {
    "id": 215,
    "name": "정직유부 센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "051-746-2003",
    "price": null,
    "location": {
      "lat": 35.1719095930605,
      "lng": 129.131433071185
    }
  },
  {
    "id": 216,
    "name": "효성어묵당",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1719095350816,
      "lng": 129.131436362087
    }
  },
  {
    "id": 217,
    "name": "정월당치킨 센텀월드마크점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1713696449752,
      "lng": 129.131032664835
    }
  },
  {
    "id": 218,
    "name": "파미에스테이션",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1697289539638,
      "lng": 129.128351576696
    }
  },
  {
    "id": 219,
    "name": "토끼정 신세계센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1964",
    "price": null,
    "location": {
      "lat": 35.169781873333704,
      "lng": 129.12882705357796
    }
  },
  {
    "id": 220,
    "name": "쉐이크쉑 부산센텀점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀4로 15",
    "description": "",
    "phone": "051-745-1341",
    "price": null,
    "location": {
      "lat": 35.169796240747246,
      "lng": 129.1288812031342
    }
  },
  {
    "id": 221,
    "name": "스타벅스 월드마크센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "1522-3232",
    "price": null,
    "location": {
      "lat": 35.1711969352291,
      "lng": 129.131168632088
    }
  },
  {
    "id": 222,
    "name": "카페051 센텀파크점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "051-746-5101",
    "price": null,
    "location": {
      "lat": 35.1782039387321,
      "lng": 129.122979388225
    }
  },
  {
    "id": 223,
    "name": "타이거분식",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1783244584434,
      "lng": 129.1227871568
    }
  },
  {
    "id": 224,
    "name": "엄스커피",
    "category": "cafe",
    "rating": null,
    "address": "부산 수영구 좌수영로 97",
    "description": "",
    "phone": "051-612-1000",
    "price": null,
    "location": {
      "lat": 35.1731443864763,
      "lng": 129.120231369712
    }
  },
  {
    "id": 225,
    "name": "배스킨라빈스 부산센텀파크점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "051-743-4000",
    "price": null,
    "location": {
      "lat": 35.17837036089156,
      "lng": 129.1227389603155
    }
  },
  {
    "id": 226,
    "name": "하삼동커피 센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "051-731-0925",
    "price": null,
    "location": {
      "lat": 35.170943138916165,
      "lng": 129.13145722404775
    }
  },
  {
    "id": 227,
    "name": "파파존스 센텀시티점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀동로 25",
    "description": "",
    "phone": "051-747-1084",
    "price": null,
    "location": {
      "lat": 35.17096701455494,
      "lng": 129.1314830890539
    }
  },
  {
    "id": 228,
    "name": "덤피",
    "category": "western",
    "rating": null,
    "address": "부산 수영구 좌수영로83번길 14",
    "description": "",
    "phone": "010-4900-2898",
    "price": null,
    "location": {
      "lat": 35.1718693626193,
      "lng": 129.120637245238
    }
  },
  {
    "id": 229,
    "name": "굽네치킨 부산수영점",
    "category": "korean",
    "rating": null,
    "address": "부산 수영구 수영로741번길 80",
    "description": "",
    "phone": "051-754-9291",
    "price": null,
    "location": {
      "lat": 35.17166161405571,
      "lng": 129.120716354129
    }
  },
  {
    "id": 230,
    "name": "베이커리토끼굴 센텀파크점",
    "category": "bakery",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 142",
    "description": "",
    "phone": "0502-5552-7657",
    "price": null,
    "location": {
      "lat": 35.1787061737328,
      "lng": 129.123168063476
    }
  },
  {
    "id": 231,
    "name": "세프길",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "051-744-0774",
    "price": null,
    "location": {
      "lat": 35.1783542247313,
      "lng": 129.1224257348
    }
  },
  {
    "id": 232,
    "name": "영광기사식당",
    "category": "korean",
    "rating": null,
    "address": "부산 수영구 수영로741번길 80",
    "description": "",
    "phone": "051-751-7624",
    "price": null,
    "location": {
      "lat": 35.1715315426299,
      "lng": 129.120733827159
    }
  },
  {
    "id": 233,
    "name": "초록나비",
    "category": "cafe",
    "rating": null,
    "address": "부산 수영구 좌수영로83번길 12-1",
    "description": "",
    "phone": "051-755-5120",
    "price": null,
    "location": {
      "lat": 35.1719848411037,
      "lng": 129.120372460143
    }
  },
  {
    "id": 234,
    "name": "스타벅스 센텀파크점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "1522-3232",
    "price": null,
    "location": {
      "lat": 35.1786623856731,
      "lng": 129.122530334676
    }
  },
  {
    "id": 235,
    "name": "주와리소바",
    "category": "japanese",
    "rating": null,
    "address": "부산 수영구 좌수영로83번길 20",
    "description": "",
    "phone": "051-759-5006",
    "price": null,
    "location": {
      "lat": 35.1716713071379,
      "lng": 129.120368706416
    }
  },
  {
    "id": 236,
    "name": "도르리충무김밥 롯데백화점 센텀시티점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "051-730-3002",
    "price": null,
    "location": {
      "lat": 35.1699815898199,
      "lng": 129.131049109907
    }
  },
  {
    "id": 237,
    "name": "항아리수제면가 롯데백화점 센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "051-730-3002",
    "price": null,
    "location": {
      "lat": 35.17000168887548,
      "lng": 129.13108475294345
    }
  },
  {
    "id": 238,
    "name": "스타벅스 센텀신세계B1점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1688317007302,
      "lng": 129.128745211434
    }
  },
  {
    "id": 239,
    "name": "호두방정 롯데백화점센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1699018559526,
      "lng": 129.130971304686
    }
  },
  {
    "id": 240,
    "name": "제주오전복 롯데백화점센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "051-730-3002",
    "price": null,
    "location": {
      "lat": 35.1699724020195,
      "lng": 129.131110327235
    }
  },
  {
    "id": 241,
    "name": "미스카츠 롯데백화점센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1698953318277,
      "lng": 129.131034786402
    }
  },
  {
    "id": 242,
    "name": "상궁전 롯데백화점센텀시티점",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "051-730-3002",
    "price": null,
    "location": {
      "lat": 35.1700141312924,
      "lng": 129.131197017627
    }
  },
  {
    "id": 243,
    "name": "아딸 롯데백화점센텀시티점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "051-730-3002",
    "price": null,
    "location": {
      "lat": 35.169906629261554,
      "lng": 129.13110970779383
    }
  },
  {
    "id": 244,
    "name": "요거투유",
    "category": "cafe",
    "rating": null,
    "address": "부산 수영구 좌수영로83번길 26",
    "description": "",
    "phone": "051-757-6696",
    "price": null,
    "location": {
      "lat": 35.1715002690457,
      "lng": 129.120204032965
    }
  },
  {
    "id": 245,
    "name": "개성만두",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1698542003588,
      "lng": 129.131067733648
    }
  },
  {
    "id": 246,
    "name": "반베",
    "category": "korean",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1698542003588,
      "lng": 129.131067733648
    }
  },
  {
    "id": 247,
    "name": "히노아지 롯데백화점센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "055-362-9411",
    "price": null,
    "location": {
      "lat": 35.169874620943304,
      "lng": 129.13113630846743
    }
  },
  {
    "id": 248,
    "name": "쉐프예환 신세계백화점센텀시티점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2029",
    "price": null,
    "location": {
      "lat": 35.1687869769186,
      "lng": 129.129033767902
    }
  },
  {
    "id": 249,
    "name": "교자연 신세계백화점센텀시티점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2188",
    "price": null,
    "location": {
      "lat": 35.1687869769186,
      "lng": 129.129033767902
    }
  },
  {
    "id": 250,
    "name": "우오가시 신세계백화점센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-1145",
    "price": null,
    "location": {
      "lat": 35.1687869769186,
      "lng": 129.129033767902
    }
  },
  {
    "id": 251,
    "name": "팔선생 신세계백화점센텀시티점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2196",
    "price": null,
    "location": {
      "lat": 35.1687869769186,
      "lng": 129.129033767902
    }
  },
  {
    "id": 252,
    "name": "고에스프레소 신세계백화점센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2620",
    "price": null,
    "location": {
      "lat": 35.1687869769186,
      "lng": 129.129033767902
    }
  },
  {
    "id": 253,
    "name": "맛있담",
    "category": "japanese",
    "rating": null,
    "address": "부산 수영구 수영로741번길 93",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.17200552279147,
      "lng": 129.1198088929011
    }
  },
  {
    "id": 254,
    "name": "리오네레스토랑",
    "category": "western",
    "rating": null,
    "address": "부산 수영구 구락로 36",
    "description": "",
    "phone": "051-753-0202",
    "price": null,
    "location": {
      "lat": 35.1715980351923,
      "lng": 129.120024391427
    }
  },
  {
    "id": 255,
    "name": "스시츠카무 센텀",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 59",
    "description": "",
    "phone": "051-730-3481",
    "price": null,
    "location": {
      "lat": 35.169804434311935,
      "lng": 129.13118166655968
    }
  },
  {
    "id": 256,
    "name": "동대문엽기떡볶이 해운대센텀점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀동로 9",
    "description": "",
    "phone": "051-746-8598",
    "price": null,
    "location": {
      "lat": 35.1705646896804,
      "lng": 129.132069601541
    }
  },
  {
    "id": 257,
    "name": "하삼동커피 센텀파크점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 142",
    "description": "",
    "phone": "051-747-5623",
    "price": null,
    "location": {
      "lat": 35.17920081731309,
      "lng": 129.12281324378003
    }
  },
  {
    "id": 258,
    "name": "돈카츠렌 신세계백화점센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2144",
    "price": null,
    "location": {
      "lat": 35.1686787345097,
      "lng": 129.129039724736
    }
  },
  {
    "id": 259,
    "name": "상국이네분식 신세계백화점 센텀시티점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2102",
    "price": null,
    "location": {
      "lat": 35.1686678485493,
      "lng": 129.129043830593
    }
  },
  {
    "id": 260,
    "name": "돈키호테 신세계백화점 센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2617",
    "price": null,
    "location": {
      "lat": 35.16866650420412,
      "lng": 129.12906903647945
    }
  },
  {
    "id": 261,
    "name": "스몰굿커피 센텀파크점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 142",
    "description": "",
    "phone": "051-744-1077",
    "price": null,
    "location": {
      "lat": 35.1792171493194,
      "lng": 129.122755497066
    }
  },
  {
    "id": 262,
    "name": "삼진어묵 센텀시티점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-1457",
    "price": null,
    "location": {
      "lat": 35.1686568854394,
      "lng": 129.129052324165
    }
  },
  {
    "id": 263,
    "name": "카페조조",
    "category": "cafe",
    "rating": null,
    "address": "부산 수영구 수미로 80-1",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1729453174106,
      "lng": 129.119351498008
    }
  },
  {
    "id": 264,
    "name": "진순자김밥 신세계백화점 센텀시티점",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-1496",
    "price": null,
    "location": {
      "lat": 35.1688180446803,
      "lng": 129.129521838888
    }
  },
  {
    "id": 265,
    "name": "오규당 신세계센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2070",
    "price": null,
    "location": {
      "lat": 35.1688180446803,
      "lng": 129.129521838888
    }
  },
  {
    "id": 266,
    "name": "왕푸징마라탕",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-1147",
    "price": null,
    "location": {
      "lat": 35.1688180446803,
      "lng": 129.129521838888
    }
  },
  {
    "id": 267,
    "name": "크레미뇽",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1688180446803,
      "lng": 129.129521838888
    }
  },
  {
    "id": 268,
    "name": "그레트힐란 신세계백화점 센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2530",
    "price": null,
    "location": {
      "lat": 35.1688180446803,
      "lng": 129.129521838888
    }
  },
  {
    "id": 269,
    "name": "폴바셋 신세계백화점센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2059",
    "price": null,
    "location": {
      "lat": 35.1688180446803,
      "lng": 129.129521838888
    }
  },
  {
    "id": 270,
    "name": "스타벅스 센텀신세계 3F",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "1522-3232",
    "price": null,
    "location": {
      "lat": 35.1688180446803,
      "lng": 129.129521838888
    }
  },
  {
    "id": 271,
    "name": "차이797 신세계센텀시티점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2085",
    "price": null,
    "location": {
      "lat": 35.1688180253886,
      "lng": 129.129522935819
    }
  },
  {
    "id": 272,
    "name": "아르켓 카페 신세계센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "070-4166-7244",
    "price": null,
    "location": {
      "lat": 35.1688180253886,
      "lng": 129.129522935819
    }
  },
  {
    "id": 273,
    "name": "메종키츠네 카페 신세계백화점 센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2569",
    "price": null,
    "location": {
      "lat": 35.1688180253886,
      "lng": 129.129522935819
    }
  },
  {
    "id": 274,
    "name": "하라커피 신세계백화점 센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2072",
    "price": null,
    "location": {
      "lat": 35.1688180253886,
      "lng": 129.129522935819
    }
  },
  {
    "id": 275,
    "name": "예픔 커피 신세계센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "010-6893-6863",
    "price": null,
    "location": {
      "lat": 35.1688180253886,
      "lng": 129.129522935819
    }
  },
  {
    "id": 276,
    "name": "노티드 부산신세계센텀시티",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "010-7283-9377",
    "price": null,
    "location": {
      "lat": 35.1688180253886,
      "lng": 129.129522935819
    }
  },
  {
    "id": 277,
    "name": "스파랜드 센텀",
    "category": "other",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "1668-2850",
    "price": null,
    "location": {
      "lat": 35.16881802534118,
      "lng": 129.1295229358065
    }
  },
  {
    "id": 278,
    "name": "더타코부스 신세계백화점 센텀시티",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-1208",
    "price": null,
    "location": {
      "lat": 35.16881802534118,
      "lng": 129.1295229358065
    }
  },
  {
    "id": 279,
    "name": "신룽푸마라탕 마라로신세계백화점센템시티점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1688180253412,
      "lng": 129.129522935807
    }
  },
  {
    "id": 280,
    "name": "커피빈 신세계센텀시티점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-1821",
    "price": null,
    "location": {
      "lat": 35.1688180253412,
      "lng": 129.129522935807
    }
  },
  {
    "id": 281,
    "name": "더키친일뽀르노 신세계 센텀시티점",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2073",
    "price": null,
    "location": {
      "lat": 35.1688162817958,
      "lng": 129.129519598038
    }
  },
  {
    "id": 282,
    "name": "하프커피 센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2777",
    "price": null,
    "location": {
      "lat": 35.1688162817958,
      "lng": 129.129519598038
    }
  },
  {
    "id": 283,
    "name": "슈퍼말차 센텀시티",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2550",
    "price": null,
    "location": {
      "lat": 35.1688162817958,
      "lng": 129.129519598038
    }
  },
  {
    "id": 284,
    "name": "카페 레이어드 부산센텀점",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1688162817958,
      "lng": 129.129519598038
    }
  },
  {
    "id": 285,
    "name": "김씨마구로 신세계백화점센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-1145",
    "price": null,
    "location": {
      "lat": 35.16881628179583,
      "lng": 129.12951959803814
    }
  },
  {
    "id": 286,
    "name": "미쓰꾸냥",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2636",
    "price": null,
    "location": {
      "lat": 35.1686564225391,
      "lng": 129.129078650467
    }
  },
  {
    "id": 287,
    "name": "도제 센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1686487209689,
      "lng": 129.129055403556
    }
  },
  {
    "id": 288,
    "name": "투쉐프",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2619",
    "price": null,
    "location": {
      "lat": 35.1686318191788,
      "lng": 129.129042891056
    }
  },
  {
    "id": 289,
    "name": "싱카이 신세계 센텀시티점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2032",
    "price": null,
    "location": {
      "lat": 35.1686211646656,
      "lng": 129.129033833766
    }
  },
  {
    "id": 290,
    "name": "보드랑",
    "category": "cafe",
    "rating": null,
    "address": "부산 해운대구 재반로12번길 16",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1799782587611,
      "lng": 129.12765296414
    }
  },
  {
    "id": 291,
    "name": "호우섬 신세계백화점 센텀시티점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2128",
    "price": null,
    "location": {
      "lat": 35.1686358348732,
      "lng": 129.12912201087
    }
  },
  {
    "id": 292,
    "name": "파리바게뜨 해운대센텀점",
    "category": "bakery",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 142",
    "description": "",
    "phone": "051-747-8482",
    "price": null,
    "location": {
      "lat": 35.17950178598368,
      "lng": 129.12327656781093
    }
  },
  {
    "id": 293,
    "name": "온기정 신세계백화점 센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2037",
    "price": null,
    "location": {
      "lat": 35.168586556779,
      "lng": 129.12900330066
    }
  },
  {
    "id": 294,
    "name": "긴자료코 부산센텀점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀동로 9",
    "description": "",
    "phone": "051-746-4799",
    "price": null,
    "location": {
      "lat": 35.17082818683142,
      "lng": 129.13245839935786
    }
  },
  {
    "id": 295,
    "name": "충무김밥이랑수제비",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀동로 9",
    "description": "",
    "phone": "051-741-3108",
    "price": null,
    "location": {
      "lat": 35.1707175006545,
      "lng": 129.132398440266
    }
  },
  {
    "id": 296,
    "name": "텐테이블",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.16864880756115,
      "lng": 129.12930671775456
    }
  },
  {
    "id": 297,
    "name": "엄마부엌",
    "category": "snack",
    "rating": null,
    "address": "부산 해운대구 센텀중앙로 145",
    "description": "",
    "phone": "051-746-2717",
    "price": null,
    "location": {
      "lat": 35.1790813433156,
      "lng": 129.122226226747
    }
  },
  {
    "id": 298,
    "name": "마라로 신세계백화점 센텀시티점",
    "category": "chinese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-1147",
    "price": null,
    "location": {
      "lat": 35.1685187124023,
      "lng": 129.129017992981
    }
  },
  {
    "id": 299,
    "name": "트리니티레스토랑 신세계센텀시티",
    "category": "western",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "",
    "price": null,
    "location": {
      "lat": 35.1685008790416,
      "lng": 129.129109712077
    }
  },
  {
    "id": 300,
    "name": "문스시 신세계백화점 센텀시티점",
    "category": "japanese",
    "rating": null,
    "address": "부산 해운대구 센텀남대로 35",
    "description": "",
    "phone": "051-745-2049",
    "price": null,
    "location": {
      "lat": 35.1687443411976,
      "lng": 129.129818418321
    }
  }
];