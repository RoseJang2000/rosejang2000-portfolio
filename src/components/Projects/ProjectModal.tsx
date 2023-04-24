import { Project } from '@assets/projectsData';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProjectStacks } from './ProjectArticle';
import { GoX } from 'react-icons/go';
import { RiSubtractLine } from 'react-icons/ri';

interface ProjectModalProps {
  project: Project;
  imageSrc: string;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectModal = ({
  project,
  imageSrc,
  setIsShowModal,
}: ProjectModalProps) => {
  const [currentTab, setCurrentTab] = useState({
    index: 0,
    name: 'desktop',
  });
  const [pageData, setPageData] = useState(project.prod.desktop);
  const tabs = ['desktop', 'tablet', 'mobile'];

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleClickab = (index: number, name: string) => {
    setCurrentTab({
      index,
      name,
    });
    setPageData(project.prod[name as keyof object]);
  };

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: hidden;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      <ModalBackground onClick={handleCloseModal}></ModalBackground>
      <ModalContainer>
        <div className="inner">
          <CloseButton1 onClick={handleCloseModal}>
            <span className="icon">
              <GoX />
            </span>
          </CloseButton1>
          <CloseButton2 onClick={handleCloseModal}>
            <span className="icon">
              <RiSubtractLine />
            </span>
          </CloseButton2>
          <LeftSection>
            <picture className="project-img">
              <source
                srcSet={`/images/avif/${imageSrc}.avif`}
                type="image/avif"
              />
              <source
                srcSet={`/images/webp/${imageSrc}.webp`}
                type="image/webp"
              />
              <img src={`/images/png/${imageSrc}.png`} />
            </picture>
            <Information>
              <h1 className="project-title">{project.title}</h1>
              <p className="project-desc">{project.desc}</p>
            </Information>
            <Information>
              <h1>📌 바로가기 링크</h1>
              <ul className="project-links-list">
                {project.links.map((link, index) => (
                  <li key={index} className="project-links-item">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📎&nbsp;&nbsp;{link.name} 링크 바로가기
                    </a>
                  </li>
                ))}
              </ul>
            </Information>
            {project.team && (
              <>
                <Information>
                  <h1>👨‍👩‍👧‍👦 팀 정보</h1>
                  <ul className="project-team-info">
                    <li>Frontend: {project.team.front}명</li>
                    <li>Backend: {project.team.back}명</li>
                  </ul>
                </Information>
                <Information>
                  <h1>🙋‍♀️ 프로젝트 내 맡은 역할</h1>
                  <ul className="project-team-role">
                    {project.team.myRole.map((role, index) => (
                      <li key={index}>
                        <span>▶️</span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </Information>
              </>
            )}
            <Information>
              <h1>🧩 사용 기술</h1>
              <ul>
                {project.skillDesc.map((skill, index) => (
                  <li key={index}>
                    <span>▶️</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Information>
            {project.dev && (
              <Information>
                <h1>🕒 개발 기간</h1>
                <p>
                  {project.dev.start} ~ {project.dev.end}
                </p>
              </Information>
            )}
            <ProjectStacks>
              <h1 className="project-stack-title">🛠 사용 스택</h1>
              <ul className="project-stack-list">
                {project.stack.map((stack, index) => (
                  <li className="project-stack-item" key={index}>
                    {stack}
                  </li>
                ))}
              </ul>
            </ProjectStacks>
          </LeftSection>
          <RightSection>
            {project.prod.isTeam ? (
              <h1 className="title">프로젝트 내 맡은 페이지 화면</h1>
            ) : (
              <h1 className="title">구현 완료 페이지 화면</h1>
            )}
            <div className="tabs">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab ${
                    index === currentTab.index ? 'active' : undefined
                  }`}
                  onClick={() => handleClickab(index, tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="project-pages">
              {pageData.map((data, index) => (
                <div key={index} className="project-page-item">
                  {data.vid !== undefined && (
                    <div className="project-video">
                      <h1>👉 {data.name}</h1>
                      <iframe
                        width={'100%'}
                        height={400}
                        src={`https://www.youtube.com/embed/${data.vid}`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ border: 'none' }}
                      />
                      {data.vidDesc && (
                        <ul>
                          {data.vidDesc.split(',').map((desc, index) => (
                            <li key={index}>▶️ {desc}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </RightSection>
        </div>
      </ModalContainer>
    </>
  );
};

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const ModalContainer = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${(props) => props.theme.colors.bgColor};
  border-radius: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  padding: 3rem 1rem 1rem 1rem;
  .inner {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    overflow: auto;
  }
  .inner,
  section {
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.pointColor};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(33, 122, 244, 0.1);
      border-radius: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    .inner {
      grid-template-columns: 1fr;
    }
  }
`;

const LeftSection = styled.section`
  width: 100%;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.lineColor};
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  .project-img {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 1rem;
      border: 1px solid ${(props) => props.theme.colors.lineColor};
    }
  }
  @media screen and (max-width: 768px) {
    height: fit-content;
    overflow: visible;
    border: none;
  }
`;

const Information = styled.div`
  h1 {
    margin-bottom: 0.5rem;
  }
  li {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
  }
  li,
  p {
    margin-left: 1rem;
  }
  .project-links-item {
    text-decoration: underline;
  }
`;

const RightSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
  .title {
    width: 100%;
  }
  .tabs {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.colors.lineColor};
    border-radius: 1rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  .active {
    background-color: ${(props) => props.theme.colors.pointColor};
    color: #fff;
  }
  .project-pages {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
  .project-page-item {
    width: 100%;
    h1 {
      margin-bottom: 0.5rem;
    }
    video {
      width: 100%;
    }
  }
  .project-video {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: fit-content;
    overflow: visible;
    border-top: 1px solid ${(props) => props.theme.colors.lineColor};
    margin-top: 2rem;
    padding-top: 2rem;
  }
`;

const CloseButton1 = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #ff5f57;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #333;
  .icon {
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  :hover {
    .icon {
      display: flex;
    }
  }
`;

const CloseButton2 = styled(CloseButton1)`
  background-color: #febc2e;
  left: 2.8rem;
`;

export default ProjectModal;
