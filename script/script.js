// JS Scripts
const lightBox = document.createElement("div");
lightBox.id = "lightbox";
document.body.appendChild(lightBox);

const images = document.querySelectorAll(".card-image");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightBox.classList.add("active");
    const img = document.createElement("img");
    while (lightBox.firstChild) {
      lightBox.removeChild(lightBox.firstChild);
    }
    img.src = image.src;
    img.id = "lightbox-image";
    lightBox.appendChild(img);
  });
});

lightBox.addEventListener("click", (e) => {
  if (e.target.tagName !== "IMG") {
    lightBox.classList.remove("active");
  }
});
