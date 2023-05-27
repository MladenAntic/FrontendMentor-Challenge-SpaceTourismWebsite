const crewMemberNum = document.querySelector(
  ".mainContainerCrew__crewMemberNum"
);
const crewButtons = document.querySelectorAll(".mainContainerCrew__slider div");
const crewPosition = document.querySelector(".mainContainerCrew__position");
const crewName = document.querySelector(".mainContainerCrew__name");
const crewDescription = document.querySelector(
  ".mainContainerCrew__description"
);
const crewImage = document.getElementById("crewMemberImg");

import data from "../data/crew.json" assert { type: "json" };

for (let i = 0; i < crewButtons.length; i++) {
  crewButtons[i].addEventListener("click", () => {
    crewPosition.innerText = `${data.crew[i].role}`;
    crewName.innerText = `${data.crew[i].name}`;
    crewDescription.innerText = `${data.crew[i].bio}`;
    crewImage.src = `${data.crew[i].images.png}`;

    animateContentCrew();
  });
}

function animateContentCrew() {
  crewImage.className = "";
  crewMemberNum.className = "mainContainerCrew__crewMemberNum";
  crewPosition.className = "mainContainerCrew__position";
  crewName.className = "mainContainerCrew__name";
  crewDescription.className = "mainContainerCrew__description";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      crewImage.classList.add("animation");
      crewMemberNum.classList.add("animation");
      crewPosition.classList.add("animation");
      crewName.classList.add("animation");
      crewDescription.classList.add("animation");
    });
  });
}

crewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("active-crew");
  });
});

crewButtons[0].addEventListener("click", () => {
  crewButtons[1].classList.remove("active-crew");
  crewButtons[2].classList.remove("active-crew");
  crewButtons[3].classList.remove("active-crew");

  crewMemberNum.innerText = "01";
});

crewButtons[1].addEventListener("click", () => {
  crewButtons[0].classList.remove("active-crew");
  crewButtons[2].classList.remove("active-crew");
  crewButtons[3].classList.remove("active-crew");

  crewMemberNum.innerText = "02";
});

crewButtons[2].addEventListener("click", () => {
  crewButtons[0].classList.remove("active-crew");
  crewButtons[1].classList.remove("active-crew");
  crewButtons[3].classList.remove("active-crew");

  crewMemberNum.innerText = "03";
});

crewButtons[3].addEventListener("click", () => {
  crewButtons[0].classList.remove("active-crew");
  crewButtons[1].classList.remove("active-crew");
  crewButtons[2].classList.remove("active-crew");

  crewMemberNum.innerText = "04";
});
