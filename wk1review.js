////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers

// function isGreaterThan(x,y){
//   if(x>y){
//     console.log(`${x} is greater than ${y}`);
//     return x;
//   }
//   else if(x<y) {
//     console.log(`${y} is greater than ${x}`);
//     return y;
//   }
//   else if(x==y){
//     console.log(`${x} is equal to ${y}`);
//     return x;
//   }
// }
// console.log(isGreaterThan(2,3));

function isGreaterThanSwitch(x, y) {
  if(!x && !y){
    return console.error("No arguements provided. Please provide.");
  }
  if(Number.isNaN(x) || Number.isNaN(y)){
    return console.error("Input is not a number. Please provide a number");
  }
  if(!Number.isInteger(x) || !Number.isInteger(y)){
    return console.error("Input is a number but not an integer. Please provide an integer.")
  }
  switch (true) {
    case x > y:
      console.log(`${x} is greater than ${y}`);
      return x;
      break;
    case y > x:
      console.log(`${y} is greater than ${x}`);
      return y;
      break;
    case x == y:
      console.log(`${x} is equal to ${y}`);
      return y;
      break;
    case !x || !y:
      console.log(`Please enter two numbers`);
      break;
    
    default:
      console.log(`Please enter two numbers`);;
  }
}

//console.log(isGreaterThanSwitch(1,"a"));

  // 2. Write an if/else statement for the following requirements:
function studentGrade(x){
  if(x>=90){
    console.log("A")
  }
  else if(x>=80){
    console.log("B")
  }
  else if(x>=70){
    console.log("C")
  }
  else if(x>=55){
    console.log("D")
  }
  else if(x<55){
    console.log("F")
  }
}


//studentGrade(55);  


//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"

function displayTimelyGreetings(){
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  
  if(hours >= 5 && hours < 12){
    console.log(`Good Morning its ${hours}:${minutes}`);
  }
  else if(hours >= 12 && hours < 17){
    console.log(`Good Afternoon its ${hours}:${minutes}`);
  }
  else{
    console.log(`Hey there its ${hours}:${minutes}`);
  }
}

//displayTimelyGreetings();

function stringMethodsPractice(){
  console.log('////////////////////////////////////////////////////////////////')
  console.log('Strings!')
  console.log('////////////////////////////////////////////////////////////////')

  let Sabrina = "Sabrina"
  let letterSabrina = Sabrina.charAt(4)
  console.log(`Using charAt() to print the letter i in Sabrina: ${letterSabrina}`);

  //Unicode: An international encoding standard for use with different languages and scripts, by which each letter, digit, or symbol is assigned a unique numeric value that applies across different platforms and programs.
    //Oxford Languages :English
  //Unicode, formally The Unicode Standard[note 1][note 2] is an information technology standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems. The standard, which is maintained by the Unicode Consortium, defines as of the current version (15.0) 149,186 characters[3][4] covering 161 modern and historic scripts, as well as symbols, emoji (including in colors), and non-visual control and formatting codes.
    //Source: https://en.wikipedia.org/wiki/Unicode
  let Teddy = "Teddy";
  let charCodeTeddy = String.fromCharCode(100);
  if(Teddy[2] == charCodeTeddy){
    console.log(`The third character in Teddy is d. It's character code (CharCode) is ${charCodeTeddy}.`)
  }

  firstname = "Gary";
  lastName = "Newton";
  fullName = firstname + lastName;

  if(fullName.startsWith("G")){
    console.log(true);
  }
  if(!fullName.endsWith("!")){
    console.log(false);
  }

  const ozgur = 'Once upon a time Ozgur looked up at the Moon, into the darkness.'

  if(ozgur.includes('Once')){
    console.log(true);
  }

  const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

  let indexOfCow = joshHadALittleLambOopsCow.indexOf("cow")

  if(indexOfCow){
    console.log(indexOfCow);
    return indexOfCow;
  }
}

//stringMethodsPractice();

