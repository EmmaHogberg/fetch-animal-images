const animalType = document.querySelector("#select-animal");
const showAnimalButton = document.querySelector("#show-animal");
const currentImage = document.querySelector("img");
const favContainer = document.querySelector(".favContainer");

const dogInputApi = "https://dog.ceo/api/breeds/image/random";
const foxInputApi = "https://randomfox.ca/floof/";
const catInputApi = "https://api.thecatapi.com/v1/images/search?";

// Listen to show animal button press
showAnimalButton.addEventListener("click", getAnimalType);

// Get user input on choice of animal type and fetch image
function getAnimalType(element) {
  element = animalType.value;

  switch (element) {
    case "dog":
      getDog();
      break;

    case "fox":
      getFox();
      break;

    case "cat":
      getCat();
      break;

    default:
      animalType.className = "select-box error";
  }
}

// Remove error after drop-down change
animalType.addEventListener("change", () => {
  if (animalType.value !== "select") {
    animalType.className = "select-box";
  }
});

// Get picture of random dog
function getDog() {
  fetch(dogInputApi)
    .then((response) => response.json())
    .then((json) => {
      currentImage.src = json.message;
      // document.querySelector("img").id = "image";
    });
}

// Get picture of random fox
function getFox() {
  fetch(foxInputApi)
    .then((response) => response.json())
    .then((json) => {
      currentImage.src = json.image;
      // document.querySelector("img").id = "image";
    });
}

// Get picture of random cat
function getCat() {
  fetch(catInputApi)
    .then((response) => response.json())
    .then((json) => {
      console.log(json[0].url);
      currentImage.src = json[0].url;
      // document.querySelector("img").id = "image";
    });
}

// Listen to click on current animal image
currentImage.addEventListener("click", saveAnimal);

// Save current animal image to favorie
function saveAnimal() {
  const newImage = document.createElement("img");
  newImage.src = currentImage.src;

  const newDiv = document.createElement("div");
  newDiv.className = "favItem";
  newDiv.appendChild(newImage);

  favContainer.appendChild(newDiv);
}
