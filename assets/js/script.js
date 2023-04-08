var pokemonSelectEl = document.querySelector("#pokemon-select");
var typeSelectEl = document.querySelector("#type-select");
var chooseBtnEl = document.querySelector("#choose-btn");
var typeSelectBtn = document.querySelector("#type-btn");

var POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/";

function getStarterUrl(pokemonName) {
  var newURL = POKEAPI_BASE_URL + "pokemon/";
  newURL += pokemonName;
  return newURL;
}

function getTypeUrl() {
  var newURL = POKEAPI_BASE_URL + "type/";
  newURL += typeSelectEl.value;
  return newURL;
}

function savePokemonToLocalStorage(pokemonName) {
  var savedPokemon = JSON.parse(localStorage.getItem("pokemon")) || [];
  savedPokemon.push(pokemonName);
  localStorage.setItem("pokemon", JSON.stringify(savedPokemon));
}

function transformPokemon(pokemonArray) {
  var newURL = getStarterUrl(pokemonArray[0]);
  return newURL;
}

console.log('something')
chooseBtnEl.addEventListener("click", function () {
  var pokemonChoice = pokemonSelectEl.value;
  savePokemonToLocalStorage(pokemonChoice);
  var savedPokemon = JSON.parse(localStorage.getItem("pokemon"));
  var searchURL = transformPokemon(savedPokemon);

  fetch(searchURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});

typeSelectBtn.addEventListener("click", function () {
  var searchUrl = getTypeUrl();
  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
