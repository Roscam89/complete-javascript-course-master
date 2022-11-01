'use strict';

// Data needed for a later exercise
//const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const hours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const starterMenu= ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu,
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   hours,

  order({starterIndex,mainIndex,time,address}){
    console.log(`Order received ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delivered
    to address : ${address} at ${time}`);
   },  

   orderPasta:function(a,b,c){
     console.log(`Here is your pasta with ${a},${b} and ${c} !`);
   }

  
};

//restaurant.order({
// time:"20:30",
 // address:"via del sole, 69",
 // mainIndex: 1,
 // starterIndex:1,
//})




const [p,q,r]  =[8,9]

//console.log(p,q,r,);

const{name,categories,openingHours} = restaurant;
//console.log(name,categories,openingHours);


const arr = [1,2,3];
const newArr=[90,11,...arr];

//console.log(newArr);
//console.log(...newArr);

const menu =[...restaurant.starterMenu,...restaurant.mainMenu];
//console.log(menu);

//const ingredients = [prompt("Please enter your first ingredient"),
//prompt("enter your second ingredient"),prompt("enter your third ingredient")]
//console.log(ingredients);

//restaurant.orderPasta(...ingredients);

const newRestaurant = {foundedIn:1988,...restaurant,founder:"Giusepe"};
//console.log(newRestaurant);

const restaurantCopy ={...restaurant};
restaurantCopy.foundedIn=2000;
//console.log(restaurantCopy);
//console.log(newRestaurant);

const {sat,...otherDays}  = restaurant.hours;
//console.log(otherDays);


const rest1={
  restName:"Capri",
  numGuest:20,
}

const rest2 ={
  restName:"La ristorante",
  ownerName:"Pullini",
}

//rest1.numGuest=rest1.numGuest || 10;
//rest2.numGuest=rest2.numGuest || 10;

rest1.numGuest ||=10;
rest2.numGuest ||=10;

rest1.ownerName &&="Pp";
rest2.ownerName &&= "Pp";

//console.log(rest1);
//console.log(rest2);








const game = {

  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players:[
    [
      "Neuer",
      "Pavarad",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski"
    ],
    [
      "Burki",
      "Schultz",
      "Hummels",
      "Akanji",
      "Hakini",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze"
    ],
  ],

  score: "4:0",
  scored: ["Lewandowski","Gnarby","Lewandowski","Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2:6.5,
  },

 
  
}


const  [players1] = [...game.players]; //1

const [,players2] = [...game.players]; //1

const [gk,...fieldPl] = [...players1]; //2

const [allPlayers] =[players1.concat(players2)]; //3

const playersFinal = ["Thiago" , "Couthino", "Pierisic",...players1]; //4

const team1 = game.odds.team1;
const team2 = game.odds.team2;
const draw = game.odds.x; 


//for(const lista of menu)//console.log(lista) ==for of loop ex
//for(const lista of menu.entries())
//console.log(`${lista[0]+1}:${lista[1]}`)

//for(const[firstEl,secondEl] of menu.entries())
//console.log(`${firstEl+1}:${secondEl}`)
//== for of loop with order nr and destruct arr

//if(restaurant.hours.mon)
//console.log(restaurant.hours.mon)
const days=["mon","tue","wed","thu","fri","sat","sun"];

for(const day of days){
  const open = restaurant.hours[day]?.open ?? "closed";
 // console.log(`${day} ${open}`)
}





for(const who of allPlayers)
{ 
   const gol= game.scored.includes(who) ? ` ${who}` : "No goal"

  // console.log(`${gol} `)
}



const properties = Object.keys(hours);
//console.log([properties]);

let openStr  = `We are open on ${properties.length} days:`;
for (const day of properties){
  openStr+=`${day},`
} //console.log(openStr)


const values = Object.values(hours);
//console.log(values)

