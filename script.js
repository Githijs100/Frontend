//Darkmode//
let darkmode = localStorage.getItem('darkmode');
const themaSwitch = document.getElementById('thema-switch');
const root = localStorage.getItem('root') || 'default'; // Zorg ervoor dat root standaard 'default' is

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};

// Zorg ervoor dat root standaard actief is (lichte modus)
if (!darkmode || darkmode === 'null') {
    disableDarkmode();
}

// Controleer of darkmode al actief is
if (darkmode === 'active') {
    enableDarkmode();
}

// Voeg een eventlistener toe aan de switch-knop
themaSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});


//scroll-animatie (codepen.io)// 

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
      threshold: 0.5 // Element wordt zichtbaar als 10% in beeld is
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
      threshold: 0.5 // Element wordt zichtbaar als 10% in beeld is
    });
  
    hiddenElements.forEach(el => observer.observe(el));
  });

  document.addEventListener("DOMContentLoaded", function () {
    const feedbackImage = document.getElementById("feedbackImage");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("closeButton");
    const overlay = document.createElement("div");

    overlay.id = "overlay";
    document.body.appendChild(overlay);

    feedbackImage.addEventListener("click", function () {
        modal.classList.add("open");
        overlay.classList.add("active");
    });

    closeButton.addEventListener("click", function () {
        modal.classList.remove("open");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function () {
        modal.classList.remove("open");
        overlay.classList.remove("active");
    });
});



 
   
  
  

