import HeaderListItem, {
  MenuLinkItem,
  SubMenu,
} from "./class/HeaderListItem";

export const listDummyData: HeaderListItem[] = [
  new HeaderListItem(new MenuLinkItem("신용카드", "credit-card"), [
    new SubMenu("최대 혜택 카드 찾기", [
      new MenuLinkItem("전체", "all"),
      new MenuLinkItem("현대카드", "hyeondai"),
      new MenuLinkItem("삼성카드", "samsung")
    ]),
    new SubMenu("혜택별 카드 추천", [
      new MenuLinkItem("온라인 주유 최대 할인 카드", "dummy"),
      new MenuLinkItem("온라인 쇼핑 최대 할인 카드", "dummy"),
      new MenuLinkItem("통신비 최대 할인 카드", "dummy"),
      new MenuLinkItem("교통 최대 할인 카드", "dummy"),
    ]),
    new SubMenu("인기 카드 추천", [
      new MenuLinkItem("2024 신용카드 추천", "dummy"),
      new MenuLinkItem("2023 신용카드 추천", "dummy"),
      new MenuLinkItem("2022 신용카드 추천", "dummy"),
      new MenuLinkItem("2021 신용카드 추천", "dummy"),
    ]),
    new SubMenu("카드 상식과 꿀팁", [
      new MenuLinkItem("신용카드와 체크카드 차이", "dummy"),
      new MenuLinkItem("신용카드 장점 및 발급방법", "dummy"),
      new MenuLinkItem("연말정산 카드공제 100%", "dummy"),
      new MenuLinkItem("카드테크 하는법", "dummy"),
    ])
  ]),
  new HeaderListItem(new MenuLinkItem("신용대출", "loan"), [
    new SubMenu("최저 금리 상품 찾기", [
      new MenuLinkItem("전체", 'dummy'),
      new MenuLinkItem("1금융권", 'dummy'),
      new MenuLinkItem("2금융권", 'dummy'),
      new MenuLinkItem("무직자대출", 'dummy'),
      new MenuLinkItem("사업자대출", 'dummy'),
      new MenuLinkItem("저신용자대출", 'dummy'),
    ]),
    new SubMenu("돈이된다! 머니피드", [
      new MenuLinkItem("[대출 피드 모두 보기]", 'dummy'),
      new MenuLinkItem("[인기 콘텐츠 모음]", 'dummy'),
      new MenuLinkItem("2024 햇살론 총전리", 'dummy'),
      new MenuLinkItem("2024 대출이자 줄이는 방법", 'dummy'),
    ]),
    new SubMenu("신용대출 비교와 추천", [
      new MenuLinkItem("2024 대환대출 비교", 'dummy'),
      new MenuLinkItem("2024 저축은행 신용대출 비교", 'dummy'),
      new MenuLinkItem("2024 캐피탈 신용대출 비교", 'dummy'),
      new MenuLinkItem("2024 카드론 금리 비교비교", 'dummy'),
    ]),
    new SubMenu("신용대출 지식: 기초", [
      new MenuLinkItem("신용대출의 모든 것", 'dummy'),
      new MenuLinkItem("대출 상황방식의 모든 것", 'dummy'),
      new MenuLinkItem("대출 종류와 필요 서류", 'dummy'),
      new MenuLinkItem("대출 이자 줄이는 방법", 'dummy'),
    ])
  ]), 
  new HeaderListItem(new MenuLinkItem("대출금리쿠폰", "loan"), [
    new SubMenu("서브 메뉴 타이틀 1", [
      new MenuLinkItem('서브 메뉴 목록 1', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 2', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 3', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 4', 'dummy'),
    ]),
    new SubMenu("서브 메뉴 타이틀 2", [
      new MenuLinkItem('서브 메뉴 목록 1', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 2', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 3', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 4', 'dummy'),
    ]),
    new SubMenu("서브 메뉴 타이틀 3", [
      new MenuLinkItem('서브 메뉴 목록 1', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 2', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 3', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 4', 'dummy'),
    ]),
    new SubMenu("서브 메뉴 타이틀 4", [
      new MenuLinkItem('서브 메뉴 목록 1', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 2', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 3', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 4', 'dummy'),
    ]),
  ]),
  new HeaderListItem(new MenuLinkItem("신용점수", "loan"), [
    new SubMenu("서브 메뉴 타이틀 1", [
      new MenuLinkItem('서브 메뉴 목록 1', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 2', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 3', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 4', 'dummy'),
    ]),
    new SubMenu("서브 메뉴 타이틀 2", [
      new MenuLinkItem('서브 메뉴 목록 1', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 2', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 3', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 4', 'dummy'),
    ]),
    new SubMenu("서브 메뉴 타이틀 3", [
      new MenuLinkItem('서브 메뉴 목록 1', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 2', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 3', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 4', 'dummy'),
    ]),
    new SubMenu("서브 메뉴 타이틀 4", [
      new MenuLinkItem('서브 메뉴 목록 1', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 2', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 3', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 4', 'dummy'),
    ]),
    new SubMenu("서브 메뉴 타이틀 5", [
      new MenuLinkItem('서브 메뉴 목록 1', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 2', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 3', 'dummy'),
      new MenuLinkItem('서브 메뉴 목록 4', 'dummy'),
    ]),
  ]),
  new HeaderListItem(new MenuLinkItem("예적금", "loan"), [
    new SubMenu("신용대출 지식: 기초", [
      new MenuLinkItem('', 'dummy'),
      new MenuLinkItem('', 'dummy'),
      new MenuLinkItem('', 'dummy'),
    ]),
  ]),
  new HeaderListItem(new MenuLinkItem("자동차 보험", "loan"), [
    new SubMenu("자동차보험 기초 지식", [
      new MenuLinkItem('자동차보험 비교에 대한 기초 이해', 'dummy'),
      new MenuLinkItem('자차보험 총정리', 'dummy'),
      new MenuLinkItem('자동차 책임보험 총정리', 'dummy'),
      new MenuLinkItem('할인 특약 총정리', 'dummy'),
      new MenuLinkItem('할증 기준 총정리', 'dummy'),
      new MenuLinkItem('자기신체사고 vs 자동차 상해', 'dummy'),
    ]),
    new SubMenu("하루만 필요하다면?", [new MenuLinkItem('원데이자동차보험 vs 단기운전자확대특약', 'dummy'), new MenuLinkItem('모든 원데이 자동차보험 가격 비교', 'dummy')]),
  ])
];
