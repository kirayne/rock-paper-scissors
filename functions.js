let paper ="paper";
let scissors ="scissors";
let rock = "rock";
let win = "You won";
let lost = "You lost";
let draw = "Draw";
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let array = [paper, scissors, rock];
    computerSelection = array[Math.floor(Math.random()*array.length)];
    return computerSelection;
}

function singleRound(playerSelection, computerSelection){
   
    if(playerSelection === computerSelection){
        result = draw;
    }
    else{
        if((playerSelection===paper && computerSelection===rock)
        ||(playerSelection===rock && computerSelection===scissors)
        ||(playerSelection===scissors&&computerSelection===paper)){

            playerScore++;
            result = win;
        }
        else{
            result = lost;
            computerScore++;
        }
        
    }
    return result;
}

function game(){ 
    //game will be 5 rounds, who won the most number of rounds win the game
    for(let i=1; i<=5; i++){
        const input = prompt( "Round " + i + " write one: rock paper or scissors").toLowerCase();
        const ai = computerPlay();
        singleRound(input, ai);
        console.log(result);
        }
        if(computerScore>playerScore){
            console.log("You lost the game");
        }
        else if(computerScore===playerScore){
            console.log("The game has no winner");
        }
        else{
            console.log("You won the game");
        }

}