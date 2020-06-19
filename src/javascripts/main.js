import '../styles/main.scss';

console.error('meeeee');

const projects = [

  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
];

const printToDom = (selector, textToPrint) => {
  console.error('in printToDom', selector, textToPrint);
  const selectedDiv = document.getElementById(selector);
  selectedDiv.innerHTML = textToPrint;
};

const projectsPage = () => {
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
  console.error(domString);
  printToDom('projectsAvailable', domString);
};

const init = () => {
  projectsPage();
};

init();
