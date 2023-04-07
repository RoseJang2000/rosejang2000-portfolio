interface Skills {
  title: string;
  list: Skill[];
}

interface Skill {
  name: string;
  desc: string;
}

export const skillsData: Skills[] = [
  {
    title: 'FrontEnd',
    list: [
      {
        name: 'React',
        desc: '리액트를 사용한 프로젝트 제작 경험이 있습니다.',
      },
      {
        name: 'JavaScript',
        desc: '자바스크립트를 사용한 프로젝트 제작 경험이 있습니다.',
      },
      {
        name: 'TypeScript',
        desc: '팀 프로젝트에 처음 사용한 후, 자바스크립트로 제작했던 프로젝트들을 리팩토링 하며 꾸준히 공부하고 있습니다.',
      },
      {
        name: 'Styled Components',
        desc: '스타일 컴포넌트를 이용한 리액트 프로젝트 스타일링 경험이 있습니다.',
      },
      {
        name: 'HTML',
        desc: '',
      },
      {
        name: 'CSS',
        desc: '',
      },
    ],
  },
  {
    title: 'Etc',
    list: [
      {
        name: 'Github',
        desc: '커밋 컨벤션, 브랜치 전략을 정해 협업한 경험이 있고, issue와 칸반을 통한 일정관리를 진행한 경험이 있습니다.',
      },
      {
        name: 'Git',
        desc: 'git을 사용해 페이지 단위로 브랜치를 나누어 작업하고, 꾸준히 커밋하는 습관을 들이고자 노력하고 있습니다.',
      },
      {
        name: 'Figma',
        desc: '피그마를 이용한 와이어프레임 및 화면정의서 제작, 협업 경험이 있습니다.',
      },
      {
        name: 'Amazon S3',
        desc: '아마존 S3를 통한 프론트엔드 프로젝트 배포 경험이 있습니다.',
      },
      {
        name: 'Github Pages',
        desc: 'Github Pages를 통한 프론트엔드 프로젝트 배포 경험이 있습니다.',
      },
      {
        name: 'Vercel',
        desc: 'Vercel을 통한 프론트엔드 프로젝트 배포 경험이 있습니다.',
      },
      {
        name: 'Notion',
        desc: '노션을 이용하여 회의록, 일정, 필요 문서들을 정리하며 협업한 경험이 있습니다.',
      },
      {
        name: 'Discord',
        desc: '디스코드를 이용해 팀원들과 소통하고 협업한 경험이 있습니다.',
      },
    ],
  },
];
