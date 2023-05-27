const navigation = document.querySelector(".header__navigation");
const navLinks = document.querySelectorAll(".header__navigation ul li");
const toggleMenu = document.getElementById("menu-btn");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active");
  });
});

navLinks[0].addEventListener("click", () => {
  navLinks[1].classList.remove("active");
  navLinks[2].classList.remove("active");
  navLinks[3].classList.remove("active");
});

navLinks[1].addEventListener("click", () => {
  navLinks[0].classList.remove("active");
  navLinks[2].classList.remove("active");
  navLinks[3].classList.remove("active");
});

navLinks[2].addEventListener("click", () => {
  navLinks[0].classList.remove("active");
  navLinks[1].classList.remove("active");
  navLinks[3].classList.remove("active");
});

navLinks[3].addEventListener("click", () => {
  navLinks[0].classList.remove("active");
  navLinks[1].classList.remove("active");
  navLinks[2].classList.remove("active");
});

toggleMenu.addEventListener("click", () => {
  navigation.classList.toggle("show-mobile-nav");
  toggleMenu.classList.toggle("clicked");

  toggleMenu.classList.toggle("open");
});
