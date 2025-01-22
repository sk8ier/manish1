// Example dynamic project data
const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: "project1.jpg",
    link: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "project2.jpg",
    link: "#"
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "project3.jpg",
    link: "#"
  }
];

// Render projects dynamically
const projectsContainer = document.getElementById("projects-container");
projects.forEach(project => {
  const projectCard = `
    <div class="col-md-4">
      <div class="card">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.link}" class="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
  `;
  projectsContainer.innerHTML += projectCard;
});
