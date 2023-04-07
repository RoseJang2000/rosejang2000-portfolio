export interface Project {
  title: string;
  desc: string;
  skillDesc: string[];
  team: null | {
    front: number;
    back: number;
    myRole: string[];
  };
  thumbnail: string;
  links: Link[];
  dev: null | {
    start?: string;
    end?: string;
    period?: string;
  };
  stack: string[];
  prod?: {
    isTeam: boolean;
    pages: ProdPage[];
  };
}

interface Link {
  name: string;
  url: string;
}

interface ProdPage {
  type: string;
  pageInfo: {
    name: string;
    img?: string;
    vid?: string;
  }[];
}

export const projectsData: Project[] = [
  {
    title: '🎉 Party People',
    desc: '여행 동행자 구하기 서비스',
    skillDesc: [
      '캐러셀 슬라이드 구현',
      '스크롤 애니메이션 구현',
      'axios Interceptor를 이용한 토큰 만료 관리 및 재발급',
      'Intersection Observer를 이용한 무한스크롤 구현',
      'imgur API를 이용한 이미지 링크 발급',
    ],
    team: {
      front: 3,
      back: 3,
      myRole: [
        '메인 페이지 스타일링 & 기능 구현',
        '대륙 선택 페이지 스타일링 & 기능 구현',
        '국가별 동행글 리스트 페이지 스타일링 & 기능 구현',
        '프로필 페이지 스타일링 & 기능 구현',
        '구글&카카오 로그인/회원가입 구현',
        '토큰 만료 및 재발급 관리',
      ],
    },
    links: [
      {
        name: '배포',
        url: 'http://partypeople.s3-website.ap-northeast-2.amazonaws.com/',
      },
      {
        name: '깃허브',
        url: 'https://github.com/codestates-seb/seb42_main_008',
      },
      {
        name: '노션',
        url: 'https://phrygian-neem-c42.notion.site/Main-Project-6b6a883620bd4a6ebeeca2c5338a38fa',
      },
      {
        name: '구현 완료 화면',
        url: 'https://phrygian-neem-c42.notion.site/e59be6b540364dfb90dc40edaa98aa61',
      },
    ],
    dev: {
      start: '2023-03-03',
      end: '2023-03-24',
    },
    stack: [
      'React',
      'TypeScript',
      'Recoil',
      'Axios',
      'Styled-components',
      'React-Router',
    ],
    prod: {
      isTeam: true,
      pages: [
        {
          type: 'Desktop',
          pageInfo: [
            {
              name: '메인 페이지',
              vid: 'src/assets/partyPeople/Main/main_desktop.mov',
            },
            {
              name: '대륙 선택 페이지',
              vid: 'src/assets/partyPeople/ContinentSelect/continentSelect_desktop.mov',
            },
            {
              name: '동행글 리스트 페이지',
              vid: 'src/assets/partyPeople/ContentList/contentList_desktop.mov',
            },
            {
              name: '프로필 페이지',
              vid: 'src/assets/partyPeople/Profile/profile_desktop.mov',
            },
          ],
        },
        {
          type: 'Tablet',
          pageInfo: [
            {
              name: '메인 페이지',
              vid: 'src/assets/partyPeople/Main/main_tablet.mov',
            },
            {
              name: '대륙 선택 페이지',
              vid: 'src/assets/partyPeople/ContinentSelect/continentSelect_tablet.mov',
            },
            {
              name: '동행글 리스트 페이지',
              vid: 'src/assets/partyPeople/ContentList/contentList_tablet.mov',
            },
            {
              name: '프로필 페이지',
              vid: 'src/assets/partyPeople/Profile/profile_tablet.mov',
            },
          ],
        },
        {
          type: 'Mobile',
          pageInfo: [
            {
              name: '메인 페이지',
              vid: 'src/assets/partyPeople/Main/main_mobile.mov',
            },
            {
              name: '대륙 선택 페이지',
              vid: 'src/assets/partyPeople/ContinentSelect/continentSelect_mobile.mov',
            },
            {
              name: '동행글 리스트 페이지',
              vid: 'src/assets/partyPeople/ContentList/contentList_mobile.mov',
            },
            {
              name: '프로필 페이지',
              vid: 'src/assets/partyPeople/Profile/profile_mobile.mov',
            },
          ],
        },
      ],
    },
    thumbnail: 'src/assets/thumbnails/partyPeople.png',
  },
  {
    title: '🎨 Color Aesthetics',
    desc: '색상별 이미지 검색 사이트',
    skillDesc: [
      'Intersection Observer를 이용한 무한스크롤 구현',
      'Naver 이미지 검색 API 사용',
      'Pinterest 형식의 Masonry layout 구현',
      '반응형 웹 구현',
    ],
    team: null,
    links: [
      {
        name: '배포',
        url: 'https://rosejang2000.github.io/color-image-search/',
      },
      {
        name: '깃허브',
        url: 'https://github.com/codestates-seb/seb42_main_008',
      },
    ],
    dev: null,
    stack: ['React', 'TypeScript', 'Axios'],
    prod: {
      isTeam: false,
      pages: [
        {
          type: 'Desktop',
          pageInfo: [
            {
              name: '메인 페이지',
              vid: 'src/assets/colorAesthetics/color_desktop.mov',
            },
          ],
        },
        {
          type: 'Tablet',
          pageInfo: [
            {
              name: '메인 페이지',
              vid: 'src/assets/colorAesthetics/color_tablet.mov',
            },
          ],
        },
        {
          type: 'Mobile',
          pageInfo: [
            {
              name: '메인 페이지',
              vid: 'src/assets/colorAesthetics/color_mobile.mov',
            },
          ],
        },
      ],
    },
    thumbnail: 'src/assets/thumbnails/colorAesthetics.png',
  },
  {
    title: '⚽️ Our City',
    desc: '맨체스터 시티 정보 사이트',
    skillDesc: [
      '캐러셀 슬라이드 구현',
      'Google Custom Search API 사용',
      '더보기 버튼 형식의 데이터 불러오기 구현',
      '반응형 웹 구현',
    ],
    team: null,
    links: [
      {
        name: '배포',
        url: 'https://rosejang2000.github.io/color-image-search/',
      },
      {
        name: '깃허브',
        url: 'https://github.com/codestates-seb/seb42_main_008',
      },
    ],
    dev: {
      start: '2023-04-01',
      end: '2023-04-04',
    },
    stack: [
      'React',
      'TypeScript',
      'Axios',
      'Styled-components',
      'React-Router',
    ],
    prod: {
      isTeam: false,
      pages: [
        {
          type: 'Desktop',
          pageInfo: [
            {
              name: '전체 페이지 시연',
              vid: 'src/assets/ourCity/city_desktop.mov',
            },
          ],
        },
        {
          type: 'Tablet',
          pageInfo: [
            {
              name: '전체 페이지 시연',
              vid: 'src/assets/ourCity/city_tablet.mov',
            },
          ],
        },
        {
          type: 'Mobile',
          pageInfo: [
            {
              name: '전체 페이지 시연',
              vid: 'src/assets/ourCity/city_mobile.mov',
            },
          ],
        },
      ],
    },
    thumbnail: 'src/assets/thumbnails/ourCity.png',
  },
  {
    title: '👤 장장미 포트폴리오',
    desc: '포트폴리오 웹사이트',
    skillDesc: [
      'Vite를 이용한 프로젝트 개발환경 구축',
      'Styled component의 Theme Provider를 이용한 다크모드 구현',
      'localStorage를 통한 테마 모드 유지',
      '반응형 웹 구현',
    ],
    team: null,
    links: [
      {
        name: '배포',
        url: 'https://rosejang2000-portfolio.vercel.app/',
      },
      {
        name: '깃허브',
        url: 'https://github.com/RoseJang2000/rosejang2000-portfolio',
      },
    ],
    dev: {
      start: '2023-04-05',
      end: '2023-04-07',
    },
    stack: ['React', 'TypeScript', 'Styled-components', 'React-Router'],
    thumbnail: 'src/assets/thumbnails/portfolio.png',
  },
  {
    title: '💬 Stack Overflow Clone',
    desc: 'Stack Overflow 서비스 클론',
    skillDesc: ['toast UI editor 사용', '반응형 웹 구현'],
    team: {
      front: 3,
      back: 3,
      myRole: [
        '메인 (질문 리스트)페이지 스타일링 & 기능 구현',
        '질문 & 답변 조회 페이지 스타일링 & 기능 구현',
        '질문 수정 페이지 스타일링 & 기능 구현',
        'Tags 페이지 스타일링 & 기능 구현',
      ],
    },
    links: [
      {
        name: '배포',
        url: 'http://pre-project-021.s3-website.ap-northeast-2.amazonaws.com/',
      },
      {
        name: '깃허브',
        url: 'https://github.com/codestates-seb/seb42_pre_021',
      },
      {
        name: '노션',
        url: 'https://sleepyjoyy.notion.site/PreProject-819f277290d54daa9d52bf7d2a4531f6',
      },
    ],
    dev: {
      start: '2023-02-13',
      end: '2023-02-28',
    },
    stack: [
      'React',
      'JavaScript',
      'Axios',
      'Styled-components',
      'React-Router',
    ],
    thumbnail: 'src/assets/thumbnails/stackOverflowClone.png',
  },
  {
    title: '🌡 City Weather',
    desc: '나라/지역 날씨 검색 사이트',
    skillDesc: [
      'open weather API를 이용한 나라/지역별 날씨 검색',
      'unsplash API를 이용한 나라/지역별 배경사진 변경',
      '반응형 웹 구현',
    ],
    team: null,
    links: [
      {
        name: '배포',
        url: 'https://rosejang2000.github.io/color-image-search/',
      },
      {
        name: '깃허브',
        url: 'https://github.com/codestates-seb/seb42_main_008',
      },
    ],
    dev: null,
    stack: [
      'React',
      'TypeScript',
      'Axios',
      'Styled-components',
      'React-Router',
    ],
    prod: {
      isTeam: false,
      pages: [
        {
          type: 'Desktop',
          pageInfo: [
            {
              name: '서비스 시연',
              vid: 'src/assets/cityWeather/weather_desktop.mov',
            },
          ],
        },
        {
          type: 'Tablet',
          pageInfo: [
            {
              name: '서비스 시연',
              vid: 'src/assets/cityWeather/weather_tablet.mov',
            },
          ],
        },
        {
          type: 'Mobile',
          pageInfo: [
            {
              name: '서비스 시연',
              vid: 'src/assets/cityWeather/weather_mobile.mov',
            },
          ],
        },
      ],
    },
    thumbnail: 'src/assets/thumbnails/cityWeather.png',
  },
];
