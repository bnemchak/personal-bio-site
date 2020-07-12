import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import projectsData from './helpers/utils';
import utils from './helpers/utils';

import'bootstrap';
import '../styles/main.scss';

const createProjects = () => {
  projectsData.getProjects()
    .then((projects) => {
      let domString = '<header>Projects</header>';
      projects.forEach((project) => {
        if (project.available === true) {
          domString += '<div class="projectsPage">';
          domString +=
        }
      })
    })
}
