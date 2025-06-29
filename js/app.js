/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];


/*-------------------------------- Variables --------------------------------*/
let msg;
let playerChoice;
let computerChoice;


/*------------------------ Cached Element References ------------------------*/
const rockBtnEl = document.querySelector("#rock");
const paperBtnEl = document.querySelector("#paper");
const scissorsBtnEl = document.querySelector("#scissors");
const resultDisplayEl = document.querySelector("#result-display");



/*-------------------------------- Functions --------------------------------*/

function getcomputerChoice() {
    // generate a random number 0-2
    const randomIndex = Math.floor(Math.random() * choices.length);
    // selecte the item from the array
    return choices[randomIndex];
}


// initialize game state
function play(event) {
    computerChoice = getcomputerChoice();
    playerChoice = event.target.id;
    compare();
    // after updating state, render to html
    render()
}
// update the html
function render() {
    resultDisplayEl.textContent =`Computer Chose ${computerChoice} and you chose ${playerChoice}. ${msg}`;
}

function compare() {
    // Compare player choice and computer choice
    if (playerChoice === computerChoice) {
        msg = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        msg = 'You win!';
    } else {
        msg = 'You lose!';
    }
}






/*----------------------------- Event Listeners -----------------------------*/


// test() because if i added them it will run right away
rockBtnEl.addEventListener('click', play); 
paperBtnEl.addEventListener('click', play);
scissorsBtnEl.addEventListener('click', play);