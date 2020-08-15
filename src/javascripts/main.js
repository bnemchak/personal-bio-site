import navbar from './components/navbar/navbar';
import projects from './components/projects/projects';

import '../styles/main.scss';

const init = () => {
  navbar.createNavBar();
  projects.myProjects();
};

init();
