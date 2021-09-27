const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const x= document.getElementById('container');
const container = document.getElementById('container');

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
  
  
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});



signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
