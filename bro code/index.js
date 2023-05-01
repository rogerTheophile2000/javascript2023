// let age = 23;
// let firstname = "Roger";
// let student = true;

// age = age + 1 



// console.log(age);
// console.log(firstname);
// console.log(student);

// console.log("Your are " + age + " years old");
// console.log("Your are", age, "years old");

// document.getElementById("p1").innerHTML = "this course is interesting"
// document.getElementById("p1").innerHTML = "Hello " + firstname + " are you OK"

/************************************** */
// Templates literals
/************************************** */

// let username = "Roger";
// let item = 3;
// let total =100; 

// let text = `
// Hello ${username}  <br>
// you have ${item} items cart. <br>
// Your total is ${total}. <br>
// `;
// console.log(text);
// document.getElementById("myPar").innerHTML = text


/************************************** */
// toLocaleString
/************************************** */

// let myNum = 100

// myNum = myNum.toLocaleString("en-US");
// myNum = myNum.toLocaleString("hi-IN");
// myNum = myNum.toLocaleString("de-DE");
// myNum = myNum.toLocaleString("fr-FR");

// myNum = myNum.toLocaleString("fr-FR", {style:"currency", currency:"EUR"});
// myNum = myNum.toLocaleString("en-US", {style:"currency", currency:"USD"});
// myNum = myNum.toLocaleString("hi-IN", {style:"currency", currency:"INR"});

// myNum = myNum.toLocaleString(undefined, {style:"percent"});
// myNum = myNum.toLocaleString(undefined, {style:"unit", unit:"celsius"});

// console.log(myNum);

 /*******************************
  * Arrays
  *******************************/

 let fruits = ["apple", "mango", "banana", "orange"];
//  console.log(fruits);

//  fruits[1] = "cocunut";
// fruits.push("lemon"); // add an element
// fruits.unshift("mango"); // add an element to the beginning
// console.log(fruits);
// fruits.pop(); //  remove last element
// fruits.shift(); // remove element from the beginning
 

let prices = [5, 6, 78, 45, 65, 34]

// for (let i = 0; i < prices.length; i++) {
//     console.log(`the price number ${i + 1} is ${prices[i]}`);
    
// }

// for(let fruit of fruits){
//     console.log(fruit);
// }

// fruits = fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }
 
 /*******************************
  * 2D Arrays
  *******************************/

// let vegetables = ["carrots", "onions", "potatoes", "amaranth"];

// let meats = ["eggs", "chicken", "fish", "steak"]

// let groceryLists = [fruits, vegetables, meats]

// for( let list of groceryLists) {
//     for(let element of list) {
//         console.log(element);
//     }
// }

 /*******************************
  * spread operator
  *******************************/
//  let numbers = [1,2,3,4,5,6,7,8,9];
//  console.log(numbers);
//  console.log(...numbers);

//  let maximum = Math.max(...numbers);
//  console.log(maximum);

//  let class1 = ["Roger", "Karen", "Aba", "Freddy", "Mushagalusa"];

//  let class2 = ["Biringanine", "Josiane", "Alvin", "Julie"]

//  class1.push(class2);

//  console.log(class1);

//  class1.push(...class2);

//  console.log(class1);

/*******************************
  * rest parameters
  *******************************/
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// let f = 6;

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers) {
//         total += number
//     }
//     return total;
// }


// console.log(sum(a , b));
// console.log(sum(a , b, c));
// console.log(sum(a , b, c, d));

/*******************************
  * callback
  *******************************/

// function sum(x, y, display){
//     let total = x + y;
//     display(total);
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById("myLabel").innerHTML = output;
// }

// sum(2, 3, displayDOM);
// sum(2, 3, displayConsole);


/*******************************
  * array.foreach
  *******************************/

// let student = ["roger", "Karen", "Aba", "Freddy", "Mushagalusa"];
// student.forEach(capitalize);
// student.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element){
//     console.log(element);
// }

/*******************************
  * array.map
  *******************************/

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// function print(element){
//     console.log(element);
// }

// let squares = prices.map(square);
// squares.forEach(print);


// let cubes = prices.map(cube);
// cubes.forEach(print);

/*******************************
  * array.filter
  *******************************/

// let ages = [18, 19, 23, 24, 20, 16 , 17];
// let adults = ages.filter(chekAge);
// adults.forEach(print);
// function chekAge(element) {
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }
    

/*******************************
  * array.reduce
  *******************************/


let price = prices.reduce(checkOut);

console.log(`The total is : $ ${price}`);

function checkOut(total, element) {
    return total + element;
}

