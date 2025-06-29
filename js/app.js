/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];


/*-------------------------------- Variables --------------------------------*/
let msg;
let playerChoice;
let computerChoice;


/*------------------------ Cached Element References ------------------------*/
const rockBtnEl = document.querySelector("#rock");
const paperBtnEl = document.querySelector("paper");
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
function play() {
    computerChoice = getcomputerChoice();
    console.log(computerChoice);
    // after updating state, render to html
    render()
}
// update the html
function render() {
    resultDisplayEl.textContent =`Computer Chose ${computerChoice}`;
}


/*----------------------------- Event Listeners -----------------------------*/

rockBtnEl.addEventListener('click', play); 
// test() because if i added them it will run right away
paperBtnEl.addEventListener('click', play);
scissorsBtnEl.addEventListener('click', play);