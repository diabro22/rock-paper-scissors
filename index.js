let wins = 0;
let losses = 0;

function playRound () {
    const userInput = prompt('Rock, paper or scissors?');
    const userChoice = userInput.toLowerCase();
    function computerRandom () {
        const randomNum = Math.floor(Math.random()*3);
        if (randomNum == 0) {
            return 'rock';
        }
        else if (randomNum == 1) {
            return 'paper';
        }
        else {
            return 'scissors';
        }
        }
        const computerChoice = computerRandom().toLowerCase();
        if ((userChoice == 'rock' && computerChoice == 'scissors') ||
        (userChoice == 'paper' && computerChoice == 'rock') ||
        (userChoice == 'scissors' && computerChoice == 'paper')) {
            wins++;
            console.log('You win!');
        }
        else if (userChoice == computerChoice) {
            console.log('It\'s a tie!');
        }
        else {
            losses++;
            console.log('You lose!');
        }
}

function playGame () {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (wins > losses) {
        console.log('You win the game!');
    }
    else if (wins == losses) {
        console.log('Tie game!');
    }
    else {
        console.log('You lose the game...');
    }
}


playGame();