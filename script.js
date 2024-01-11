

// let playersChoice = prompt('Rock Paper or Scissors (1,2,3)');

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



