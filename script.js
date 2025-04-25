// RDVE devient R-DEV

// === HOMEPAGE ===
const h1 = document.querySelector(".bonjour h1");
const bonjourContainer = document.querySelector(".bonjour");

if (h1 && bonjourContainer) {
  h1.addEventListener("mouseenter", () => {
    bonjourContainer.classList.add("hover-active");
  });
}

// Effet ombre
const nameElements = document.querySelectorAll(".containerhome");
document.addEventListener("mousemove", (e) => {
  nameElements.forEach((target) => {
    const { clientX, clientY } = e;
    const { offsetWidth: width, offsetHeight: height } = target;
    const shadowX = ((clientX / width) - 0.5) * 30;
    const shadowY = ((clientY / height) - 0.5) * 30;
    const blur = 10;
    const color = "rgba(0, 0, 0, 0.3)";
    target.style.textShadow = `${shadowX}px ${shadowY}px ${blur}px ${color}`;
  });
});

//CAROUSEL 
document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".project-name");
  const carousels = document.querySelectorAll(".carousel");
  let currentCarousel = null;

  function showCarousel(id) {
    const next = document.querySelector(`#${id}-carousel`);
    if (!next || currentCarousel === next) return;

    if (currentCarousel) {
      currentCarousel.classList.remove("active");
    }

    next.classList.add("active");
    currentCarousel = next;
  }

  projectItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const id = item.dataset.carousel;
      showCarousel(id);
    });
  });
});
document.querySelectorAll(".carousel").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const images = track.querySelectorAll("img");
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const offset = -currentIndex * 100;
      track.style.transform = `translateX(${offset}%)`;
    };
  
    carousel.querySelector(".carousel-btn.prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });
  
    carousel.querySelector(".carousel-btn.next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
  
    updateCarousel();
  });

  // formulaire envoi de mail 
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch("https://formspree.io/f/xpwdwzwg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          messageBox.textContent = "Message envoyé avec succès !";
          messageBox.style.color = "green";
          form.reset();
        } else {
          messageBox.textContent = "Erreur lors de l'envoi du message.";
          messageBox.style.color = "red";
        }
      } catch (error) {
        messageBox.textContent = "Erreur réseau.";
        messageBox.style.color = "red";
      }
    });
  });
// scrolling responsive 
document.addEventListener("DOMContentLoaded", function () {
  const isResponsive = window.matchMedia("(max-width: 850px)").matches;

  if (isResponsive) {
    document.querySelectorAll(".mes-projets .projets").forEach((el) => {
      el.addEventListener("wheel", (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      });
    });
  }
});
