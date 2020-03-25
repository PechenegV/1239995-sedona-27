var link = document.querySelector(".brown-button");

var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");

var exit = document.querySelector(".map");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

