const upload = document.querySelector("input");
const image = document.querySelector(".img img");
const close = document.querySelector(".icon .close");

upload.addEventListener("change", (event) => {
  uploadFile(event);
});

function uploadFile(event) {
  image.classList.add("active");
  close.classList.add("active");

  image.src = URL.createObjectURL(event.target.files[0]);

  close.addEventListener("click", () => {
    image.classList.remove("active");
    close.classList.remove("active");
  });
}