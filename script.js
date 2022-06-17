const search = document.querySelector(".search");
const searchButton = document.querySelector(".search-button");
const inputSearch = document.querySelector(".input-search");

searchButton.addEventListener("click", () => {
  search.classList.toggle("active");
  inputSearch.focus();
});