const entriess = Object.entries(hours);
for(const [ziua,{open,close}] of entriess){
  //console.log(`On ${ziua} we opet at ${open} and close at ${close}`);
}



const ex1 =Object.entries(game.scored)
//for(const[gnr,plr]of ex1){console.log(`Goal ${parseInt(gnr)+1}: ${plr}`)}; //1


const oddAver = Object.values(game.odds);
let sum=0
for(const oA of oddAver)
  
  sum+=(oA)/3 //sum=oa/oddAver.length
  //console.log(sum)         //2





 const tm1=game.team1
 const tm2=game.team2
 const astm1=game.odds.team1
 const astm2=game.odds.team2               //3
 const drw=game.odds.x
 //console.log(            
   //  `Odd of victory ${tm1}: ${astm1}
//Odd of draw: ${drw}
//Odd of victory ${tm2}: ${astm2}`)


const question = new Map([
  ["question","What is you favorite language?"],
  [1,"C"],
  [2,"Java"],
  [3,"Javascript"],
  [true,"Corect"],
  [false,"Try again!"]
])

const hoursMap = new Map(Object.entries(hours));
//console.log(hoursMap);

for(const [key,value] of question){
 // if(typeof key==="number")
  //console.log(`${key}:${value}`)
}
//const answer =(prompt("Answer?"))
//if(answer===question.get(3)){
//console.log(question.get(true));}else{
 // console.log(question.get(false))
//}

//console.log(question.get(question.get(1)===answer))

const gameEvents = new Map([
  [17,"Goal"],
  [36,"Substitution"],
  [47,"Goal"],
  [61,"Substitution"],
  [64,"Yelow Card"],
  [69,"Red Card"],
  [70,"Substitution"],
  [72,"Substitution"],
  [76,"Goal"],
  [80,"Goal"],
  [92,"Yelow Card"],
])

const ev  = [...new Set(gameEvents.values())]
 //gameEvents.delete(64);
//const evAverage=92/gameEvents.size
//console.log(`An event happend,on average,every 
//${Math.round(92/gameEvents.size)} minutes`)

//for(const[ k,v]of gameEvents)
//if(k<=45){
 // console.log(`First half event = ${k}':${v}`)
//}else{console.log(`Second half event - ${k}':${v}`)}

for(const [min,evnt]of gameEvents){
  const half = min <=45 ? "First" : "Second";
  //console.log(`${half} half ${min}: ${evnt}`)
}

//console.log(ev)


const airline = "TAP Air Portugal";
//console.log(airline[0],airline[1]);
//console.log("B747"[0]);
//console.log(airline.length);
//console.log("B747".length);
//console.log(airline.indexOf("P"));
//console.log(airline.lastIndexOf("a"));
//console.log(airline.indexOf("Portugal"));
//console.log(airline.slice("1"));
//console.log(airline.slice(0,airline.indexOf(" ")));
//console.log(airline.slice(airline.lastIndexOf(" ")+1));
//console.log(airline.slice(-2))
//console.log(airline.slice(1,-1))


const checkMiddleSeat = function(seat){
  const s = seat.slice(-1); //last element of a string
  if(s === "B" || s === "E")
  console.log("You got the middle seat")
  else console.log("You are lucky")
}

//checkMiddleSeat("12B");
//checkMiddleSeat("1C");
//checkMiddleSeat("123D");
//checkMiddleSeat("32E");

const passenger = "jOnAsSs"
//console.log(passenger[0].toUpperCase()+passenger.slice(1).toLowerCase())



const nameCorrection = function(anyname){
  const name = anyname[0].toUpperCase()+anyname.slice(1).toLowerCase();
  //console.log(name)
}

nameCorrection("anDrEi");
nameCorrection("maXiM");
nameCorrection("iuRa");
nameCorrection("seRii");


const email = "hello@jonas.io";
const loginEmail = "   HelLo@jonas.io";
const normalizedEmail = loginEmail.toLowerCase().trim();
//console.log(normalizedEmail)

