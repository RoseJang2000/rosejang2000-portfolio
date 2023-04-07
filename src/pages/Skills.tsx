import { skillsData } from '@assets/skillsData';
import { projectsData } from '@assets/projectsData';
import styled from 'styled-components';

const Skills = () => {
  return (
    <SkillsContainer>
      {skillsData.map((skills, index) => (
        <SkillItemsWrapper key={index}>
          <h1 className="skills-title">{skills.title}</h1>
          <ul className="skills-list">
            {skills.list.map((skill, index) => (
              <li className="skills-item" key={index}>
                <div className="skills-item-icon">
                  <img
                    className="skills-item-icon-img"
                    src={`/svgs/${skill.name
                      .replace(' ', '')
                      .toLowerCase()}.svg`}
                  />
                </div>
                <div className="skills-item-info">
                  <h1 className="skills-item-title">{skill.name}</h1>
                  <p className="skills-item-desc">{skill.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </SkillItemsWrapper>
      ))}
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem 0;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const SkillItemsWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .skills-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .skills-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  .skills-item {
    width: 100%;
    height: 10rem;
    background-color: ${(props) => props.theme.colors.boxColor};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    cursor: default;
  }
  .skills-item-icon {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.pointColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .skills-item-icon-img {
    width: 4rem;
  }
  .skills-item-info {
    width: calc(100% - 8rem);
  }
  .skills-item-desc {
    margin-top: 0.5rem;
  }
  @media screen and (max-width: 992px) {
    .skills-item-title {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 768px) {
    .skills-list {
      grid-template-columns: 1fr;
    }
  }
`;

export default Skills;
