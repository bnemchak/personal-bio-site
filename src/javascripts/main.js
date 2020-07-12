import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import projectsData from './helpers/data/projectsData';
import utils from './helpers/utils';

import 'bootstrap';
import '../styles/main.scss';

const createProjects = () => {
  projectsData.getProjects()
    .then((projects) => {
      let domString = '<header>Projects</header>';
      projects.forEach((project) => {
        if (project.available === true) {
          domString += '<div class="projectsPage">';
          domString += `<h2>${project.title}</h2>`;
          domString += `<img src="${project.screenshot}" alt = "screenshot">`;
          domString += `<h3>${project.description}</h3>`;
          domString += `<p>Technologies used: ${project.technologiesUsed}</p>`;
          domString += `<h4><a href="${project.url}">URL</a></h4>`;
          domString += `<h4><a href="${project.githubUrl}">GitHub URL</a></h4>`;
          domString += '</div>';
        }
      });

      utils.printToDom('#projectsPage', domString);
    })
    .catch((err) => console.error('not working', err));
};

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  createProjects();
};

init();
