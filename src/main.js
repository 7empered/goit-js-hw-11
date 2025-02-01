import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery, clearGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const loader = document.querySelector(".loader");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = form.querySelector("input").value.trim();
  if (!query) {
    iziToast.warning({ title: "Warning", message: "Please enter a search term" });
    return;
  }
  
  clearGallery();
  loader.style.display = "block";
  
  fetchImages(query).then((images) => {
    loader.style.display = "none";
    renderGallery(images);
  });
});