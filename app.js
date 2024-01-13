let userScore = 0;
let compScore = 0;

let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let paraMsg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

function drawGame(){
    console.log("Game Draw");
    paraMsg.innerText = "Draw!! Try Again😏";
    paraMsg.style.backgroundColor = "#081b31"
}

function showWinner(userWin, userChoice, compChoice){
    if(userWin){
        userScore++;
        user_score.innerText = userScore;
        paraMsg.innerText = `You Win!!😁 ${userChoice} beats ${compChoice}`
        paraMsg.style.backgroundColor = "green"
        console.log("You Win");
    }else{
        compScore++;
        comp_score.innerText = compScore;
        paraMsg.innerText = `You Lost😞 ${compChoice} beats ${userChoice}`
        paraMsg.style.backgroundColor = "red"
        console.log("You lose");
    }
}

function genCompChoice(){
    let choiceArr = ["rock", "paper", "scissors"];
    let ranIdx = parseInt(Math.random()*3);
    return choiceArr[ranIdx];
}

function playGame(userChoice){
    let compChoice = genCompChoice();
    console.log(userChoice);
    console.log(compChoice);

    if(userChoice === compChoice){
        //Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "scissors" ? true:false;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "rock" ? true:false;
        }else if(userChoice === "scissors"){
            //rock, paper
            userWin = compChoice ==="paper"? true:false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

