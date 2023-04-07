var pokemonSelectEl = document.querySelector("#pokemon-select");
var typeSelectEl = document.querySelector("#type-select");
var chooseBtnEl = document.querySelector("#choose-btn");
var typeSelectBtn = document.querySelector("#type-btn");

var POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/";

function getStarterUrl() {
  var newURL = POKEAPI_BASE_URL + "pokemon/";
  newURL += pokemonSelectEl.value;
  return newURL;
}

function getTypeUrl() {
  var newURL = POKEAPI_BASE_URL + "type/";
  newURL += typeSelectEl.value;
  return newURL;
}

chooseBtnEl.addEventListener("click", function () {
  var searchUrl = getStarterUrl();
  fetch(searchUrl)
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
