let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
let userCount = document.querySelector('#user-score');
let compCount = document.querySelector('#comp-score');

const showWinner = (userWin,userChoice,computerCh) =>{
    if(userWin){
        userScore++;
        userCount.innerText = userScore;
        msg.innerText = `you won! your ${userChoice} beats ${computerCh}`
        msg.style.backgroundColor = 'green';
        
    }else{
       compScore++;
       compCount.innerText = compScore;
       msg.innerText = `you losed! computers ${computerCh} beats ${userChoice}`;
       msg.style.backgroundColor  = 'red';
    }
}

const drawGame = () =>{
    msg.innerText = 'the game was draw, play again';
    msg.style.backgroundColor = 'black';
}

const genCompChoices = () =>{
    let compChoices = ['rock','paper','scissors'];
    let ranIdx = Math.floor(Math.random()*3);
    return compChoices[ranIdx];
}

const playGame = (userChoice) =>{
    let userWin = true;
    //user choice 
    //generate computer choice -> modular way of programming
    let computerCh = genCompChoices();
    if((userChoice === computerCh)){
        //draw
        drawGame();
        return;
    }
    else if(userChoice ==='rock' && computerCh==='scissors'){
        // console.log('user wins');
    }
    else if(userChoice ==='scissors' && computerCh==='rock'){
        // console.log('comp wins');
        userWin = false;
    }
    else if(userChoice ==='paper' && computerCh==='scissors'){
        // console.log('comp wins');
        userWin = false;
    }
    else if(userChoice ==='scissors' && computerCh==='paper'){
        // console.log('user wins');
    }
    else if(userChoice ==='paper' && computerCh==='rock'){
        // console.log('user wins');  
    }  
    else if(userChoice ==='rock' && computerCh==='paper'){
        // console.log('comp wins');  
        userWin = false;
    }
   showWinner(userWin,userChoice,computerCh);
}

choices.forEach((choice)=>{
  
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
});
