     /*user inputs rock, paper or scissors*/
    /*generate random choice for rock, paper or scissors*/
    /*if user input is rock and computer input is scissors, display message 'you win'*/
    /*if user input is rock and computer input is rock, display message 'it's a tie'*/
    /*if user input is rock and computer input is paper, display message 'you lose'*/
    /*if user input is paper and computer input is rock, display message 'you win'*/
    /*if user input is paper and computer input is paper, display message 'it's a tie'*/
    /*if user input is paper and computer input is scissors, display message 'you lose'*/
    /*if user input is scissors and computer input is paper, display message 'you win'*/
    /*if user input is scissors and computer input is scissors, dispay message 'it's a tie'*/
    /*if user input is scissors and computer input is rock, display message 'you win'*/

    /*Define Functions*/
    
    function getComputerChoice () {
        const gameArray = ['Rock', 'Paper', 'Scissors'];

        const random = Math.floor(Math.random() * gameArray.length);
        return (random, gameArray[random]);
    }

    const playerSelection = 'Rock';
    const computerSelection = getComputerChoice();

    function playRound (playerSelection, computerSelection) {
        if ((playerSelection == 'rock' && computerSelection =='scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper'))
            {console.log('You Win!')}
        else {console.log('Placeholder')};
    }

    /*Execution*/
    getComputerChoice();
    console.log(playerSelection);


    /*Bugs:
        getComputerChoice returns string # along with accompanying text*/

    /*Updates for build:
        Make user and computer input case insensitive
        */