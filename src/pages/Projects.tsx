import { projectsData } from '@assets/projectsData';
import ProjectArticle from '@components/Projects/ProjectArticle';
import styled from 'styled-components';

const Projects = () => {
  return (
    <>
      <Notice>
        <span className="icon">📌</span>
        프로젝트를 클릭하면 더 자세한 정보와 배포/깃허브 링크, 시연 영상을
        확인하실 수 있습니다!
      </Notice>
      <ProjectsContainer>
        {projectsData.map((project, index) => (
          <ProjectArticle key={index} project={project} />
        ))}
      </ProjectsContainer>
    </>
  );
};

const Notice = styled.div`
  width: 70rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${(props) => props.theme.colors.titleColor};
  padding: 1rem;
  margin-top: 2rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.titleColor};
  .icon {
    align-self: flex-start;
  }
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const ProjectsContainer = styled.div`
  width: 70rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 3rem 0;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export default Projects;