const priceGB = "288,97£";
const priceUS = priceGB.replace("£","$").replace(",",".");
//console.log(priceUS);

const announcement = "All passenger come to boarding door 23.Boarding door 23!";

//console.log(announcement.replaceAll("door","gate"));
//console.log(announcement.replace(/door/g,"gate"));


const plane = "Airbus A320neo";
//console.log(plane.includes("A320"));
//console.log(plane.includes("Boeing"));
//console.log(plane.startsWith("Airb"));

if(plane.startsWith("Airbus") && plane.endsWith("neo")){}//console.log("Part of new Airbus family")


const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes("knife") || baggage.includes("gun")){
   // console.log("You are not allowed on board")
  }else{
    //console.log("Welcome")
  }
}

checkBaggage("I got some hamsters and a goat and 2 elephants");
checkBaggage("I got 1 knife and 55 guns");
checkBaggage("i only have a tiny asdknifeasd");
checkBaggage("i have a toy gun its not real");

//console.log("a+very+nice+string".split("+"));
//console.log("I got some hamsters and a goat and 2 elephants".split(" "));

const [a,b,...other] = "I got some hamsters and a goat and 2 elephants".split(" ");
const newPhrase = ["Actually",a,b.toUpperCase(),...other].join(" ");
//console.log();

const capitalizeName = function(name){
  const names = name.split(" ");
  const namesUpper = [];

  for(const n of names){
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
  }
// console.log(namesUpper.join(" "));
}

capitalizeName("maxim rosca boris ion dima denis crug");


const message = "Go to gate 23!";
//console.log(message.padStart(20,"+").padEnd(30,"+"));

const maskedNumber = function(number){
  const str = number + "";
  const last = str.slice(-4)//.padStart(str.length,"^");
  return last.padStart(str.length, "#")
  console.log(last)
}

//console.log(maskedNumber(432423423213123123423423));

maskedNumber(432423423423423);
maskedNumber("4324234221321334234233213123");
maskedNumber("413213324234234232131233423321321");

const message2 = "Bad weather .... All Departures Delayed";
//console.log(message2.repeat(4));

const planesInLine = function(n){
 // console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`)
};

planesInLine(12);


document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const txt = document.querySelectorAll("textarea").value;
//console.log(txt);


/*  
underscore_case     underscoreCase   ✅
first_name          firstName        ✅✅
Some_variable       someVariable     ✅✅✅
..calculateAge      calculateAge     ✅✅✅✅ 
delayed_departure   delayedDeparture ✅✅✅✅✅
*/



//const bt = document.addEventListener("click",btc());

//const test = "underscore_case"
const btc = function(){
  const txt = document.querySelector("textarea").value;
  const test = ["underscore_case","first_name","Some_variable ","delayed_departure",];
  for(const n of test){
    
  const testSplit = n.split("_")
  const testUpper = testSplit[0].toLowerCase()+testSplit[1][0].toUpperCase()+testSplit[1].slice(1).toLowerCase() +
   "✅".repeat(1);
  

  //console.log(testUpper);
  }
};

  btc();




/*const bt = document.addEventListener("click", function(){
  const txt = document.querySelector("textarea").value;
  const test = ["underscore_case","first_name","Some_variable ","delayed_departure",];
  for(const n of txt){
    
  const testSplit = txt.split("_")
  const testUpper = testSplit[0].toLowerCase()+testSplit[1][0].toUpperCase()+testSplit[1].slice(1).toLowerCase() +
   "✅".repeat(1);
  

  console.log(testUpper);
  }
}
);
*/



const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';



  const flSplit = (flights.split("+"));

  for(const i of flSplit){
    const [type,from,to,time] = i.split(";")
    const output = `${type.replaceAll("_"," ").padStart(26)} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(":","h")}) `
    const outputFinal = output.padEnd(0);
    console.log(output)
  }

  //console.log(flsEach)