function booleanPractice(){

  const a = 5;
  const b = 10;
  const c = 15;
  const d = "Keke"

  console.log(a < b)
  console.log(c > b)
  console.log(d === d)
  console.log(d !== a)
  console.log(!c !== 15)
  console.log(a < b < c)
  console.log(!!c && !!b && !!a && !!d)
}

//booleanPractice();

function loopsPractice(){
  
  console.log("Ken has a headache today and he said the room has been spinning like crazy.")
  for(i=0;i<=10;i++){
    console.log(`The room is spinning. Spin number ${i}`)
  }

  console.log("Harry said that was so mean of Teo to do Ken dirty like that.")
  for(i=0;i<=20;i++){
    console.log(`Teo's vision is spinning. Spin number ${i}`)
  }
  console.log("But wait! Lisa said, while Teo is spinning 20 times. Let\'\s make him say \"\I\'\m sorry\"\.")

  let x=0;
  while(x<21){
  	console.log(`I'm sorry for the ${x} time!`)
  	x++;
  }
}

//loopsPractice();

  // For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

function toTheLeftForInLoopPrintForQueen(){
  const whateverQueenBeySaid = {
    thing1: 'shoes',
    thing2: 'clothes',
    thing3: 'gaming console'
  }
  
  let text = "";

  for (let element in whateverQueenBeySaid) {
    console.log(whateverQueenBeySaid[element]);
    text += whateverQueenBeySaid[element] + ", ";
  }
  editedText = text.slice(0, -2)
  console.log(editedText);
}

//toTheLeftForInLoopPrintForQueen();

function toTheLeftForInLoopPrintIndexArrLana(){
    const lana = ['l', 'a', 'n', 'a'];
    for (let letter in lana) {
      //console.log(lana.indexOf(lana[letter]));
      //console.log(lana[letter])
      console.log(` ${lana[letter]} is at index ${letter} `);
    }
}

//toTheLeftForInLoopPrintIndexArrLana();

function toTheLeftForOfLoopPrintIndexArrTia(){
  const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  for (let word of tia) {
    console.log(`${word} is at index ${tia.indexOf(word)}`);
  }
}

//toTheLeftForOfLoopPrintIndexArrTiaSwathi();

function toTheLeftForEachLoop(){
  const perscholas = ['Amira', 'Arely', 'Jonathan'];
  let genericVariable = "PS";
  perscholas.forEach(element => console.log(element+genericVariable))
};

//toTheLeftForEachLoop();


////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push() - 
// pop() -
// unshift()- 
// shift() -
// concat()- 
// splice()- 
// slice()- 
// sort()- 
// includes() -
// indexOf() -
// length -


  
function updateShoppingList(){
  var shoppingList = [
    "cool ranch doritos",
    "kings hawaiian sweet bread",
    "peanut butter oreos",
    "fruit loops cereal"
  ];
  shoppingList.push("gin");
  console.log(shoppingList);
}  //

//updateShoppingList();


function useTheForce(){
  var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
  console.log("Yoda had too much gin and lean. Let's sober him up.")
  yoda.reverse();
  console.log(yoda)
}

//useTheForce();


//4. People been lining up for hours to get the newest iphone release. 
// Help manage the unruly crowd of privileged customers by serving them 
// one at a time and assiging it to a variable named `nowServing`. 
// Console.log this new variable as well as the waitList.*/
function manageThemCrowds(){
  var waitList = ["Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro"];

  //let tempwaitList = waitList;
  
  waitList.forEach((element) => {
    let nowServing = '';
    let beenServed = [];
    nowServing = element;
    console.log(`Now serving ${nowServing}`);
    waitList.shift();
    console.log(`Waitlisted ${waitList}`);  
  });
}
manageThemCrowds();

//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

  //var shoe = ["just", "do", "it"];

// ===== SPREAD OPERATOR =====

// Create a variable and assign a value of a copied array using the spread operator

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

//4. Write a function charCount that takes a string and returns the length of the string.

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

