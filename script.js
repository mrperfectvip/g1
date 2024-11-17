let buttons = document.querySelectorAll("button");
let user = document.querySelector("#user");
let compchoice = document.querySelector("#computer");
let resultDisplay = document.querySelector("#result");

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    user.innerHTML = e.target.innerText;
    user.style.color = "purple";
    computerchoice();
    res();
  })
);

function computerchoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice == 1) {
    choice = "Rock";
  }
  if (choice == 2) {
    choice = "Paper";
  }
  if (choice == 3) {
    choice = "Scissor";
  }
  compchoice.innerHTML = choice;
  compchoice.style.color = "royalblue";
}

function res() {
  if (compchoice.innerHTML == user.innerHTML) {
   resultDisplay.innerHTML = "Draw!";
   resultDisplay.style.color = "brown";
  }
  else if (compchoice.innerHTML == "Paper" && user.innerHTML == "Rock") {
    resultDisplay.innerHTML = "You Won!";
    resultDisplay.style.color = "green";
  }
  else if (compchoice.innerHTML == "Paper" && user.innerHTML == "Scissor") {
    resultDisplay.innerHTML = "You Won!";
    resultDisplay.style.color = "green";
  }
  else if (compchoice.innerHTML == "Rock" && user.innerHTML == "Scissor") {
    resultDisplay.innerHTML = "You Loss";
    resultDisplay.style.color = "red";
  }
  else if (compchoice.innerHTML == "Scissor" && user.innerHTML == "Rock") {
    resultDisplay.innerHTML = "You Won!";
    resultDisplay.style.color = "green";
  }
  else if (compchoice.innerHTML == "Rock" && user.innerHTML == "Paper") {
   resultDisplay.innerHTML = "You Loss!";
   resultDisplay.style.color = "red";
  }
  else if (compchoice.innerHTML == "Scissor" && user.innerHTML == "Paper") {
   resultDisplay.innerHTML = "You Loss!";
   resultDisplay.style.color = "red";
  }
}

let credit = document.querySelector('.credit').append("Dev with '♥'\n by Kishan");