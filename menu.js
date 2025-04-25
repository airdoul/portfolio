function initMenu() {
  console.log("initMenu called !");
  const menuBtn = document.querySelector(".menu-btn");
  const menuContainer = document.querySelector(".menu-container");
  const menuIcon = document.querySelector(".menu-icon");
  const carouselZone = document.querySelector(".carousel-zone");

  let menuOpen = false;

  if (menuBtn && menuContainer && menuIcon) {
    console.log({ menuBtn, menuContainer, menuIcon });

    menuBtn.addEventListener("click", () => {
      menuOpen = !menuOpen;
      menuContainer.classList.toggle("active");

      menuIcon.src = menuOpen
        ? "assets/img/close.svg"
        : "assets/img/grip-solid.svg";

    carouselZone.classList.toggle("hidden", menuOpen);

      console.log("Menu clicked, now open:", menuOpen);
    });
  } else {
    console.warn("Menu non initialisé : éléments manquants.");
  }
}

initMenu();

