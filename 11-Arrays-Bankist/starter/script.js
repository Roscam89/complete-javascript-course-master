'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//const arr = ["a","b","c","d","e"];
//console.log(arr.slice(2));
//console.log(arr.slice(2,4));           //SLICE
//console.log(arr.slice());

//console.log(arr.splice(1,4)); //SPLICE
//console.log(arr);

//const arrRev = arr.slice().reverse();         //REVERSE with a copy of array

//console.log(arrR);
 
//const arrConcat = arr.concat(arrRev);
//console.log(arrConcat.join(" "));

//const arrN =[23,11,64];
//console.log(arrN[0]);        
//console.log(arrN.at(0));

//console.log(arrN[arrN.length-1]);
//console.log(arrN.slice(-1)[0]);        //At
//console.log(arrN.at(-1));             


const movementsC = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const movement of movementsC){
 // movement>0?console.log(`You've made a deposit of ${movement}`): //for of Loop
 // console.log(`You've made a withdraw of ${movement}`)
};

for(const [i,movement] of movementsC.entries()){
 // movement>0?  console.log(`Acc activity ${i+1}: deposit of ${movement}`) : //for of Loop
 // console.log(`Acc activity ${i+1} withdraw of ${movement}`)
};

//console.log("______________________________________________________");

movementsC.forEach(function(movement){
  //movement>0?console.log(`You've made a deposit of ${movement}`): //for each Loop
 // console.log(`You've made a withdraw of ${movement}`)
});

movementsC.forEach(function(movement,i,arr){
 // movement>0?console.log(`Acc activity ${i+1}: deposit of ${movement} `): //for each Loop
 // console.log(`Acc activity ${i+1}: withdraw of ${movement} ` )
});



const currenciesC = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currenciesC.forEach(function(value,key,map){
 // console.log(`${key}:${value}`)
});



const currenciesCC = new Set(["USD","GBP","EUR","USD"]);

currenciesCC.forEach(function(value,key,map){
  //console.log(`${key}:${value}`)
});






//App Start//



