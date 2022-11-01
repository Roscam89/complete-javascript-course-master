"use strict";

/*
let currentScore = 20;
let nHighScore = 0;
let n = Math.floor(Math.random() * (20) + 1);


document.querySelector(".check").addEventListener("click",function(){
    const guess = Number (document.querySelector(".guess").value);
    
    
    
   

    if(!guess){
        document.querySelector(".message").textContent="No number!"
    }else if(guess>n){document.querySelector(".message").textContent="Lower!";
       currentScore--;
       document.querySelector(".score").textContent = currentScore;
      
    }
    else if(guess<n){document.querySelector(".message").textContent="Higher!";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
}   
    
    else{
        
         document.querySelector(".message").textContent="Corect"
         document.querySelector(".number").textContent=n; 
         document.querySelector("body").style.backgroundColor="#60b367";
         if(currentScore>nHighScore)
         {nHighScore=currentScore;
            document.querySelector(".highscore").textContent=nHighScore;
        }
          
    }

   
         

if (currentScore<=0){
    document.querySelector(".message").textContent="Game Over";
    document.querySelector(".score").textContent = 0;

 }

});

document.querySelector(".again").addEventListener("click",function(){
    
    
    document.querySelector(".number").textContent="?";
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".guess").value="";
    n = Math.floor(Math.random() * (20) + 1);
    currentScore = 20
    document.querySelector(".score").textContent = currentScore;
    
    
   
    
})
*/


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const bntShow = document.querySelectorAll(".show-modal");
console.log("Hi");


