export interface Project {
  title: string;
  desc: string;
  skillDesc: string[];
  team: null | {
    front: number;
    back: number;
    myRole: string[];
  };
  links: Link[];
  dev: null | {
    start?: string;
    end?: string;
    period?: string;
  };
  stack: string[];
  prod: {
    isTeam: boolean;
    desktop: ProdPage[];
    tablet: ProdPage[];
    mobile: ProdPage[];
  };
}

interface Link {
  name: string;
  url: string;
}

interface ProdPage {
  name: string;
  img?: string;
  vid?: string;
  vidDesc?: string;
}

export const projectsData: Project[] = [
  {
    title: '🎉 Party People',
    desc: '여행 동행자 구하기 서비스',
    skillDesc: [
      '캐러셀 슬라이드 구현 (라이브러리: React-slick)',
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
      desktop: [
        {
          name: '메인 페이지',
          vid: 'rp8r1mLOY74',
        },
        {
          name: '대륙 선택 페이지',
          vid: 'rT_c0PzQmPQ',
        },
        {
          name: '동행글 리스트 페이지',
          vid: 'IEy3d72Rnug',
        },
        {
          name: '프로필 페이지',
          vid: 'hI7eLQlPilU',
        },
      ],
      tablet: [
        {
          name: '메인 페이지',
          vid: 'D_JsBL4N_4Y',
        },
        {
          name: '대륙 선택 페이지',
          vid: '88YdHQVpaU0',
        },
        {
          name: '동행글 리스트 페이지',
          vid: '0d7q2Lvfiu8',
        },
        {
          name: '프로필 페이지',
          vid: 'pYIjzj44pBg',
        },
      ],
      mobile: [
        {
          name: '메인 페이지',
          vid: '5jpRw1slyww',
        },
        {
          name: '대륙 선택 페이지',
          vid: 'nHyguTpfpIc',
        },
        {
          name: '동행글 리스트 페이지',
          vid: 'SU67dX2dU88',
        },
        {
          name: '프로필 페이지',
          vid: 'mlksjr5q26M',
        },
      ],
    },
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
        url: 'https://github.com/RoseJang2000/color-image-search',
      },
    ],
    dev: null,
    stack: ['React', 'TypeScript', 'Axios'],
    prod: {
      isTeam: false,
      desktop: [
        {
          name: '서비스 시연',
          vid: 'kcMbnqpx7ho',
        },
      ],
      tablet: [
        {
          name: '서비스 시연',
          vid: 'ee8iCfevFRk',
        },
      ],
      mobile: [
        {
          name: '서비스 시연',
          vid: 'w2ovJeNBpF8',
        },
      ],
    },
  },
  {
    title: '⚽️ Our City',
    desc: '맨체스터 시티 정보 사이트',
    skillDesc: [
      '캐러셀 슬라이드 구현 (라이브러리 X)',
      'Google Custom Search API 사용',
      '더보기 버튼 형식의 데이터 불러오기 구현',
      '반응형 웹 구현',
    ],
    team: null,
    links: [
      {
        name: '배포',
        url: 'https://man-city-web.vercel.app/',
      },
      {
        name: '깃허브',
        url: 'https://github.com/RoseJang2000/man-city-web',
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
      desktop: [
        {
          name: '서비스 시연',
          vid: '3OUVOEkAos0',
          vidDesc:
            '0:00 ~ 0:07 : Home page,0:08 ~ 0:30 : Players page,0:31 ~ 0:44 : News page',
        },
      ],
      tablet: [
        {
          name: '서비스 시연',
          vid: '-ECw6RWe134',
          vidDesc:
            '0:00 ~ 0:08 : Home page,0:09 ~ 0:20 : Players page,0:21 ~ 0:30 : News page',
        },
      ],
      mobile: [
        {
          name: '서비스 시연',
          vid: '-Yk_ojfmi-s',
          vidDesc:
            '0:00 ~ 0:04 : Home page,0:05 ~ 0:14 : Players page,0:15 ~ 0:23 : News page',
        },
      ],
    },
  },
  {
    title: '👤 Profile',
    desc: '프로필 웹사이트',
    skillDesc: [
      'React Draggable 라이브러리를 이용한 움직이는 컴포넌트',
      're-resizable 라이브러리를 이용한 사이즈 조정 가능한 컴포넌트',
      '조건문을 이용한 터미널 기능 구현',
      'useRef를 이용한 input autoFocus 구현',
      'useRef를 이용한 터미널 컴포넌트 autoScroll 구현',
      '반응형 웹 구현',
    ],
    team: null,
    links: [
      {
        name: '배포',
        url: 'https://rosejang-profile.vercel.app/',
      },
      {
        name: '깃허브',
        url: 'https://github.com/RoseJang2000/rosejang-profile',
      },
    ],
    dev: null,
    stack: ['React', 'TypeScript', 'Styled-components'],
    prod: {
      isTeam: false,
      desktop: [
        {
          name: '서비스 시연',
          vid: 'geNqPfvIOt4',
        },
      ],
      tablet: [
        {
          name: '서비스 시연',
          vid: '0jvBQkl_1cg',
        },
      ],
      mobile: [
        {
          name: '서비스 시연',
          vid: 'we0snvL9TrI',
        },
      ],
    },
  },
  {
    title: '💻 Portfolio',
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
    prod: {
      isTeam: false,
      desktop: [
        {
          name: '서비스 시연',
          vid: '0xR4Pep6Fbk',
        },
      ],
      tablet: [
        {
          name: '서비스 시연',
          vid: 'QwcLa66THBc',
        },
      ],
      mobile: [
        {
          name: '서비스 시연',
          vid: 'XXZcGhxBFv0',
        },
      ],
    },
    stack: ['React', 'TypeScript', 'Styled-components', 'React-Router'],
  },
  // {
  //   title: '💬 Stack Overflow Clone',
  //   desc: 'Stack Overflow 서비스 클론',
  //   skillDesc: ['toast UI editor 사용', '반응형 웹 구현'],
  //   team: {
  //     front: 3,
  //     back: 3,
  //     myRole: [
  //       '메인 (질문 리스트)페이지 스타일링 & 기능 구현',
  //       '질문 & 답변 조회 페이지 스타일링 & 기능 구현',
  //       '질문 수정 페이지 스타일링 & 기능 구현',
  //       'Tags 페이지 스타일링 & 기능 구현',
  //     ],
  //   },
  //   links: [
  //     {
  //       name: '배포',
  //       url: 'http://pre-project-021.s3-website.ap-northeast-2.amazonaws.com/',
  //     },
  //     {
  //       name: '깃허브',
  //       url: 'https://github.com/codestates-seb/seb42_pre_021',
  //     },
  //     {
  //       name: '노션',
  //       url: 'https://sleepyjoyy.notion.site/PreProject-819f277290d54daa9d52bf7d2a4531f6',
  //     },
  //   ],
  //   dev: {
  //     start: '2023-02-13',
  //     end: '2023-02-28',
  //   },
  //   stack: [
  //     'React',
  //     'JavaScript',
  //     'Axios',
  //     'Styled-components',
  //     'React-Router',
  //   ],
  //   prod: {
  //     isTeam: false,
  //     desktop: [
  //       {
  //         name: '서비스 시연',
  //         vid: '/videos/cityWeather/weather_desktop.mov',
  //       },
  //     ],
  //     tablet: [
  //       {
  //         name: '서비스 시연',
  //         vid: '/videos/cityWeather/weather_tablet.mov',
  //       },
  //     ],
  //     mobile: [
  //       {
  //         name: '서비스 시연',
  //         vid: '/videos/cityWeather/weather_mobile.mov',
  //       },
  //     ],
  //   },
  // },
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
        url: 'https://rosejang2000.github.io/city-weather-app/',
      },
      {
        name: '깃허브',
        url: 'https://github.com/RoseJang2000/city-weather-app',
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
      desktop: [
        {
          name: '서비스 시연',
          vid: 'k7jbFXVR4Ms',
        },
      ],
      tablet: [
        {
          name: '서비스 시연',
          vid: '4ZRcJhwlFDE',
        },
      ],
      mobile: [
        {
          name: '서비스 시연',
          vid: 'aZ-6C3oqOFQ',
        },
      ],
    },
  },
];
