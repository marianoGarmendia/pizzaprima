const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const capaMenu = document.querySelector(".menu-flotante-mobile");
const enlaces = document.querySelectorAll("#enlaces-menu-escondido");

function main() {
  openMenu.addEventListener("click", (e) => {
    capaMenu.classList.add("visible");
  });
  closeMenu.addEventListener("click", () => {
    capaMenu.classList.remove("visible");
  });
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      capaMenu.classList.remove("visible");
    });
  });
}

main();
