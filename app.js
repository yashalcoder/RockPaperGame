let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let userID = document.querySelector("#user");
let compID = document.querySelector("#comp");
let msgDiv = document.querySelector(".msg");
//compuuter choice randomnly
const compChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const indx = Math.floor(Math.random() * 3);
  return options[indx];
};
const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin === true) {
    console.log(`User Wins ${userChoice} beats ${computerChoice}`);
    userScore++;
    userID.textContent = userScore;
    msgDiv.textContent = `User Wins ${userChoice} beats ${computerChoice}`;
    msgDiv.style.backgroundColor = "green";
  } else {
    console.log(`computer Wins ${computerChoice} beats ${userChoice}`);
    compScore++;
    compID.textContent = compScore;
    msgDiv.textContent = `computer Wins ${computerChoice} beats ${userChoice}`;
    msgDiv.style.backgroundColor = "red";
  }
};
//User choice
const playgame = (choice) => {
  console.log("userchoice: ", choice);
  const computerChoice = compChoice();
  console.log("computer: ", computerChoice);

  if (choice === computerChoice) {
    console.log("game draw");
    msgDiv.textContent = "Game Draw";
    msgDiv.style.backgroundColor = "black";
  } else {
    userWin = true;
    if (choice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (choice === "scissors") {
      userWin = computerChoice === "rock" ? false : true;
    } else {
      userWin = computerChoice === "scissors" ? false : true;
    }
    showWinner(userWin, choice, computerChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
