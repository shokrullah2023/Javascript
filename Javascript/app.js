// alert("Welcome to JavaScript");
// console.log(3+4, "hello");

// let rating=2;

// if(rating===3){
//     console.log("You are SuperStar");
// }
// else if(rating===2){
//     console.log("You are good!");
// }

// let highScore = 1400;
// let userScore = 1600;

// if(userScore >= highScore){
//     console.log('Congrats, you beat the highScore of ${userScore}');
//     highScore = userScore;
// }
// else{
//     console.log("You couldn't beat the high score ${userScore}");
//     highScore = userScore;
// }

// let pass = "hellokiddo";

// if(pass.length >= 6){
//     if(pass.indexOf(' ') === -1){
//         console.log("Valid Password");
//     }
//     else{
//         console.log("password is long, but contain space");
//     }
// }
// else{
//     console.log("Password is not long enough");
// }

// let loggedInUser = NaN;

// if(loggedInUser){
//     console.log("you are logged in");
// }
// else{
//     console.log("Please log in");
// }

// let status = "online";

// let color = status === 'offline' ? 'red' : 'green';
// console.log(color);

 let topSongs = [
    "First Time I ever Saw",
    "God only Knows",
    "A Day In The Life",
    "Life On Mars"
 ]

// topSongs.push("Fortunate Son");
// topSongs.pop()
// console.log(topSongs);

let popSong = [
    "Heart",
    "Love Me"
]

// let allSongs = topSongs.concat(popSong)
// console.log(allSongs);


// console.log(popSong.indexOf("Love Me",0));
// console.log(popSong.includes("Love Me",0));

let letters = ['T','C','E','P','S','E','R'];
// console.log(letters.reverse().join('.'));
// console.log(letters.slice(2,4));
// console.log(letters.splice(-1,0,"t"));
// console.log(letters);

// const data = {
//     member:"CTA",
//     income:555555,
//     staff:10,
//     location:"Denver, Colorado",
//     5000 : 'membership'
// };
// // console.log(data.member);
// // console.log(data["5000"]);
// data["membershipPrice"] = 4995;
// console.log(data);

const myStudents = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade : 97
    },
    {
        firstName: 'Hera',
        grade : 72
    },
    {
        firstName: 'Apollo',
        grade : 90
    }
];

// for (let i = 0; i<=myStudents.length; i++){
//     let student = myStudents[i];
//     console.log('${student.firstName} scored ${student.grade}');
// }

// let total = 0;
// for (let i = 0; i<=myStudents.length-1; i++){
//     let student = myStudents[i].grade;
//     total += student;
// } 
// console.log(total/myStudents.length);

// const word = 'stressed';

// for (let i = word.length; i>=0 ; i--){
//     console.log(word[i]);
// }


// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32, 2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ];

// for(let i = 0; i < gameBoard.length; i++){
//     let row = gameBoard[i];
//     console.log(row);
//     for (let j=0; j< row.length; j++){
//         console.log(row[j]);
//     }
// }

// let j = 0;
// while(j<=5){
//     console.log(j);
//     j++;
// }

// const target = Math.floor(Math.random()*10);
// let guess = Math.floor(Math.random()*10);

// while(guess !== target){
//     console.log('Target: '+ target +'  '+ 'Guess '+guess);
//     guess = Math.floor(Math.random()*10);
// }
// console.log('Target: '+ target + '  '+'Guess '+guess);
// console.log('Congrats You Win!');

// let num = [10, 20, 30, 40, 50, 60];

// for(let n of num){
//     console.log(n);
// }

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

// for (let i = 0 ; i < magicSquare.length; i++){
//     let row = magicSquare[i];
//     let sum = 0;
//     for(let j = 0; j < row.length; j++){
//         sum += row[j];
        
//     }
//     console.log('Summed of the' + sum);
// }

// for (let row of magicSquare){
//     let sum = 0;
//     for(let num of row){
//         sum += num;
//     }
//     console.log('Summed of the' + sum);
// }

