const selectAnimal = document.querySelector("#select-animal");
const showAnimal = document.querySelector("#show-animal");

const dogInputApi = "https://dog.ceo/api/breeds/image/random";
const foxInputApi = "https://randomfox.ca/floof/";
const catInputApi = "https://api.thecatapi.com/v1/images/search?";

// Get picture of random dog
function getDog() {
  fetch(dogInputApi)
    .then((response) => response.json())
    .then((json) => {
      document.querySelector("#image").src = json.message;
    });
}

// Get picture of random fox
function getFox() {
  fetch(foxInputApi)
    .then((response) => response.json())
    .then((json) => {
      document.querySelector("#image").src = json.image;
    });
}

// Get picture of random cat
function getCat() {
  fetch(catInputApi)
    .then((response) => response.json())
    .then((json) => {
      console.log(json[0].url);
      document.querySelector("#image").src = json[0].url;
    });
}
getDog();
