'strict'
let PLAYER_CHOICE = -1;
let EXIT = 0;



// -------------------- GAME LOGIC ---------------------- //
const compChoice = () => {
    return Math.trunc(Math.random()*3) + 1;
};


// const gameRun = () => {
//     const pNumChoice = prompt('Rock Paper or Scissors (1,2,3)');
//     const cNumChoice = compChoice();

//     const gameDict = {
//         1: 'Rock',
//         2: 'Paper',
//         3: 'Scissors',
//         11: 'Tied',
//         12: 'Lost',
//         13: 'Won',
//         21: 'Won',
//         22: 'Tied',
//         23: 'Lost',
//         31: 'Lost',
//         32: 'Won',
//         33: 'Tied'
//     };

//     const playerChoice = gameDict[pNumChoice];
//     const cChoice = gameDict[cNumChoice];
//     const result = gameDict[`${pNumChoice}${cNumChoice}`];

//     switch (playerChoice) {
//         case gameDict[1]:
//             console.log(`You chose ${playerChoice}, He chose ${cChoice} and you ${result}`);
            
//             break;
//         case gameDict[2]:
//             console.log(`You chose ${playerChoice}, He chose ${cChoice} and you ${result}`);
//             break;
//         case gameDict[3]:
//             console.log(`You chose ${playerChoice}, He chose ${cChoice} and you ${result}`);
//             break;   
//     }
//     quit.addEventListener('click', e => {
//         e.preventDefault();
//         QUIT = 1;
//     })
// }

// gameRun();

// ---------- DOM Manipulation -------- //

    const resDict = {
        11: 'Tied',
        12: 'Lost',
        13: 'Won',
        21: 'Won',
        22: 'Tied',
        23: 'Lost',
        31: 'Lost',
        32: 'Won',
        33: 'Tied'
    };

const rButton = document.querySelector('.rock-button');
const pButton = document.querySelector('.paper-button');
const sButton = document.querySelector('.scissors-button');

const humanRock = document.querySelector('.human-rock');
const humanPaper = document.querySelector('.human-paper');
const humanScissors = document.querySelector('.human-scissors');

const compRock = document.querySelector('.comp-rock');
const compPaper = document.querySelector('.comp-paper');
const compScissors = document.querySelector('.comp-scissors');

const hScore = document.querySelector('.human-score');
const cScore = document.querySelector('.comp-score');
const reset = document.querySelector('.reset-button');

// --------------init-------------//
hScore.textContent = 0;
cScore.textContent = 0;


rButton.addEventListener('click', (e) => {
    e.preventDefault();
    PLAYER_CHOICE = 1;
    humanRock.classList.remove('hide');
    humanScissors.classList.add('hide');
    humanPaper.classList.add('hide');

    const res = compChoice();
    const statusKey = `${PLAYER_CHOICE}${res}`
    console.log(statusKey);
    const roundResult = resDict[statusKey];
    if (res === 1 ) {
        compRock.classList.remove('hide');
        compScissors.classList.add('hide');
        compPaper.classList.add('hide');
    } else if (res === 2) {
        compRock.classList.add('hide');
        compScissors.classList.add('hide');
        compPaper.classList.remove('hide');
    } else if (res === 3) {
        compRock.classList.add('hide');
        compScissors.classList.remove('hide');
        compPaper.classList.add('hide');
    }

    if (roundResult === 'Won') {
        hScore.textContent = Number(hScore.textContent) + 1; 
    } else if (roundResult === 'Lost') {
        cScore.textContent = Number(cScore.textContent) + 1; 
    }
    
})

pButton.addEventListener('click', (e) => {
    e.preventDefault();
    PLAYER_CHOICE = 2;
    humanRock.classList.add('hide');
    humanScissors.classList.add('hide');
    humanPaper.classList.remove('hide');

    const res = compChoice();
    const statusKey = `${PLAYER_CHOICE}${res}`
    console.log(statusKey);
    const roundResult = resDict[statusKey];
    if (res === 1 ) {
        compRock.classList.remove('hide');
        compScissors.classList.add('hide');
        compPaper.classList.add('hide');
    } else if (res === 2) {
        compRock.classList.add('hide');
        compScissors.classList.add('hide');
        compPaper.classList.remove('hide');
    } else if (res === 3) {
        compRock.classList.add('hide');
        compScissors.classList.remove('hide');
        compPaper.classList.add('hide');
    }

    if (roundResult === 'Won') {
        hScore.textContent = Number(hScore.textContent) + 1; 
    } else if (roundResult === 'Lost') {
        cScore.textContent = Number(cScore.textContent) + 1; 
    }

})

sButton.addEventListener('click', (e) => {
    e.preventDefault();
    PLAYER_CHOICE = 3;
    humanRock.classList.add('hide');
    humanScissors.classList.remove('hide');
    humanPaper.classList.add('hide');

    const res = compChoice();
    const statusKey = `${PLAYER_CHOICE}${res}`
    console.log(statusKey);
    const roundResult = resDict[statusKey];
    if (res === 1 ) {
        compRock.classList.remove('hide');
        compScissors.classList.add('hide');
        compPaper.classList.add('hide');
    } else if (res === 2) {
        compRock.classList.add('hide');
        compScissors.classList.add('hide');
        compPaper.classList.remove('hide');
    } else if (res === 3) {
        compRock.classList.add('hide');
        compScissors.classList.remove('hide');
        compPaper.classList.add('hide');
    }

    if (roundResult === 'Won') {
        hScore.textContent = Number(hScore.textContent) + 1; 
    } else if (roundResult === 'Lost') {
        cScore.textContent = Number(cScore.textContent) + 1; 
    }
})

reset.addEventListener('click', (e) => {
    e.preventDefault();
    hScore.textContent = 0;
    cScore.textContent = 0;
    humanRock.classList.add('hide');
    humanScissors.classList.add('hide');
    humanPaper.classList.add('hide');
    compRock.classList.add('hide');
    compScissors.classList.add('hide');
    compPaper.classList.add('hide');
})

