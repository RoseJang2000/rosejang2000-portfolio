import projects from '@assets/projects.json';

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
  dev: {
    start?: string;
    end?: string;
    period?: string;
  };
  stack: string[];
}

interface Link {
  name: string;
  url: string;
}

const Projects = () => {
  const projectData: Project[] = projects;
  return <div>Projects</div>;
};

export default Projects;
