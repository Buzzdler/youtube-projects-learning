const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    number = btn.value;
    changeBackground(number);
  });
});

const body = document.body;

function changeBackground(number) {
  body.className = "";
  switch (number) {
    case "CornflowerBlue":
      body.classList.add("CornflowerBlue");
      break;
    case "Chartreuse":
      body.classList.add("Chartreuse");
      break;
    case "DodgerBlue":
      body.classList.add("DodgerBlue");
      break;
    case "DarkSlateBlue":
      body.classList.add("DarkSlateBlue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "Turquoise":
      body.classList.add("Turquoise");
      break;
    default:
      breack;
  }
}
