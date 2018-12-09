openButton = document.querySelector(".open-side-menu");
closeButton = document.querySelector(".close-side-menu");

function openSideMenu() {
  document.querySelector("#side-menu").style.width = "300px";
}

function closeSideMenu() {
  document.querySelector("#side-menu").style.width = "0";
}

openButton.addEventListener("click", openSideMenu);
closeButton.addEventListener("click", closeSideMenu);
