openButton = document.querySelector(".open-side-menu");
closeButton = document.querySelector(".close-side-menu");
sideMenu = document.querySelector("#side-menu");

function openSideMenu() {
  sideMenu.style.width = "300px";
}

function closeSideMenu() {
  sideMenu.style.width = "0";
}

openButton.addEventListener("click", openSideMenu);
closeButton.addEventListener("click", closeSideMenu);
