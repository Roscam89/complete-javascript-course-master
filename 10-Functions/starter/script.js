'use strict';

const bookings = [];

const createBooking= function(flightNum,passengerNum=1,price=200*passengerNum){
  const booking = {
      flightNum,
      passengerNum,
      price
  }   
  console.log(bookings) 
  bookings.push(booking);
  
}

//createBooking("A213",2,200);
//createBooking("A213",3,);
//createBooking("A213",4,);


const oneWord = function(str){
  return str.replaceAll(" ","").toLowerCase();
}

const upperFirstWord = function(str){
  const[first,...others]= str.split(" ");
  return [first.toUpperCase(),...others].join(" ");
}

const transformer = function(str,fn){
//  console.log(`Original str: ${str}`);
//  console.log(`Transformed string: ${fn(str)}`);
//  console.log(`Transformed by: ${fn.name}`);
}


transformer("Search tHe woRld's information incLuding ",oneWord);
transformer("Search the world's information including ",upperFirstWord);


const greet = function(greeting){
 return function(name){
   console.log(`${greeting} ${name}`)
 }
}

const greeterHey = greet("Hey");

//greeterHey("Jonas")


 //const gg = (greting) => { return (names)=>{
  // console.log(`${greting} ${names}`)
 //}}

 const gg = greeting=>names=>console.log(`${greeting} ${names}`);

  //gg("Hey")("Jonas")


  const lufthansa = {
    airline:"Lufthansa",
    iataCode:"LH",
    bookings:[],

    book(flightNum,name){
      console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
      this.bookings.push({flight: `${this.iataCode}${flightNum}`,name});
    },
  };


  //lufthansa.book("234","Jan Haceaturean");
  //lufthansa.book(2234,"Janson Haceat");
  //console.log(lufthansa);


  const bookFunc = lufthansa.book;
  const bookarr = lufthansa.bookings;



const airMoldova = {
    airline:"airMoldova",
    iataCode:"AM",
    bookings:[],
    };
 
 
    const alItalia = {
      airline:"alItalia",
      iataCode:"AI",
      bookings:[],
    };
     
    const flightData = [12,"Maxim Rosca"]

    //bookFunc.call(airMoldova,111,"Maxim Rosca");
   // bookFunc.call(airMoldova,112,"Iurie Gavriliuc");
    //bookFunc.call(alItalia,321,"Maxim Rosca");
   // bookFunc.call(alItalia,"Maxim Rosca",113);
  //console.log(alItalia);
   // bookFunc.call(airMoldova,...flightData);


   const bookAm = bookFunc.bind(airMoldova,23);
   const bookAi = bookFunc.bind(alItalia);
   const bookLh = bookFunc.bind(lufthansa);

  // bookAm("Maxim Rosca");
  // bookAi(66,"Liliana Rosca");
   //bookLh(11,"Boris Rosca");

   airMoldova.planes = 300;
   airMoldova.buyPlane = function(){
     this.planes++;
     console.log(this.planes);}
    // console.log(airMoldova)
   

   //document.querySelector(".buy").
   //addEventListener("click",airMoldova.buyPlane.bind(airMoldova));


   const addTax = (taxrate,value) => value+value*taxrate;
  // const addSpecificTax = addTax.bind(null,0.2);
   const fcf = function(sum,fn){
     console.log(`the total amount with tax from ${sum} is ${fn}`)
   }

   const addTaxR = function(taxrate){
     return function(value){
       return value+value*taxrate
     }
   }

   const addTva = addTaxR(0.22)
  // console.log(addTva(100));
  // console.log(addTva(200))

   //fcf(100,addTax(0.2,100))

    

   const poll = {
    question: "What is you favourite programming language?",
    options: ["0:Javascript", "1:Python", "2:Rust", "3:C++"],
    arr:[],
    answers: new Array(4).fill(0),
    registerNewAnswers(){
      let answer = Number(prompt(`What is you favorite programming language?
      0: Javascript
      1: Python
      2: Rust
      3: C++`))
      if(answer==0){this.answers[0]++}
      else if (answer==1){this.answers[1]++}
      else if (answer==2){this.answers[2]++}
      else if (answer==3){this.answers[3]++}
      else{alert("Please enter only numbers from 0-3")}
     
       displayResults();
      
      }
     
    
   }
   
   const displayResults = function(){
     console.log(
       `The results are: 
     Javascript - ${poll.answers[0]} votes , 
     Python - ${poll.answers[1]} votes , 
     Rust - ${poll.answers[2]} votes , 
     C++ - ${poll.answers[3]} votes`.split(",").join());
   }

  

   document.body.querySelector(".poll")
   .addEventListener("click",poll.registerNewAnswers.bind(poll))


  // let f;
   

   const g = function(){
     const a =23;
    // f = function(){
    //   console.log(a*2)
     }
 //  }
    g();
   // f();
   // console.dir(f)

    const h = function(){
      const a =777;
    //  f = function(){
    //   console.log(a*2)
      }
  //  }

    h();
    //f();

   // console.dir(f)

 

  

  

    (function(){
      const header = document.querySelector("h1");
      header.style.color= "red" ;
      
        document.querySelector("body").addEventListener("click",(function(){
         header.style.color= "blue";  
         
         }))
      
    })(); 



