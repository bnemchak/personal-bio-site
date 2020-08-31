import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';

import './projects.scss';

const myProjects = () => {
  projectsData.getProjects()
    .then((response) => {
      const theProjects = response;
      let domString = '';

      theProjects.forEach((project) => {
        if (project.available === true) {
          domString += '<div class="projectsAvailable">';
          domString += '<div class="card">';
          domString += `<h2 class="card-title" id="project-title">${project.title}</h2>`;
          domString += '<div class="card-body">';
          domString += `<img src = ${project.screenshot}>`;
          domString += `<p>${project.description}</p>`;
          domString += `<h5>${project.technologiesUsed}</h5>`;
          domString += `<button class="btn btn-dark" href="${project.url}"><i class="fas fa-tablet-alt"></i></button>`;
          domString += `<button class="btn btn-dark" href="${project.githubUrl}"><i class="fab fa-github"></i><button>`;
          domString += '</div></div>';
        }
      });
      domString += '</div>';
      utils.printToDom('#projectsPage', domString);
    })
    .catch((err) => console.error('broken projects', err));
};

export default { myProjects };
