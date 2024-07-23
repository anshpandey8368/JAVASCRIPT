let boxes = document.querySelectorAll('.box');
let turn = document.querySelector('span');
let scoreBoard = document.querySelector('.turn');
let New_Game = document.querySelector('.NG')

let player_turn = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(player_turn) {
            turn.textContent = 'O';
            box.textContent = 'X';
            player_turn = false;
        }
        else {
            turn.textContent = 'X';
            box.textContent = 'O'
            player_turn = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

New_Game.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove('winner');
    });
    scoreBoard.style.backgroundColor = '#191913';
    scoreBoard.style.fontSize = '16px';
    scoreBoard.innerText = "Player - X";
    player_turn = true;
    turn.textContent = 'X';
})

showWinner = (winner, pattern) => {
    scoreBoard.style.backgroundColor = 'green';
    scoreBoard.style.fontSize = '20px';
    scoreBoard.innerText = `Winner is ${winner}`;
    pattern.forEach(index => boxes[index].classList.add('winner'));
    boxes.forEach((box) => box.disabled = true); 
}

checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if(pos1 === pos2 && pos2 === pos3) {
                console.log("winner");
                showWinner(pos1, pattern);
                return;
            }
        }
    }
    let isDraw = Array.from(boxes).every(box => box.textContent !== "");
    if (isDraw) {
        scoreBoard.innerText = 'It\'s a draw!';
    }
}

const style = document.createElement('style');
style.textContent = `
.winner {
    background-color: green;
    }`;

    document.head.append(style);