const movieReviews = {
    Arrival     :9.5,
    Alien       :9,
    Amelie      :8,
    'In Brugges':9,
    Amadeus     :10,
    'Kill Bill' :8,
    'Little Miss':8.5,
    Coraline    :7.5
};

// for(let movie of Object.keys(movieReviews)){
//     console.log(movie, movieReviews[movie]);
// }

// let total = 0;
// let avg = 0;
// for(let movie of Object.values(movieReviews)){
//     total += movie;
// }
// avg = total / Object.values(movieReviews).length
// console.log(avg, total); 

// function containPurple(arr){
//     for (let color of arr){
//         if(color === "purple" || color === "magenta"){
//             return true;
//         }
//     }
//     return false;
// }

// function isValidPassword(password, username){
//     const tooShort = password.length < 8;
//     const hasSpace = password.indexOf(' ') !== -1;
//     const tooSimilar = password.indexOf(username) !== -1;

//     if(tooShort || hasSpace || tooSimilar) return false;
//     return true;
// }

// function isValidPassword(password, username){
//     const tooShort = password.lengnth < 8;
//     const hasSpace = password.indexOf(' ') !== -1;
//     const tooSimilar = password.indexOf(username) !== -1;

//     return !tooShort && !hasSpace && !tooSimilar;
    
// }

// function isPangram(sentence){

//     let lowerCase = sentence.toLowerCase();
//     for (let char of ('abcdefghijklmnopqrstuvwxyz')){
//         if(!lowerCase.includes(char)){
//             return false;
//         }
//     }
//     return true;

// }


// Return Functions as Object
// function getCard(){

// const values = [
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A',
// ];
// const valIdx = Math.floor(Math.random() * values.length);
// const value = values[valIdx];

// const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
// const suitIdx = Math.floor(Math.random() * suits.length);
// const suit = suits[suitIdx];

// return {value: value, suit: suit};

// };

// Nested Functions
// function outer(){
//     let movie = "Amadeus";

//     function inner(){
//         console.log(movie.toUpperCase());
//     }
//     inner();

// }

// function outer(){
//     let movie = "Amadeus";

//     function inner(){
//         // let movie = "Revenge";

//         function extraInner(){
//             console.log(movie.toUpperCase());
//         }
//         extraInner();
//     }
//     inner();

// }

// const sum = function(x, y) {
// return x + y };

// Nested Functions
function cry(){
    console.log("I AM SO SAD!");
}

function rage(){
    console.log("I HATE IT!");
}

// function repeatFun(f1, num){

//     for(let i = 0; i < num; i++){
//         f1();
//     }

// }

// function pickOne(f1, f2){

//     let rand = Math.random();
//     if(rand < 0.5){
//         f1();
//     }
//     else{
//         f2();
//     }

// }

// ForEach Function
const numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 95]

// numbers.forEach(function(num){

//     console.log(num * 2);

// })

// numbers.forEach(function(num, idx){

//     console.log(idx, num * 2);

// })

//Map Functions
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 95]


// const double = numbers.map(function(num){
//     return num * 2;
// })

// const numDetail = numbers.map(function(n){
//     return {
//         value: n,
//         isEven: n%2 === 0
//     }
// })

// const words = ["asap", "byob", "rsvp", "diy"]
// const abbrevs = words.map(function(word){
//     return word.toUpperCase().split("").join('.');
// })

// Arrow Functions

// const square = (x) => {
//     return x**2;
// }

//Sort Function
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

// const ascSort = prices.slice().sort((a,b) => a - b);
// const decSort = prices.slice().sort((a, b) => b - a);

// const nums = [3, 4, 5, 6];
// const product = nums.reduce((total, currentValue) => {
//     return total * currentValue;
// } )

const grades = [87, 64, 96, 92, 88, 99, 73, 72, 64];

// const maxGrade = grades.reduce((max, currentVal) => {
//     if(currentVal > max) return currentVal;
//     return max;
// })

// const minGrade = grades.reduce((min, currentVal) => {
//     return Math.min(min, currentVal);
// })

// const sum = [10, 20, 30, 40, 50, 60].reduce((sum, currVal) => {
//     return sum+currVal;
// }, 1000)


