var burgerMenu = document.getElementById("burgerMenu");
var menu = document.getElementById("menu");

function openMenu(){

  menu.classList.remove("nav-none");
  menu.classList.add("nav-block");

  //burgerMenu.classList.remove("nav-block");
  burgerMenu.classList.add("nav-none");
}

function closeMenu(){

  menu.classList.remove("nav-block");
  menu.classList.add("nav-none");

  burgerMenu.classList.remove("nav-none");
  //sburgerMenu.classList.add("nav-block");
}

burgerMenu.addEventListener("click", openMenu,false);
menu.addEventListener("click", closeMenu,false);