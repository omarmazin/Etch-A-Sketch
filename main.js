document.addEventListener("DOMContentLoaded", function () {
  const rangeSlider = document.getElementById("range-slider");
  const rangeLabel = document.getElementById("range-label");

  rangeSlider.addEventListener("input", function () {
    rangeLabel.innerText = `${rangeSlider.value} X ${rangeSlider.value} `;
  });
  setInterval(function () {
    createBoard(rangeSlider.value);
  }, 1000);

  console.log("Hi there");
});
function createBoard(size) {
  let board = document.querySelector(".customeBorder");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("click", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}
let color = "black";

function colorDiv() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360},100% , 50%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}
function setColor(colorChoice) {
  color = colorChoice;
}
function reset() {
    let divs = document.querySelectorAll('div')
    divs.forEach((div)=>div.style.backgroundColor = "white")
}