const displayMovements = function(movements,sort = false){
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements;

    movs.forEach(function(mov,i){

    const type = mov > 0 ? "deposit" :"withdrawal"
     
      const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}€</div>
      </div>`
          containerMovements.insertAdjacentHTML("afterbegin",html);
    })
}


const createUserName = (accs) => {
   accs.forEach(acc => {
    acc.userName = acc.owner
    .toLowerCase()
    .split(" ")
    .map(names => names[0])
    .join("");
  });
  
};
createUserName(accounts);


const displayCurrentBalance = function(acc){
  acc.balance = acc.movements.reduce((accumulator,cur) =>  {
     return accumulator + cur  } ,0);
     labelBalance.textContent = `${acc.balance}€` 
}



const displayBalances = function(acc){

  const deposit = acc.movements
  .filter(mov => mov > 0)                    
  .reduce((acc,mov) => acc + mov , 0);

  const withdraw = acc.movements
  .filter(mov => mov < 0)                    
  .reduce((acc,mov) => acc + mov , 0);

  const interest = acc.movements
  .filter(mov => mov > 0)
  .map(dep => (dep * acc.interestRate)/100)
  .reduce((acc,inter) => acc + inter , 0);


  labelSumIn.textContent = `${deposit}€`            //alt0128 for euro sign
  labelSumInterest.textContent = `${(interest).toFixed(2)}€`
  labelSumOut.textContent = `${withdraw}€`
};


const updateUi  = acc => {
  displayCurrentBalance(acc);
  displayBalances(acc);
  displayMovements(acc.movements);
};


let currentAccount;



btnLogin.addEventListener("click", function(e){
      
        e.preventDefault();

      currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);  

     


      if(currentAccount?.pin === Number(inputLoginPin.value)) {

              inputLoginUsername.value = inputLoginPin.value = "";
              inputLoginPin.blur();

              labelWelcome.textContent = ` Welcome: ${currentAccount.owner.split(" ")[0]}!`
              containerApp.style.opacity = 100;

             displayCurrentBalance(currentAccount);
             displayBalances(currentAccount);
             displayMovements(currentAccount.movements);

      } 

     

});


let transfAcc;


btnTransfer.addEventListener("click",function(e){

             e.preventDefault();

          

         transfAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
         let transPers =inputTransferTo.value;
         let transamount = Number(inputTransferAmount.value);

      
   
      if(transfAcc?.userName === transPers && 
        currentAccount.balance >= transamount &&
         transamount > 0 && currentAccount && currentAccount.userName != transPers ){

          currentAccount.movements.push(-transamount)
          transfAcc.movements.push(transamount)
          updateUi(currentAccount);

      }else{console.log("Couldnt transfer")} ;    

      inputTransferAmount.value=inputTransferTo.value="";

});

let closeAccUser;



btnClose.addEventListener("click", e =>{
    e.preventDefault();

    closeAccUser = accounts.find(acc => acc.userName === inputCloseUsername.value);

   if(closeAccUser?.pin === Number(inputClosePin.value)){

   
      const index = accounts.findIndex(acc => acc.userName === closeAccUser.userName);
      accounts.splice(index,1);
      containerApp.style.opacity=0;
      labelWelcome.textContent =""
    }else{ console.log("No")};
   
   


    inputClosePin.value=inputCloseUsername.value="";

});


btnLoan.addEventListener("click", e => {

  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

    currentAccount.movements.push(amount);

    updateUi(currentAccount);
  }
  inputLoanAmount.value="";

});


let sorted = false;

btnSort.addEventListener("click", e => {
 e.preventDefault();
    
 displayMovements(currentAccount.movements,!sorted)
 sorted=!sorted;

});









/*

const dogsJulia = [3,5,2,12,7];
const dogsJulia1= [9,16,6,8,3];


 const dogsKate = [4,1,15,8,3];
 const dogsKate1 = [10,5,6,1,4];



   const dogsJuliaC = dogsJulia.slice();
   const dogsJuliaC1= dogsJulia1.slice();
   const dogsJuliaNoCats = dogsJuliaC.splice(1,2);
   const dogsJuliaNoCats1 = dogsJuliaC1.splice(1,2);


const checkDogs = function(dogsJulia,dogsKate){

  
  dogsJulia.forEach(function(val,key){

    val > 3 ? console.log(` ++++ Dog nr ${key+1} is an adult and its ${val} years old ++++`)
    :console.log(`++++ Dog nr ${key+1} its still a puppy 🐶 ++++`)
      }
  )

  dogsKate.forEach(function(val,key){

    val > 3 ? console.log(`**** Dog nr ${key+1} is an adult and its ${val} years old ****`)
    :console.log(`**** Dog nr ${key+1} its still a puppy 🐶 ******`)
      }
  )
   


  };

 //checkDogs(dogsJuliaNoCats,dogsKate);
 //checkDogs(dogsJuliaNoCats1,dogsKate1)
 
*/

const movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//const movementsUSD = movements.map(function(mov){return Math.round(mov*eurToUsd)}) //Map ex//
const movementsUSD = movements.map( mov => Math.round(mov * eurToUsd));

const movementssDescriptString = movementss.map((mov,i)=>
  `Acc activity ${i+1}: ${mov > 0 ? "deposit" : "withdraw"} of ${mov} ` );


  const deposits = movementss.filter(mov => mov > 0);   //Filter Ex//
  const withdrwls = movements.filter(mov => mov < 0);  

   
  const balance = movements.reduce((accumulator,cur,i,array)=>  {
   // console.log(`${i} : ${accumulator} : ${cur} `)                   //Reduce Ex//
     return accumulator + cur  } ,0)
    
  
 const max = movementss.reduce((acum,mov)=>{
   if (acum > mov) return  acum;
   else return mov;
 })
 const min = movementss.reduce((acum,mov)=>{
  if(acum < mov)  return  acum 
  else return mov;
 },movementss[0])

 //console.log(max);
 //console.log(min);

  

//console.log(movementss);
//console.log(balance);

 const testData1 = [5,2,4,15,8,3];
 const testData2 = [16,6,10,5,6,1,4];

const calcAverageHumanAge = ages =>{

  const humanAge = ages.map((dogAge,i) =>  dogAge <= 2 ? 2 * dogAge: 16 + dogAge * 4 ,
  
   );
  const adultDogs = humanAge.filter(age => age > 18);
  console.log(adultDogs,"Adult dogs age");

  const averHumanAg = adultDogs.reduce((acc,cur,i) => { 
    
    return acc + cur / adultDogs.length },0)
    console.log(averHumanAg, "aver human age");

  return humanAge;

}

//console.log(calcAverageHumanAge(testData1),"dogs to human");

 const totalDepositUsd = movementss
 .filter(mov => mov > 0)                    //Chaining ex //
 .map(mov => mov * eurToUsd)
 .reduce((acc,mov) => acc + mov , 0);

// console.log(totalDepositUsd);
[5,2,4,1,15,8,3]
[16,6,10,5,6,1,4]


const calcAverageHumanAges = ages => {
  const hmnage = ages
  .map(age => age <= 2 ? 2 * age : 16 + age *4)
  .filter(age => age >= 18)
  .reduce((acc,cur,i,arr) =>  acc + cur / arr.length,0)

  console.log(hmnage)
};

//calcAverageHumanAges([5,2,4,1,15,8,3]);
//calcAverageHumanAges([16,6,10,5,6,1,4]);


const firstWithdrawal = movementss.find(mov => mov < 0);   //Find Ex//
//console.log(firstWithdrawal)


const account = accounts.find(acc => acc.owner === "Jessica Davis");
//console.log(account);


let accountFor = {};


for(const n of accounts){
  
  if(n.owner ===  "Jessica Davis"){    // same as find with for of loop
    accountFor =n
  }
 
};

//console.log(accountFor)


const anyDeposits = movements.some(mov => mov > 0);  // some Ex//
//console.log(anyDeposits);



//console.log(account4.movements.every(mov => mov >0)); //every Ex//


const deposit = mov => mov > 0;      //separate callback

//console.log(movements.some(deposit));
//console.log(movements.every(deposit));
//console.log(movements.filter(deposit));
//console.log(movements.map(deposit));


const arrr = [[1,2,3],[4,5,6],7,8];
//console.log(arrr.flat());            //Flat ex //

const arrDeep = [[[1,2],3], [4,[5,6]],7,8];
//console.log(arrDeep.flat(2));


const acountMovements = accounts.map(acc => acc.movements);      //Map Ex//
const allMovements = acountMovements.flat();
const overallBalance = allMovements.reduce((acc,mov) => acc + mov,0 )
//console.log(overallBalance);


const overallBallanceChain = accounts.map(acc => acc.movements)
.flat()
.reduce((acc,mov) => acc + mov,0);

const overallBallanceFlatMap = accounts.flatMap(acc => acc.movements) //FlatMap Ex//
.reduce((acc,mov) => acc + mov,0);

//console.log(overallBallanceFlatMap);


//const names = ["Jonas", "Maxim","Iura","Liubb", "Andrii","Misa","Boris","Liuba"];
//console.log(names.sort());



//console.log(movementss);

//movementss.sort((a,b) => a-b);       //Sort Ex//  ascending
  //movementss.sort((a,b) => b-a);                  descending


//console.log(movementss);
//const rn = Math.round(Math.random()*100);


//console.log(new Array(1,2,3,4,5,6,7)) 
                                             //Creating new Array Ex //
const x  = new Array(7);

x.fill(1);
x.fill(23,3,5)

//console.log(x);

const y = Array.from({length:7}, () => 1)
//console.log(y);
const n = Array.from({length:7}, (_,i) => i+1 );
//console.log(n)''

labelBalance.addEventListener("click", function(){

const movementsUi = Array.from(document.querySelectorAll(".movements__value"), 
el => Number(el.textContent.replace("€","")));
//console.log(movementsUi)

const movementsUi2  =[...document.querySelectorAll(".movements__value")];

});

const rDiceRoll = Array.from({length:100}, () => Math.round(Math.random()*100));
//console.log(rDiceRoll)


const bankDepositSum = accounts.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((acc,cur) => acc + cur);
//console.log(bankDepositSum);

const numDeposits1000 = accounts.flatMap(acc => acc.movements)
.filter(mov => mov >= 1000);


const numDepositss1000 = accounts.flatMap(acc => acc.movements)
.reduce((acc,cur) => cur >= 1000 ? acc + 1 : acc,0);
//console.log(numDepositss1000)


const sums = accounts.flatMap(acc => acc.movements)
.reduce((sums,cur) => { 

 // cur > 0 ? sums.deposits += cur : sums.withdrawls += cur;
 sums[cur > 0 ? "deposits" : "withdrawls"] += cur;

  return sums;

} , {deposits: 0, withdrawls:0 });

//console.log(sums);

const convertTitleCase = function(title){
 const wordToUpper = str => str[0].toUpperCase()+ str.slice(1);
const exceptions = ["a","an","and","but","the","or","on","in","with"];

const titleCase = title.toLowerCase().split(" ")
.map( word => exceptions.includes(word) ? word : wordToUpper(word)).join(" ");

return wordToUpper(titleCase);

};

//console.log(convertTitleCase("this is a nice title"));
//console.log(convertTitleCase("this is a LONG title"));
//console.log(convertTitleCase("and Here is another title with an EXAMPLE"));



const dogs = [
  {weight: 22, curFood:250, owners:["Alice", "Bob"]},
  {weight: 8, curFood:200, owners:["Matilda"]},
  {weight: 13, curFood:275, owners:["Sarah", "John"]},
  {weight: 32, curFood:340, owners:["Michael"]},
  ];

  

 dogs.flatMap(dog => dog.recomendedFood = Math.round(dog.weight ** 0.75 * 28)); //ex1

 //console.log(dogs)

// current > (recomended * 0.90) && curent <(recomended *1.1)


const dogSarah = dogs.find(dog => dog.owners[0]==="Sarah" ); //ex2


//const dogCheck = function(dog){dog.curFood<(dog.recomendedFood*0.9)?console.log(`${ownersToLittle.push(dog.owners)}`):
//dog.curFood>(dog.recomendedFood*1.1)?console.log(`${ownersTooMuch.push(dog.owners)}`)
//:console.log(`${ownersOk.push(dog.owners)}`); }
const ownersTooMuch=[];
const ownersToLittle=[];
const ownersOk = [];
//const  a = dogs.map((dog,cur) => dogCheck(dog)) //ex3




const str = ownersTooMuch.flatMap((names,cur)  => names,0);
const str1 = ownersToLittle.flatMap((names,cur)  => names,0);

//console.log(`${ownersTooMuch.join(" and ")} dogs are eating too much and   
// ${ownersToLittle.join(" and ")} dogs are eating too little`);           //Ex 4



 
//dogs.filter(dog => console.log(dog.curFood===dog.recomendedFood)) //ex 5
  
//dogs.filter(dog => dog.curFood===dogCheck(dog)) //ex6


const dogs1 = dogs.slice(0).sort((a,b) => a.recomendedFood-b.recomendedFood)

//console.log(dogs1)


 