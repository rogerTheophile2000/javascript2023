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

let prices = [5, 6, 78, 45, 65, 34];

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

// let price = prices.reduce(checkOut);

// console.log(`The total is : $ ${price}`);

// function checkOut(total, element) {
//     return total + element;
// }

/*******************************
 * sorting numbers
 *******************************/

let grades = [100, 90, 50, 40, 80, 70, 60];

// grades = grades.sort(ascendingSort);

// grades.forEach(print);

// function descendingSort(x, y){
//     return y - x;
// }

// function print(element){
//     console.log(element);
// }

// function ascendingSort(x, y){
//     return x - y;
// }

/*******************************
 * function expression
 *******************************/

// let count = 0;

// document.getElementById("increaseButton").onclick = function(){
//   count += 1;
//   document.getElementById("myLabel").innerHTML = count;
// }

// document.getElementById("decreaseButton").onclick = function(){
//   count -= 1;
//   document.getElementById("myLabel").innerHTML = count;
// }

/*******************************
 * arrow function expression
 *******************************/
// const greeting = (username) =>{
//   console.log(`Hello ${username}`);
// }

// greeting("Roger")

// const percent = (x , y ) => x / y * 100;

// console.log(`${percent(75 , 100)}%`);

// grades.sort((x, y) => y - x);

// grades.forEach(element => console.log(element));

/*******************************
 * arrow function expression
 *******************************/

// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// shuffle(cards);

// // console.log(cards);
// cards.forEach(card => console.log(card));

// function shuffle(array){
//   let currentIndex = array.length;

//   while(currentIndex != 0) {
//     let randowmIndex = Math.floor(Math.random() * array.length);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randowmIndex];
//     array[randowmIndex] = temp;
//   }

//   return array;
// }

/*******************************
 * nested function
 *******************************/

// let username = "Roger";
// let userInbox = 0;

// login();

// function login() {
//   displayUsername();
//   displayUserInbox();

//   function displayUsername() {
//     console.log(`welcome ${username}`);
//   }

//   function displayUserInbox() {
//     console.log(`You have ${userInbox} new messages`);
//   }
// }

/*******************************
 * Map
 *******************************/

const store = new Map([
  ["t-shirt", 20],
  ["jean", 30],
  ["socks", 10],
  ["underwear", 50],
]);

// // let shopingCart = 0;
// // shopingCart += store.set("hat", 40);
// // store.delete("hat");
// console.log(store.size);

// // console.log(shopingCart);
// store.forEach((value, key) => console.log(`${key} $${value}`));

/*******************************
 * object
 *******************************/

// const car1 = {
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log("You drive the car");
//   },

//   brake: function () {
//     console.log("You step on the brakes");
//   },
// };
// const car2 = {
//   model: "Toyota",
//   color: "blue",
//   year: 2024,

//   drive: function () {
//     console.log(`You drive the car whih ${this.model}`);
//   },

//   brake: function () {
//     console.log("You step on the brakes");
//   },
// };

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// car2.drive();
// car2.brake();

/*******************************
 * classes
 *******************************/

class Student {
  static numberofStudents = 0;
  name;
  score = 0;

  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    Student.numberofStudents += 1;
  }

  study() {
    console.log(`${this.name} is studying`);
  }

  static startScourses() {
    print("course start at 08h00 am");
  }
}

// const student1 = new Student("Roger", 23, 3.4);
// const student2 = new Student("Alvin",09, 4.1);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);

// student1.study();

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);

// student2.study();

// console.log(Student.numberofStudents);

/*******************************
 * inheritance
 *******************************/

class Animal {
  name;
  type;
  age;
  cry;

  constructor(name, type, age, cry) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.cry = cry;
  }

  eat() {
    console.log(` ${this.name} is type of who can eat`);
  }

  sleep() {
    console.log(`${this.name} sleeping`);
  }
}

class Rabbit extends Animal {
  run() {
    console.log(`${this.name} can running`);
  }
}

const rabbit1 = new Rabbit("andy", "mamifere", 3, true);


/*******************************
 * error handling
 *******************************/
// try {
//   let x = window.prompt("enter a number");
//   x = Number(x);

//   if (isNaN(x)) {
//     throw "That wasn't a number";
//   }
//   if (x == "") {
//     throw "That was empty";
//   }

//   console.log(`${x} is a number`);
// } catch (error) {
//   console.log(error);
// } finally{
//   console.log("this always execute");
// }

/*******************************
 * setTimeout()
 *******************************/

// setTimeout(firstMessage, 3000);
// setTimeout(secondMessage, 15000);
// setTimeout(thirdMessage, 20000);
// function firstMessage(){
//   console.log(`Buy this course for $500 !`);
// }
// function secondMessage(){
//   console.log(`This is not a scam!`);
// }
// function thirdMessage(){
//   console.log(`DO IT !`);
// }

/*******************************
 * setInterval()
 *******************************/

// let count = 0;
// let max = 6;
// const myTimer = setInterval(countUp, 2000);

// function countUp(){
//   count+=1;
//   console.log(count);
//   if(count >= max){
//     clearInterval(myTimer);
//   }
// }

/*******************************
 * Date
 *******************************/

// let date = new Date();

// let year = date.getFullYear();
// let dayofMon = date.getDate();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();


// date = date.toLocaleString();
// console.log(date);

/*******************************
 * add and change HTML element
 *******************************/

// const nameTag =document.createElement("h1");
// nameTag.innerHTML= window.prompt("Enter your full name");
// document.body.append(nameTag);

// const myList = document.querySelector("#fruits");
// const listItem =  document.createElement("li");
// listItem.textContent = "Mango";
// // myList.append(listItem);
// // myList.prepend(listItem);

// myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);

/*******************************
 * change css property of element
 *******************************/
// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "#1B5BB5";
// title.style.color = "#fff";
// title.style.fontFamily = "verdana";
// title.style.textAlign = "center";
// title.style.margin = "1rem";
// title.style.padding = "1rem";

/*******************************
 * events
 *******************************/
// const element = document.getElementById("myButton");
// element.onclick = doSomething;  

// function doSomething(){
//   alert("hello")
// }

/*******************************
 * add eventListner
 *******************************/

// const element = document.getElementById("innerDiv");

// element.addEventListener("mouseover", () => {
// element.style.backgroundColor = "red";
// })

// element.addEventListener("click", () => {
//   element.style.backgroundColor = "green";
// })
// element.addEventListener("mouseout", () => {
//   element.style.backgroundColor = "steelblue";
// })

/*******************************
 *display none
 *******************************/

const image = document.getElementById("myImage");
const button = document.querySelector("#myButton");

// button.addEventListener("click",()=>{
//   if (image.style.display == "none") {
//     image.style.display = "block";
//   } else {
//     image.style.display = "none";
//   }
// })

button.addEventListener("click",()=>{
  if (image.style.visibility == "hidden") {
    image.style.visibility = "visible";
  } else {
    image.style.visibility = "hidden";
  }
})