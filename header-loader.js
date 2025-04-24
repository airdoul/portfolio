document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("header-container").innerHTML = data;

        setTimeout(() => {
          const script = document.createElement("script");
          script.src = "menu.js";
          document.body.appendChild(script);
        }, 1);
      });
  });
  