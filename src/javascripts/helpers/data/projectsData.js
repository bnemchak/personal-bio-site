import Axios from 'axios';
import apikeys from '../apiKeys.json';

const baseUrl = apikeys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projectObj = response.data;
      const projects = [];
      if (projectObj) {
        Object.keys(projectObj).forEach((projectId) => {
          projectObj[projectId].id = projectId;
          projects.push(projectObj[projectId]);
        });
      }
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
