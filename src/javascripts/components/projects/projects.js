import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';

const myProjects = () => {
  projectsData.getProjects()
    .then((response) => {
      const theProjects = response;
      let domString = '';

      theProjects.forEach((projects) => {
        if (projects.available === true) {
          domString += '<div class="projectsAvailable">';
          domString += `<h2>${projects.title}</h2>`;
          domString += `<img src = ${projects.screenshot}>`;
          domString += `<p>${projects.description}</p>`;
          domString += `<h3>${projects.technologiesUsed}</h3>`;
          domString += `<h4> <a href="${projects.url}">Site</a></h4>`;
          domString += `<h4> <a href="${projects.githubUrl}">gitHub</a></h4>`;
        }
      });
      domString += '</div>';
      utils.printToDom('#projectsPage', domString);
    })
    .catch((err) => console.error('broken projects', err));
};

export default { myProjects };