const votes = ['y','y','n','y','y','n','y','y','y','n','y','y','y'];  

// const results = votes.reduce((tally, val)=> {

//     if(tally[val]){
//         tally[val]++; 
//     }
//     else{
//         tally[val] = 1;
//     }
//     return tally;
 
// }, {})

// Argument Object

function sum(){
    let arrArg = [...arguments]
    return arrArg.reduce((sum, currentVal) => {
        return sum + currentVal;
    })
}


// Shorthand Object Properties

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r)=> sum + r);
    const avg = sum / arr.length;

    return {
        max: max,
        min: min,
        sum: sum,
        avg: avg
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

function pick(arr){
   const idx = Math.floor(Math.random() * arr.length);
   return arr[idx];
}

// function getCard(){
//     const values = [
//         '1',
//         '2',
//         '3',
//         '4',
//         '5',
//         '6',
//         '7',
//         '8',
//         '9',
//         '10',
//         'J',
//         'Q',
//         'K',
//         'A',
//     ];

//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const value = pick(values);
//     const suit = pick(suits)

//     return {
//         value: value,
//         suit: suit
//     }
// }

const cephalopods = ['dumb octopus', 'humboldt squid',
'flamboyant cuttlefish'];

const gastopods = ['giant african snail', 'banana slug',
'variable neon slug'];

const inverts = [cephalopods, ...gastopods];


// Rest Parameters
function multiply(...nums){
   return nums.reduce((num, currentVal) => {
        return num * currentVal;
    })
}

// Destructuring Arrays
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

const [silver, gold, bronze] = raceResults;
// const [first, , , fourth] = raceResults;

const runner = {
    first : "Eliud",
    last : "Kipchoge",
    country : "Kenya",
    title: "Elder of the order of the Golden Heart of Kenya"
}

// const {
//     first,
//     last 
// } = runner;

// nested Destructuring
const results = [{
    first: "Eluid",
    last : "Kipchoge",
    country: "Kenya"
},
{
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
}]

const [, {country}] = results;

function print({first, last, country}){
    // const{
    //     first, 
    //     last, 
    //     title
    // } = person;
    console.log(`${first} ${last}, ${country}`);
}

// Computed Objects
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
    [role]: person,
    [role2]: person2
}

 const math = {
    numbers1 : [1, 2, 4, 5, 6],

    add : function(x, y){
        return x + y;
    },
    multiply: function(x, y){
        return x * y;
    }


 }

 const auth = {
    username: 'TommyBot',
    login(){
        console.log("LOGGED YOU IN!");
    },
    logout(){
        console.log("GoodBYE!");
    }
 }

 const personBio = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName(){
        const {first,
        last,
        nickName
    }= this;
    return `${first} ${last} AKA ${nickName}`;
    },

    printBio(){
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`)
    }
 }

 const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!",
    "YOLO", "Can't Stop, Won't Stop" ],

    pickPhrase(){
        const{phrases} = this;
        const idx = Math.floor(Math.random()*phrases.length);
        return phrases[idx];
    },

    start(){
       this.timeId =  setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop(){
        clearInterval(this.timeId);
    }
 
 }


 const allLis = document.querySelectorAll('li');

//  for (let i = 0; i < allLis.length; i++){
//     allLis[i].innerText = "We Are The Champions";
//  }

//  for (let li of allLis){
//     li.innerHTML = 'We are <b> The Champions';
//  }


//  const title = document.querySelector('h1');
//  const titleStyle = getComputedStyle(title);
// //  console.log(titleStyle);
// //  console.log(titleStyle.color);
// //  console.log(titleStyle.fontFamily);

// const todo = document.querySelector('#todos .todo');
// // todo.style.textDecoration = 'line-through';
// // todo.style.color = 'gray';
// // todo.style.opactiy = '50%';

// const todo1 = document.querySelector('#todos .done');

// todo1.getAttribute('class');
// todo1.setAttribute('class', 'done');

// console.log(todo1.classList.remove('done'));
// console.log(todo1.classList.add('done'));
// console.log(todo1.classList.toggle('done'));






// Project of DOM

const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

// const makeChart = (games) =>{

//   const ulParent = document.createElement('ul');

//   for (let game of games){
//       const {homeTeam, awayTeam} = game;
//       const gameLi = document.createElement('li');
//       const {team: hTeam,
//              points: hPoints    
//           } = homeTeam;
//       const {team: aTeam,
//           points: aPoints} = awayTeam; 
   
//       const teamNames = `${aTeam} @ ${hTeam}`;
//       let scoreLine;
//       if (aPoints > hPoints){
//           scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//       }else{
//           scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//       }
//       const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
//       gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');
  
//       gameLi.innerHTML = `${teamNames} ${scoreLine}`;
//       ulParent.appendChild(gameLi);

// }
//   return ulParent;
// }
// const chart1 = makeChart(warriorsGames);
// document.body.prepend(chart1);

// Event Listener

// const btn = document.querySelector('#clicker');

// btn.onclick = function() {
//   console.log('HI!');
// }

// btn.ondblclick = function() {
//   console.log('Double HI!');
// }


// const btn = document.querySelector('#clicker');
// btn.addEventListener('click', function(){
//   alert('CLICKED!');
// })

// btn.addEventListener('click', function(){
//   console.log('SECOND THING');
// })

// btn.addEventListener('mouseover', function(){
//   btn.innerText = 'You are over mouse now';
// })

// btn.addEventListener('mouseout', function(){
//   btn.innerText = 'Click Me';
// })

// window.addEventListener('scroll', function(){
//   console.log('Stop Scrolling!');
// })

// const btn = document.querySelector('#Event');
// btn.addEventListener('mouseover', function(){
//   const height = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);
//   btn.style.left = `${width}px`;
//   btn.style.top = `${height}px`;
// })

// btn.addEventListener('click', function(){
//   btn.innerText = 'You Got Me';
//   document.body.style.backgroundColor = 'green';
// })

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
];
 
// const changeColor = function(){
//   const h1 = document.querySelector('h1');
//   console.log(this.style.backgroundColor);
//   h1.style.color = this.style.backgroundColor;
// }

// const container = document.querySelector('#boxes');

// for (let color of colors){
//   const box = document.createElement('div');
//   box.style.backgroundColor = color;
//   box.classList.add('box');
//   container.appendChild(box);
//   box.addEventListener('click', changeColor);
// }

const input = document.querySelector('.username');
const itemsUl = document.querySelector('#items');

// input.addEventListener('keydown', function(e){
//   console.log('KEY DOWN!');
// })

// input.addEventListener('keyup', function(e){
//   console.log('KEY UP!');
// })

// input.addEventListener('keypress', function(e){
//   if(e.key === 'Enter'){
//     if (!this.value) return 
//     const val = this.value;
//     const new_li = document.createElement('li');
//     new_li.innerText = val;
//     itemsUl.appendChild(new_li);
//     this.value = '';
//   }
// })

// Event Listener Project
// function isTouching(a, b) {
// 	const aRect = a.getBoundingClientRect();
// 	const bRect = b.getBoundingClientRect();

// 	return !(
// 		aRect.top + aRect.height < bRect.top ||
// 		aRect.top > bRect.top + bRect.height ||
// 		aRect.left + aRect.width < bRect.left ||
// 		aRect.left > bRect.left + bRect.width
// 	);
// }

// const avatar = document.querySelector('#player');
// const coin = document.querySelector('#coin');

// window.addEventListener('keyup', function(e){
//   if(e.key === 'ArrowDown' || e.key === 'Down'){
//     moveVertical(avatar, 50);
//   // const currTop = extractPos(avatar.style.top);
//   // avatar.style.top = `${currTop + 50}px`;
// }
//   else if(e.key === 'ArrowUp' || e.key === 'Up'){
//     moveVertical(avatar, -50);
//     // const currTop = extractPos(avatar.style.top);
//     // avatar.style.top = `${currTop - 50}px`;
//   }

//   else if(e.key === 'ArrowRight' || e.key === 'Right'){
//    moveHorizontal(avatar, 50);
//     // const currLeft = extractPos(avatar.style.left);
//     // avatar.style.left = `${currLeft + 50}px`;
//     avatar.style.transform = 'scale(1, 1)';
//   }

//   else if(e.key === 'ArrowLeft' || e.key === 'Left'){
//     moveHorizontal(avatar, -50);
//     // const currLeft = extractPos(avatar.style.left);
//     // avatar.style.left = `${currLeft - 50}px`;
//     avatar.style.transform = 'scale(-1, 1)';
//   }

//   if(isTouching(avatar, coin)) moveCoin();
// })

// const moveVertical = (element, amount) =>{
//   const currTop = extractPos(element.style.top);
//   element.style.top = `${currTop + amount}px`;
// }

// const moveHorizontal = (element, amount) => {
//   const currLeft = extractPos(element.style.left);
//   element.style.left = `${currLeft + amount}px`;
// }


// const extractPos = (pos) => {
//   if (!pos) return 0;
//   return parseInt(pos.slice(0, -2));
// }

// const moveCoin = () => {
//   const x = Math.floor(Math.random() * window.innerWidth);
//   const y = Math.floor(Math.random() * window.innerHeight);
//   coin.style.top = `${y}px`;
//   coin.style.left = `${x}px`;
// }

// moveCoin();

const form = document.querySelector('#signup');
const creaditcard = document.querySelector('#cc'); 
const termsCheckBox = document.querySelector('#terms'); 
const veggieSelect = document.querySelector('#veggie'); 

// form.addEventListener('submit', function(e){
//   alert('Submitted!');
//   console.log('cc', creaditcard.value);
//   console.log('CheckBox', termsCheckBox.checked);
//   console.log('vieggie', veggieSelect.value);
//   e.preventDefault();
// })

const formData = {};

// for(let input of [creaditcard, termsCheckBox, veggieSelect]){
//   input.addEventListener('input', ({target})=> {
//     const {name, type, value, checked} = target;
//     formData[name] = type === 'checkbox' ? checked: value;
//     console.log(formData)
//   })
// }

// for(let input of [creaditcard, termsCheckBox, veggieSelect]){
//   input.addEventListener('change', ({target})=> {
//     const {name, type, value, checked} = target;
//     formData[name] = type === 'checkbox' ? checked: value;
//     console.log(formData)
//   })
// }
 


// creaditcard.addEventListener('input', function(e){
//   formData['cc'] = e.target.value;
//   console.log(formData['cc']);
// })

// veggieSelect.addEventListener('input', (e)=> {
//   formData['veggie'] = e.target.value;
//   console.log(formData['veggie']);
// })

// termsCheckBox.addEventListener('input', (e)=> {
//   formData['terms'] = e.target.checked;
//   console.log(formData['terms']);
// })

// const repeat = (str, times) => {
//   let result = '';
//   for (let i =0; i < times; i++){
//     result += str;
//   }
//   return result;
// }

// const scream = (str)=> {
//   return str.toUpperCase()+ '!!!';
// }

// const getRantText = (phrase) => {
//   let text = scream(phrase)
//   let rant = repeat(text, 8)
//   return rant;
// }

// const makeRant = (phrase, el) => {
//   const h1 = document.createElement('h1');
//   h1.innerText = getRantText(phrase);
//   el.appendChild(h1);
// };

// // makeRant('I hate conflict!!!', document.body);

// const btn = document.querySelector('.button');
// // setTimeout(() => {
// // btn.style.transform = 'translateX(100px)';
// // setTimeout(()=> {
// //   btn.style.transform = 'translateX(200px)';
// // }, 1000);
// // }, 1000);

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   setTimeout(()=>{
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;
  
//   if(amount + elRight > bodyBoundary){
//    onFailure();
//   }
// else{
//     element.style.transform = `translateX(${currLeft + amount}px)`;
//    onSuccess();
//   }
//   },delay);
// };


// // moveX(btn, 100, 1000, () => {
// //   moveX(btn, 1000, 1000);
// // })

// moveX(btn, 100, 1000, ()=>{
// //success
// moveX(btn, 400, 1000, ()=>{
// //success
// moveX(btn,700, 1000, ()=>{
// //success
// alert('Still we have screen left?');
// },()=>{
// //failure
// alert('Cannot move Futher!');
// } )
// },()=>{
// //failure
// alert('Cannot move further');
// })
// }, ()=>{
// //failure
//   alert('Cannot move further');
// })

// const makeDogPromise = () => {

// return new Promise((resovle, reject)=>{

//   setTimeout(()=>{
//     const rand = Math.random();

//     if(rand < 0.5){
//       resovle();
//     }
//     else{
//       reject();
//     }
//   }, 5000)
  
//   });
 
// }

// makeDogPromise()
// .then(()=>{
//   console.log('YAY WE GOT A DOG!!!!!');
// })
// .catch(()=>{
//   console.log(':(NO DOG');
// })

// send Request through XML HTTP REQEUST

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
//   console.log('IT WORKED!!!');
//   const data = JSON.parse(this.responseText);
//   const filmURL = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener('load', function(){
//     console.log('Second Request Worked!!!');
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData);
//   })
  
//   filmReq.addEventListener('error', function(e){
//     console.log('ERROR!', e);
//   })

//   filmReq.open('GET', filmURL);
//   filmReq.send();

//   // for(let planet of data.results){
//   //   console.log(planet.name);
//   // }

// })
// firstReq.addEventListener('error', ()=> {
//   console.log('ERROR!!!!!!')
// })

// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!'); 

// Fetch Request
// fetch('https://swapi.co/api/planets/')
// .then((response) => {
//   if(!response.ok)
//   throw new Error(`Status Code Error: ${response.status}`);

//   response.json().then((data) => {
//     for(let planet of data.results){
//       console.log(planet.name);
//     }
//   })
// })
// .catch((err) => {
//   console.log('SOMETHING WENT WRONG WITH FETCH!');
//   console.log(err);
// })


//Second way of Fetching Data

// const checkStatusAndParse
//  = (response) => {
//   if(!response.ok)
//   throw new Error(`Status Code Error: ${response.status}`);
//   return response.json();
// }

// const printPlanets = (data) => {
//   console.log('Loaded 10 more planets');
//   for(let planet of data.results){
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);  
// }

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
//   return fetch(url);
// }

// fetchNextPlanets()
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .catch((err) => {
//   console.log('Something went wrong with fetch!');
// }) 

 
// 3rd way of getting the data
// axios.get('https://swapi.co/api/planets/').then((res) => {
//   console.log(res.data);
// })
// .catch((err)=> {
//   console.log('IN CATCH CALLBACK!!!');
//   console.log(err);
// })


// const fetchNextPlanets = (url= 'https://swapi.co/api/planets/') => {
//   console.log(url);
//   return axios.get(url);
// }

// const printPlanets = ({data}) => {
//   console.log(data);
//   for(let planet of data.results){
//     console.log(planet.name)
//   }
//   return Promise.resolve(data.next);
// }

// fetchNextPlanets()
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(printPlanets)
// .catch((err)=> {
//   console.log('IN CATCH CALLBACK!!!');
//   console.log(err);
// })



// Asyn Keyword
// async function greet(){
//   return 'HELLO';
// }

// greet().then((val) =>{
//   console.log('PROMISE RESOLVED WITH: ', val);
// });

// async function add(x,y){
//   if(typeof x !== 'number' || typeof y !== 'number'){
//     throw new Error('X and Y must be number');
//   }
//   return x + y;
// }

// function add(x,y){
//   return new Promise((resolve, reject)=> {
//     if(typeof x !== 'number' || typeof y !== 'number'){
//       reject ('X and Y must be number');
//     }
//     resolve(x + y);
//   })
// }

// add(6, 7)
// .then((val)=> {
//   console.log('Promise resolved with: ', val)
// })
// .catch((err)=> {
//   console.log('Promise rejected with: ', err)
// })

// async function getPlanets(){
//   const res = await axios.get('https://swapi.co/api/planets/');
//   console.log(res.data);
// }

// getPlanets();

// const moveX = (element, amount, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       const bodyBoundary = document.body.clientWidth;
//       const elRight = element.getBoundingClientRect().right;
//       const currLeft = element.getBoundingClientRect().left;

//       if(elRight + amount > bodyBoundary){
//         reject((bodyBoundary, elRight, amount));
//       }
//       else{
//         element.style.transform = `translateX(${currLeft + amount}px)`;
//         resolve();
//       }

//     }, delay);
//   });
// };

// const btn = document.querySelector('button');
// moveX(btn, 100, 1000)
// .then(()=> moveX(btn, 100, 1000))
// .then(()=> moveX(btn, 100, 1000))
// .then(()=> moveX(btn, 100, 1000))
// .then(()=> moveX(btn, 100, 1000))
// .then(()=> moveX(btn, 100, 1000))
// .then(()=> moveX(btn, 100, 1000))
// .then(()=> moveX(btn, 100, 1000))
// .catch(({bodyBoundary, amount, elRight}) => {
//   console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
// })



// async function animateRight(el){
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
  
// }
// animateRight(btn).catch(err => {
//   console.log('All Done!')
// });

// async function get3Pokemon(){
//   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   console.log(poke1.data);
// }

// get3Pokemon();

//Sequential Requests!
// async function get3Pokemon(){
//   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');

//   console.poke1(poke1.data);
//   console.poke2(poke2.data);
//   console.poke3(poke3.data);

// }

// Parallel Request
// async function get3Pokemon(){
//   const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/1');

//   const poke1 = await prom1;
//   const poke2 = await prom2;
//   const poke3 = await prom3;

//   console.poke1(poke1.data);
//   console.poke2(poke2.data);
//   console.poke3(poke3.data);

// }


// function changeBodyColor(color, delay){
//   return new Promise((resolve, reject)=> {
//     setTimeout(()=> {

//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   })

// }

// async function lightShow(){
//   const prom1 =  changeBodyColor('teal', 1000);
//   const prom2 =  changeBodyColor('pink', 1000);
//   const prom3 =  changeBodyColor('indigo', 1000);
//   const prom4 =  changeBodyColor('violet', 1000);
//   const results = await Promise.all([prom1, prom2, prom3, prom4]);
//   console.log(results);
// }
// lightShow();


// async function lightShow(){
//   const p1 =  changeBodyColor('teal', 1000);
//   const p2 = changeBodyColor('pink', 1000);
//   const p3 = changeBodyColor('indigo', 1000);
//   const p4 = changeBodyColor('violet', 1000);
//   await p1;
//   await p2;
//   await p3;
//   await p4;

// }
// lightShow();


// String.prototype.yell = function(){
//   console.log(this.toUpperCase());
// }


// function color(r, g, b){
//   this.r = r;
//   this.g = g;
//   this.b = b;
// };

// color.prototype.rgb = function(){
//   const {r, g, b} = this;
//   return `rgb (${r}, ${g}, ${b})`;
// };

// color.prototype.hex = function(){
//   const {r, g, b} = this;
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
// };

// const color1 = new color(40, 255, 60);
// color1.rgb();
// const color2 = new color(0, 0, 0);


// class Color{
//   constructor(r, g, b, name){
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }

//   greet(){
//     console.log('This is a new class!!!');
//   }

//   rgb(){
//     const {r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   }

//   hex(){
//     const {r, g, b} = this;
//     return ('#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1)
//     );
//   }
// }

// const c1 = new Color(255, 676, 89, 'tomatoe');


// Inheritance (Extend, Super, Subclass)
class Pet{

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  eat(){
    return `${this.name} is eating`
  }

}

class Cat extends Pet{
  constructor(name, age, liveLeft = 9){
    super(name, age);
    this.liveLeft = liveLeft;
  }

  meow(){
    return 'MEOWWWW';
  }

}

class Dog extends Pet{
  bark(){
    return 'WOOF!!';
  }
}