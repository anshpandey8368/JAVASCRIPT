let turn = document.querySelector(".turn");
let boxes = document.querySelectorAll(".box");
let NG = document.querySelector(".NG");

let current_player = true;

let winPatterns = [
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
        if(current_player) {
            turn.innerText = 'Current Player - O';
            box.innerText = 'X';
            current_player = false;
        }
        else {
            turn.innerText = 'Current Player - X';
            box.innerText = 'O';
            current_player = true;
        }
        box.disabled = true;

        checkWinner();
    })
})
NG.addEventListener('click', () => {
    for(let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove('winner');
    }
    turn.innerText = "Current Player - X";
    turn.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
    NG.style.visibility = 'hidden';
})

showWinner = (winner, patterns) => {
    turn.innerText = `Winner Player - ${winner}`;
    turn.style.backgroundColor = 'green';
    patterns.forEach(index => boxes[index].classList.add('winner'));
    boxes.forEach((box) => { box.disabled = true;})
    NG.style.visibility = 'visible';
}

checkWinner = () => {
    for(let patterns of winPatterns) {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                console.log('winner');

                showWinner(pos1, patterns);

                return;
            }
        }
    }
    let isDraw = Array.from(boxes).every(box => box.textContent !== "");
    if(isDraw) {
        turn.innerText = "Game Tied!"
        turn.style.backgroundColor = 'red';
        NG.style.visibility = 'visible';
    }
}

const style = document.createElement('style');
style.textContent = `
    .winner {
       background-color : green; 
    } `;

    document.head.append(style);