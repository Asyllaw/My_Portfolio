document.addEventListener("DOMContentLoaded", () => {
  const aboutInput = document.getElementById("aboutInput");
  const saveAbout = document.getElementById("saveAbout");
  const projectTitle = document.getElementById("projectTitle");
  const projectDescription = document.getElementById("projectDescription");
  const addProject = document.getElementById("addProject");
  const savedProjects = document.getElementById("savedProjects");

  // Load saved content if available
  aboutInput.value = localStorage.getItem("aboutContent") || "";

  // Save About section
  saveAbout.addEventListener("click", () => {
    localStorage.setItem("aboutContent", aboutInput.value);
    alert("About section updated!");
  });

  // Load existing projects
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  displayProjects(projects);

  // Add new project
  addProject.addEventListener("click", () => {
    if (!projectTitle.value.trim() || !projectDescription.value.trim()) {
      alert("Please fill in both fields.");
      return;
    }
    const newProject = {
      title: projectTitle.value.trim(),
      description: projectDescription.value.trim()
    };
    projects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(projects));
    displayProjects(projects);
    projectTitle.value = "";
    projectDescription.value = "";
    alert("Project Successfully added!");
  });

  // Display projects
  function displayProjects(list) {
    savedProjects.innerHTML = "";
    list.forEach((p, index) => {
      const div = document.createElement("div");
      div.classList.add("project-item");
      div.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <button onclick="deleteProject(${index})">Delete</button>
      `;
      savedProjects.appendChild(div);
    });
  }

  // Make delete function accessible globally
  window.deleteProject = function(index) {
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    displayProjects(projects);
  };
});
