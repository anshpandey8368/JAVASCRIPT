let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissors');
let user_score = document.querySelector(".user_score");
let comp_score = document.querySelector(".comp_score");
let winner_declare = document.querySelector(".winner_declare");

let arr = ["rock", "paper", "scissor"];
let comp_ans = "";
let user_ans = "";
let uscore = 0;
let cScore = 0;

function comp_turn() {
    comp_ans = arr[Math.floor(Math.random() * arr.length)];
}

rock.addEventListener('click', () => {
    user_ans = "rock";
    rock.style.border = '4px solid #1b1b7d';
    paper.style.border = 'none';
    scissor.style.border = 'none';
    comp_turn();
    checkWinner();
});

paper.addEventListener('click', () => {
    user_ans = "paper";
    paper.style.border = '4px solid #1b1b7d';
    rock.style.border = 'none';
    scissor.style.border = 'none';
    comp_turn();
    checkWinner();
});

scissor.addEventListener('click', () => {
    user_ans = "scissor";
    scissor.style.border = '4px solid #1b1b7d';
    rock.style.border = 'none';
    paper.style.border = 'none';
    comp_turn();
    checkWinner();
});

function checkWinner() {
    if (user_ans === "rock" && comp_ans === "scissor" ||
        user_ans === "paper" && comp_ans === "rock" ||
        user_ans === "scissor" && comp_ans === "paper") {
        uscore++;
        console.log("You win the game");
        user_score.innerText = uscore;
        winner_declare.innerText = "You Win";
        winner_declare.style.backgroundColor = "green";
    } else if (user_ans === comp_ans) {
        console.log("It's a tie");
        winner_declare.innerText = "Tie";
        winner_declare.style.backgroundColor = "orange";
    } else {
        cScore++;
        console.log("You lose the game");
        comp_score.innerText = cScore;
        winner_declare.innerText = "You Loose";
        winner_declare.style.backgroundColor = "rgb(155, 32, 32)";
    }
    comp();
}

function comp() {
    if(comp_ans === user_ans) {
        if (comp_ans === "rock") {
            rock.style.border = "4px solid orange";
        } else if (comp_ans === "paper") {
            paper.style.border = "4px solid orange";
        } else if (comp_ans === "scissor") {
            scissor.style.border = "4px solid orange";
        }
    }
    else if (comp_ans === "rock") {
        rock.style.border = "4px solid rgb(155, 32, 32)";
    } else if (comp_ans === "paper") {
        paper.style.border = "4px solid rgb(155, 32, 32)";
    } else if (comp_ans === "scissor") {
        scissor.style.border = "4px solid rgb(155, 32, 32)";
    }
    
}
