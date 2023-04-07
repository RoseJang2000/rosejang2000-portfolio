import styled from 'styled-components';
import { Project } from '@assets/projectsData';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface ProjectArticleProps {
  project: Project;
}

const ProjectArticle = ({ project }: ProjectArticleProps) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const imageSrc = project.title.split(' ').slice(1).join('').toLowerCase();

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  return (
    <>
      {isShowModal && (
        <ProjectModal
          project={project}
          imageSrc={imageSrc}
          setIsShowModal={setIsShowModal}
        />
      )}
      <ArticleWrapper onClick={handleOpenModal}>
        <div className="project-hover">
          이 프로젝트
          <br />
          자세히 보기
        </div>
        <div className="project-thumbnail">
          <picture className="project-thumbnail-img">
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
        </div>
        <div className={`project-type ${project.team ? 'team' : 'solo'}`}>
          {project.team ? '팀 프로젝트' : '개인 프로젝트'}
        </div>
        <section className="project-info">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-desc">{project.desc}</p>
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
        </section>
      </ArticleWrapper>
    </>
  );
};

const ArticleWrapper = styled.article`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.boxColor};
  border: 1px solid ${(props) => props.theme.colors.lineColor};
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: translateY(-0.5rem);
    .project-thumbnail-img {
      transform: scale(1.1);
    }
    .project-hover {
      opacity: 1;
    }
  }
  .project-hover {
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;
    transition: 0.3s;
    opacity: 0;
  }
  .project-thumbnail {
    width: 100%;
    height: 10rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-thumbnail-img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s;
    }
  }
  .project-type {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 800;
  }
  .team {
    background-color: #d05858;
  }
  .solo {
    background-color: #3e9dc3;
  }
  .project-info {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ProjectStacks = styled.ul`
  width: 100%;
  .project-stack-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
    width: 100%;
  }
  .project-stack-item {
    background-color: ${(props) => props.theme.colors.pointColor};
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.2rem 0.4rem;
    font-size: 0.9rem;
  }
`;

export default ProjectArticle;
