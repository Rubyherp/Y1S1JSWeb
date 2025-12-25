
let score = JSON.parse(localStorage.getItem('score')) /* retrieve score from local storage if exists, else null, which is a falsy */ || {
        wins: 0,
        losses: 0,
        ties: 0
    };


function play(choice){
    const comMove = computerMove();
    const res = result(choice, comMove);
    countScore(res); // count possibly nest the function to make it look simpler
    localStorage.setItem('score', JSON.stringify(score)); //save score into local storage every execution
    alert(`You picked ${choice}. Computer picked ${comMove}. ${res}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
//     console.log(`You picked ${choice}. Computer picked ${comMove}. ${res}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function computerMove(){
    let randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >=0 && randomNumber < 1/3){
        computerMove = 'Rock';
    } else if ((randomNumber >= 1/3 && randomNumber < 2/3)){
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    };
    return computerMove;
}

function result(clicked, computerMove){
    let res = '';
    if (clicked === computerMove){
        res = 'It\'s a Tie';
    } else if (computerMove === 'Rock'){
        if (clicked === 'Paper'){
            res = 'You Win!';
        } else {
            res = 'You Lose';
        }
    } else if (computerMove === 'Paper'){
        if (clicked === 'Scissors'){
            res = 'You Win!';
        } else {
            res = 'You Lose';
        }
    } else if (computerMove === 'Scissors'){
        if (clicked === 'Rock'){
            res = 'You Win!';
        } else {
            res = 'You Lose';
        }
    }
    return res;
}

function countScore(res){
    if (res === "You Win!"){
        score.wins += 1;
    } else if (res === "You Lose"){
        score.losses += 1;
    } else {
        score.ties += 1;
    }

}

function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
}

