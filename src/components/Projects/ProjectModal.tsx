import { Project } from '@assets/projectsData';
import { useEffect } from 'react';
import styled from 'styled-components';

interface ProjectModalProps {
  project: Project;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectModal = ({ project, setIsShowModal }: ProjectModalProps) => {
  const handleCloseModal = () => {
    setIsShowModal(false);
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
        <LeftSection>
          <img className="project-img" src={project.thumbnail} />
          <div className="project-info">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-desc">{project.desc}</p>
          </div>
          <ul className="project-links">
            {project.links.map((link, index) => (
              <li key={index} className="project-links-item">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  📎&nbsp;&nbsp;{link.name}링크 바로가기
                </a>
              </li>
            ))}
          </ul>
          {project.team && (
            <div className="project-team">
              <h1>팀 정보</h1>
              <ul className="project-team-info">
                <li>Frontend: {project.team.front}명</li>
                <li>Backend: {project.team.back}명</li>
              </ul>
              <h1>프로젝트 내 맡은 역할</h1>
              <ul className="project-team-role">
                {project.team.myRole.map((role, index) => (
                  <li key={index}>
                    <span>✅</span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </LeftSection>
        <RightSection></RightSection>
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
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 1280px) {
    background-color: gray;
  }
  @media screen and (max-width: 992px) {
    background-color: lightcoral;
  }
  @media screen and (max-width: 768px) {
    background-color: lightpink;
  }
  @media screen and (max-width: 576px) {
    background-color: lightgreen;
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
  .project-img {
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.colors.lineColor};
  }
`;

const RightSection = styled.section`
  width: 100%;
  height: 100%;
`;
export default ProjectModal;
