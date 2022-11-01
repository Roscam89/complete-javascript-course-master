'use strict';
const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const firstPlayerCurScore = document.getElementById("current--0");
const firstPlayerScore = document.getElementById("score--0");
const secondPlayerScore = document.getElementById("score--1");
const secondPlayerCurScore = document.getElementById("current--1")


dice.classList.add("hidden");


firstPlayerScore.textContent = 0;
secondPlayerScore.textContent= 0;
let scores = [0,0];
let cs = 0;
let activePlayer=0;
let playing=true;


btnNewGame.addEventListener("click",function(){
    
    document.querySelector(".player--0",).classList.remove("player--winner");
    document.querySelector(".player--1",).classList.remove("player--winner");
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
      firstPlayerScore.textContent = 0;
      secondPlayerScore.textContent= 0;
      scores = [0,0];
      cs = 0;
  
   playing=true;
});

btnRollDice.addEventListener("click",function(){
    if(playing){

    let diceRoll = Math.floor(Math.random()*(6)+1);
    dice.classList.remove("hidden");
    dice.src = `dice-${diceRoll}.png`;
 

    if(diceRoll !==1  ){
        cs=cs+diceRoll;
       document.getElementById(`current--${activePlayer}`).textContent=cs;
        
        
    
    }else{
     
   
        document.getElementById(`current--${activePlayer}`).textContent=0;
        cs=0;
        activePlayer=activePlayer===0 ? 1 : 0 ;
        
    }

        

        
}
    
    
    
    
    
  
});

btnHold.addEventListener("click",function(){
    
    scores[activePlayer]= scores[activePlayer]+cs;

    if (scores[activePlayer] >= 100){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        dice.classList.add("hidden");
     
        };
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent=0;
    cs=0;
    activePlayer=activePlayer===0 ? 1 : 0 ;
   
    
    
});
