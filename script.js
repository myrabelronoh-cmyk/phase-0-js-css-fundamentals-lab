const skills = ["HTML", "CSS", "JavaScript", "Git", "Responsive design"];

const projects = [
  {
    title: "Personal Portfolio",
    description: "A single-page portfolio bringing together an introduction, skills, selected work, and contact details.",
    tech: "HTML · CSS · JavaScript",
    number: "01"
  },
  {
    title: "Product Inventory",
    description: "A small JavaScript exercise for keeping a product list organized with add, update, and remove actions.",
    tech: "JavaScript · Arrays · Functions",
    number: "02"
  }
];

const skillsList = document.querySelector("#skills-list");
const projectsGrid = document.querySelector("#projects-grid");

for (const skill of skills) {
  const item = document.createElement("li");
  item.textContent = skill;
  skillsList.append(item);
}

for (const project of projects) {
  const card = document.createElement("article");
  card.className = "project-card";

  const number = document.createElement("p");
  number.className = "project-number";
  number.textContent = `PROJECT / ${project.number}`;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const tech = document.createElement("p");
  tech.className = "project-tech";
  tech.textContent = project.tech;

  card.append(number, title, description, tech);
  projectsGrid.append(card);
}