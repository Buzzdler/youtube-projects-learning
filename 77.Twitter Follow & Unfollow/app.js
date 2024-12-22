let body = document.body;
let themer = document.querySelector(".themer");
const followByttons = document.querySelectorAll(".follow-button");

themer.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    themer.innerText = "Light";
  } else {
    body.className = "light-theme";
    themer.innerText = "Dark";
  }
}

followByttons.forEach((btn) => {
  btn.addEventListener("click", (e) => followUnFollow(e.target));
});

function followUnFollow(button) {
  button.classList.toggle("followed");
  if (button.innerText == "Follow") {
    button.innerText = "unfollow";
  } else {
    button.innerText = "Follow";
  }
}
