const destinations = document.querySelectorAll(
  ".mainContainerDest__destinations li"
);
const destinationNumber = document.querySelector(
  ".mainContainerDest__destinationNumber"
);
const destinationImage = document.querySelector(
  ".mainContainerDest__wrapper img"
);
const destinationTitle = document.querySelector(
  ".mainContainerDest__content h3"
);
const destinationDescription = document.querySelector(
  ".mainContainerDest__content p"
);
const destinationDistance = document.querySelector(
  ".mainContainerDest__distance span"
);
const destinationTime = document.querySelector(".mainContainerDest__time span");
let dataDest = [];

fetch("../data/destinations.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < destinations.length; i++) {
      dataDest.push(data.destinations[i]);
    }
    for (let i = 0; i < destinations.length; i++) {
      destinations[i].addEventListener("click", () => {
        destinationImage.src = `${dataDest[i].images.png}`;
        destinationTitle.innerText = `${dataDest[i].name}`;
        destinationDescription.innerText = `${dataDest[i].description}`;
        destinationDistance.innerText = `${dataDest[i].distance}`;
        destinationTime.innerText = `${dataDest[i].travel}`;

        animateContentDest();
      });
    }
  });

function animateContentDest() {
  destinationNumber.className = "mainContainerDest__destinationNumber";
  destinationImage.className = "";
  destinationTitle.className = "";
  destinationDescription.className = "";
  destinationDistance.className = "";
  destinationTime.className = "";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      destinationNumber.classList.add("animation");
      destinationImage.classList.add("animation");
      destinationTitle.classList.add("animation");
      destinationDescription.classList.add("animation");
      destinationDistance.classList.add("animation");
      destinationTime.classList.add("animation");
    });
  });
}

destinations.forEach((destination) => {
  destination.addEventListener("click", () => {
    destination.classList.add("active-destination");
  });
});

destinations[0].addEventListener("click", () => {
  destinations[1].classList.remove("active-destination");
  destinations[2].classList.remove("active-destination");
  destinations[3].classList.remove("active-destination");

  destinationNumber.innerText = "01";
});

destinations[1].addEventListener("click", () => {
  destinations[0].classList.remove("active-destination");
  destinations[2].classList.remove("active-destination");
  destinations[3].classList.remove("active-destination");

  destinationNumber.innerText = "02";
});

destinations[2].addEventListener("click", () => {
  destinations[0].classList.remove("active-destination");
  destinations[1].classList.remove("active-destination");
  destinations[3].classList.remove("active-destination");

  destinationNumber.innerText = "03";
});

destinations[3].addEventListener("click", () => {
  destinations[0].classList.remove("active-destination");
  destinations[1].classList.remove("active-destination");
  destinations[2].classList.remove("active-destination");

  destinationNumber.innerText = "04";
});
