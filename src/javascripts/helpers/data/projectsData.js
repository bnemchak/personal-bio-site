import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseCongig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projectObjects = response.data;
      const projects = [];
      if (projectObjects) {
        Object.keys(projectObjects).forEach((projectId) => {
          projectObjects[projectId].id = projectId;
          projects.push(projectObjects[projectId]);
        });
      }
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
