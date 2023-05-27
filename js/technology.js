const steps = document.querySelectorAll(".mainContainerTech__steps div");
const technologyName = document.querySelector(".mainContainerTech__name");
const technologyDescription = document.querySelector(
  ".mainContainerTech__description"
);
const technologyImage = document.getElementById("technologyImg");
let dataTech = [];

function changeFirstImg() {
  if (window.innerWidth <= 992) {
    technologyImage.src =
      "../assets/technology/image-launch-vehicle-landscape.jpg";
  } else {
    technologyImage.src =
      "../assets/technology/image-launch-vehicle-portrait.jpg";
  }
}

changeFirstImg();

window.addEventListener("resize", changeFirstImg);

fetch("../data/technology.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < steps.length; i++) {
      dataTech.push(data.technology[i]);
    }
    for (let i = 0; i < steps.length; i++) {
      function changeImg() {
        if (window.innerWidth <= 992) {
          technologyImage.src = `${dataTech[i].images.landscape}`;
        } else if (window.innerWidth > 992) {
          technologyImage.src = `${dataTech[i].images.portrait}`;
        }
      }
      steps[i].addEventListener("click", () => {
        technologyName.innerText = `${dataTech[i].name}`;
        technologyDescription.innerText = `${dataTech[i].description}`;

        changeImg();
        window.addEventListener("resize", changeImg);

        animateContentTech();
      });
    }
  });

function animateContentTech() {
  technologyName.className = "mainContainerTech__name";
  technologyDescription.className = "mainContainerTech__description";
  technologyImage.className = "";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      technologyName.classList.add("animation");
      technologyDescription.classList.add("animation");
      technologyImage.classList.add("animation");
    });
  });
}

steps.forEach((step) => {
  step.addEventListener("click", () => {
    step.classList.add("active-technology");
  });
});

steps[0].addEventListener("click", () => {
  steps[1].classList.remove("active-technology");
  steps[2].classList.remove("active-technology");
  steps[3].classList.remove("active-technology");
});

steps[1].addEventListener("click", () => {
  steps[0].classList.remove("active-technology");
  steps[2].classList.remove("active-technology");
  steps[3].classList.remove("active-technology");
});

steps[2].addEventListener("click", () => {
  steps[0].classList.remove("active-technology");
  steps[1].classList.remove("active-technology");
  steps[3].classList.remove("active-technology");
});
