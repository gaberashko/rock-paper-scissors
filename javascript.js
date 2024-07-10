function getComputerChoice() {
    return parseInt((Math.random() * 10)) % 3;
}

function getHumanChoice()
{
    let choice;
    do {
        choice = Number(prompt("Choose rock (0), paper (1), or scissors (2):"));
    } while (choice < 0 || choice > 2)
        return choice;
}

function playGame() {
    const WIN = "You win!";
    const LOSE = "You lose!";
    const TIE = "It's a tie!";
    let choices = ["Rock", "Paper", "Scissors"];
    let humanScore = 0, computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundChoices = `${choices[humanChoice]} vs. ${choices[computerChoice]}!`;
        // Outcome 1: Both choose same option. Tie.
        if (humanChoice === computerChoice) {
            console.log(roundChoices + " " + TIE);
            return TIE;
        } // Outcome 2: Human choice wins.
        else if (computerChoice === ((humanChoice + 2) % 3)) {
            console.log(roundChoices + " " + WIN);
            return WIN;
        } // Outcome 3: Human choice loses.
        else {
            console.log(roundChoices + " " + LOSE);
            return LOSE;
        }
    }
    for (let i = 0; i < 5; ++i) {
        let outcome = playRound();
        switch(outcome) {
            case TIE:
                break;
            case WIN:
                ++humanScore;
                break;
            case LOSE:
                ++computerScore;
        }
    }
    console.log(`Results: Human - ${humanScore} | Computer - ${computerScore}.`);
}

playGame();