// const menu = document.querySelector('.navbar-menu');
// document.getElementById("scrollspy-nav").style.display = "none";
// const buttonmenu = document.querySelector('.button-menu');

// function showMenu(){
//   document.getElementById("scrollspy-nav").style.display = "block";
// }

// function closeMenu(){
//   document.getElementById("scrollspy-nav").style.display = "none";
// }

// buttonmenu.addEventListener('click', showMenu);


function myFunction() {
  var x = document.getElementById("scrollspy-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
