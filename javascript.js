const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const WIN_LIMIT = 5;
const WIN = "You win!";
const LOSE = "You lose!";
const TIE = "It's a tie!";
let humanScore = 0, computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    return parseInt((Math.random() * 10)) % 3;
}

// function getHumanChoice()
// {
//     let choice;
//     do {
//         choice = Number(prompt("Choose rock (0), paper (1), or scissors (2):"));
//     } while (choice < 0 || choice > 2)
//         return choice;
// }

    function playRound(playerChoice) {
        if (gameOver) return;

        let choices = ["Rock", "Paper", "Scissors"];
        let humanChoice = playerChoice;
        let computerChoice = getComputerChoice();
        let roundChoices = `${choices[humanChoice]} vs. ${choices[computerChoice]}!`;
        // Outcome 1: Both choose same option. Tie.
        if (humanChoice === computerChoice) {
            results.textContent = roundChoices + " " + TIE;
            // return TIE;
        } // Outcome 2: Human choice wins.
        else if (computerChoice === ((humanChoice + 2) % 3)) {
            ++humanScore;
            results.textContent = roundChoices + " " + WIN;
            // return WIN;
        } // Outcome 3: Human choice loses.
        else {
            ++computerScore;
            results.textContent = roundChoices + " " + LOSE;
            // return LOSE;
        }
        scores.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        if (humanScore === WIN_LIMIT || computerScore === WIN_LIMIT) {
            gameOver = true;
            results.textContent = scores.textContent;
            let winner = (humanScore > computerScore)? "Player" : "Computer"
            scores.textContent = `${winner} wins!`;
        }
    }

let main = document.querySelector("main");

let resultsContainer = document.createElement("div");
resultsContainer.classList.add("results-container");
main.appendChild(resultsContainer);

let results = document.createElement("p");
results.classList.add("results");
resultsContainer.appendChild(results);

let scores = document.createElement("p");
scores.classList.add("scores");
resultsContainer.appendChild(scores);




let choiceDiv = document.querySelector(".options");
choiceDiv.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id) {
        case "rock":
            playRound(ROCK);
            break;
        case "paper":
            playRound(PAPER);
            break;
        case "scissors":
            playRound(SCISSORS);
            break;
        default:
            console.log("Unknown");
            break;
    }
});