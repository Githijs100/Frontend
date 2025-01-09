//Darkmode//

let darkmode = localStorage.getItem('darkmode')
const themaSwitch = document.getElementById('thema-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themaSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()

})

//scroll-animatie//

document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop met observeren zodra zichtbaar
        }
      });
    }, {
      threshold: 0.2 // Element wordt zichtbaar als 10% in beeld is
    });
  
    hiddenElements.forEach(el => observer.observe(el));
  });

//scroll-animatie//

document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.meer-elektrisch-rijden');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop met observeren zodra zichtbaar
        }
      });
    }, {
      threshold: 0.2 // Element wordt zichtbaar als 10% in beeld is
    });
  
    hiddenElements.forEach(el => observer.observe(el));
  });

 
   
  
  

