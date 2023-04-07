import { Project } from '@assets/projectsData';
import styled from 'styled-components';

interface ProjectModalProps {
  project: Project;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectModal = ({ project, setIsShowModal }: ProjectModalProps) => {
  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <ModalBackground onClick={handleCloseModal}></ModalBackground>
      <ModalContainer>
        <LeftSection></LeftSection>
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
  padding: 0.5rem;
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
`;

const RightSection = styled.section`
  width: 100%;
  height: 100%;
`;
export default ProjectModal;
