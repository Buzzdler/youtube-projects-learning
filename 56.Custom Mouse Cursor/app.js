let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(event) {
  let x = event.clientX;
  let y = event.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;

  outerCursor.style.left = `${x}px`
  outerCursor.style.top = `${y}px`
}
