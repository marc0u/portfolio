const scrollHandler = () => {
  const home = document.querySelector("#home");
  const skills = document.querySelector("#skills");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");
  let posHome = window.scrollY + home.offsetHeight;
  let posSkills = skills.offsetTop + skills.offsetHeight;
  let posProjects = projects.offsetTop + projects.offsetHeight;
  let posContact = contact.offsetTop + contact.offsetHeight;
  console.log(posHome, posSkills, posProjects, posContact);
};

window.addEventListener("scroll", scrollHandler);
