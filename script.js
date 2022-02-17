const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const opacity = 0.6;

img[0].style.opacity = opacity;

imgs.addEventListener("click", imgClick);

function imgClick(e) {
  img.forEach((img) => (img.style.opacity = 1));

  current.src = e.target.src;

  current.classList.add("fade-in");

  setTimeout(() => current.classList.remove("fade-in"), 500);

  e.target.style.opacity = opacity;
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
