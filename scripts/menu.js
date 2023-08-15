const scrollHandlerMenu = () => {
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const skills = document.querySelector("#skills");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");
  const posHome = home.offsetTop + home.offsetHeight;
  const posAbout = about.offsetTop + about.offsetHeight;
  const posSkills = skills.offsetTop + skills.offsetHeight;
  const posProjects = projects.offsetTop + projects.offsetHeight;
  const posContact = contact.offsetTop + contact.offsetHeight;
  const pos = window.scrollY + posHome;
  switch (true) {
    case pos <= posHome: // home
      document.getElementById("menu-bar").style.right = "-5rem";
      menuClose();
      break;
    case pos > posHome && pos <= posAbout: // about
      document.getElementById("menu-bar").style.right = "0";
      break;
    case pos > posAbout && pos <= posSkills: // skills
      break;
    case pos > posSkills && pos <= posProjects: // projects
      break;
    case pos > posProjects && pos <= posContact: // contact
      document.getElementById("menu-bar").style.right = "0";
      break;
    default: // footer
      document.getElementById("menu-bar").style.right = "-5rem";
      menuClose();
      break;
  }
};

function menuClose() {
  document.getElementById("menu-bar").classList.remove("change");
  document.getElementById("nav").classList.remove("change");
  document.getElementById("menu-bg").classList.remove("change-bg");
}

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

window.addEventListener("scroll", scrollHandlerMenu);
