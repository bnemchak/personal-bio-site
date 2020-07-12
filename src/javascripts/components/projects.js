import utils from '../helpers/utils';
import projects from '../helpers/data/projectsData';

const myProjects = () => {
  let domString = '';

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      domString += '<div class="projectsAvailable">';
      domString += `<h2>${projects[i].title}</h2>`;
      domString += `<img src = ${projects[i].screenshot}>`;
      domString += `<p>${projects[i].description}</p>`;
      domString += `<h3>${projects[i].technologiesUsed}</h3>`;
      domString += `<h4> <a href="${projects[i].url}">Site</a></h4>`;
      domString += `<h4> <a href="${projects[i].githubUrl}">gitHub</a></h4>`;
      domString += '</div>';
    }
  }
  utils.printToDom('#projectsPage', domString);
};

export default { myProjects };
