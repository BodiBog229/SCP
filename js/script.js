// Меню
const ikonMenu = document.querySelector(".ikon-menu");
const menuBody = document.querySelector(".menu-body");

if (ikonMenu) {
  ikonMenu.addEventListener("click", function (e) {
    ikonMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}
