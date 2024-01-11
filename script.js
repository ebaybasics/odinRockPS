'strict'

const rButton = document.querySelector('.rock-button');
const pButton = document.querySelector('.paper-button');
const sButton = document.querySelector('.scissors-button');

const humanRock = document.querySelector('.human-rock');
const humanPaper = document.querySelector('.human-paper');
const humanScissors = document.querySelector('.human-scissors');


rButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (humanPaper.classList.contains('hide') && humanScissors.classList.contains('hide')) {
        humanRock.classList.toggle('hide');
    } else if (!humanPaper.classList.contains('hide')) {
        humanPaper.classList.toggle('hide');
        humanRock.classList.toggle('hide');
    }
    else if (!humanScissors.classList.contains('hide')) {
        humanScissors.classList.toggle('hide');
        humanRock.classList.toggle('hide');
    }
    
})

pButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (humanRock.classList.contains('hide') && humanScissors.classList.contains('hide')) {
        humanPaper.classList.toggle('hide');
    } else if (!humanRock.classList.contains('hide')) {
        humanRock.classList.toggle('hide');
        humanPaper.classList.toggle('hide');
    }
    else if (!humanScissors.classList.contains('hide')) {
        humanScissors.classList.toggle('hide');
        humanPaper.classList.toggle('hide');
    }
})

sButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (humanPaper.classList.contains('hide') && humanRock.classList.contains('hide')) {
        humanScissors.classList.toggle('hide');
    } else if (!humanPaper.classList.contains('hide')) {
        humanPaper.classList.toggle('hide');
        humanScissors.classList.toggle('hide');
    }
    else if (!humanRock.classList.contains('hide')) {
        humanScissors.classList.toggle('hide');
        humanRock.classList.toggle('hide');
    }
})




// -------------------- GAME LOGIC ---------------------- //
const compChoice = () => {
    return Math.trunc(Math.random()*3) + 1;
};

const gameRun = () => {
    const pNumChoice = prompt('Rock Paper or Scissors (1,2,3)');
    const cNumChoice = compChoice();

    const gameDict = {
        1: 'Rock',
        2: 'Paper',
        3: 'Scissors',
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

    const playerChoice = gameDict[pNumChoice];
    const cChoice = gameDict[cNumChoice];
    const result = gameDict[`${pNumChoice}${cNumChoice}`];

    switch (playerChoice) {
        case gameDict[1]:
            console.log(`You chose ${playerChoice}, He chose ${cChoice} and you ${result}`);
            
            break;
        case gameDict[2]:
            console.log(`You chose ${playerChoice}, He chose ${cChoice} and you ${result}`);
            break;
        case gameDict[3]:
            console.log(`You chose ${playerChoice}, He chose ${cChoice} and you ${result}`);
            break;   
    }
}



