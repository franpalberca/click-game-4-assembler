const scoreBoard = document.querySelector("#scoreTop");
const inputName = document.querySelector("#inputName");
const btnPlay = document.querySelector("#btnPlay");

function createScore(){
    const newPlayer = document.createElement("h4");
    newPlayer.textContent = localStorage.getItem('player');
    scoreBoard.appendChild(newPlayer);

    const timePassed = document.createElement("p");
    timePassed.setAttribute("class", "time-passed");
    timePassed.setAttribute("id", "timePassed");
    scoreBoard.appendChild(timePassed);

    const succeses = document.createElement("p");
    succeses.setAttribute("class", "player-score");
    succeses.setAttribute("id", "playerScore");
    scoreBoard.appendChild(succeses);
};