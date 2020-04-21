//starting to test javascript
console.log("hello world");
console.log("help");
console.error('This is an error');
console.warn("this is warning to you");
console.log()
console.log()

//variables in js
const a =2;
console.log("the value of a is " + a);
console.log()
console.log()

//data types in js
const name = 'John';
const age = 30.4;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log()
console.log()

//method and property in stirng
const test = "apple";
console.log(test.toUpperCase());
console.log(test.toLowerCase());
console.log(test.length); //it is a property hence do not have parenthesis '()'
console.log(test.substring(0,3));
console.log(test.substring(3,5).toUpperCase());
console.log(test.toUpperCase().substring(3,5));
console.log(test.split(''));
const para ="hello,i am,here,now";
console.log(para.split(','));
console.log()
console.log()

//arrays in js
const num1 = new Array(1,2,3,4,5);
console.log(num1);
console.log()

const arr1 = ['abc',2,20.5,true,"hello"];
console.log(arr1);
arr1[5] = "again";
console.log(arr1);
arr1[7] = "from a distance";
console.log(arr1);
console.log(arr1.push('added'));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);
console.log(arr1.unshift(1));
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);
console.log(Array.isArray(arr1));
console.log(arr1.indexOf(20.5));
console.log()
console.log()

//Object literals
const person = {
  firstName : 'John',
  lastName : 'Doe',
  age : 30,
  hobbies : ['music','movies','sports'],
  address :{
    street : '50 main st',
    city: 'Boston',
    state: 'LA'
  }
}
console.log(person);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
console.log()

const {firstName, lastName,address:{city}} = person;
console.log(city);
person.email = "john@gmail.com";
console.log(person);
console.log()

const todos = [
  {
    id:1,
    text:'College homework',
    isCompleted : true
  },
  {
    id:2,
    text:'Home assignment',
    isCompleted : false
  },
  {
    id:3,
    text:'Freelancing',
    isCompleted : false
  }
];
console.log(todos);
console.log()

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
console.log()

//looping
 for(let i=0;i<9;i++){
   console.log(`the value of i is ${i}`);
 }
 console.log()

let j = 1;
while(j < 5){
  console.log(`hello world time ${j}`);
  j++;
}

console.log()
for(let td of todos){
  console.log(td.text);
}

console.log()
todos.forEach(function(td){
  console.log(td.text);
});

console.log()
const todoText = todos.map(function(td){
  return td.text;
});
console.log(todoText);

console.log()
const todoCompleted = todos.filter(function(td){
  return td.isCompleted === true;
});
console.log(todoCompleted);

console.log();
const todoComptext = todos.filter(function(td){
  return td.isCompleted === true;
}).map(function(td){
  return td.text;
});
console.log(todoComptext);
console.log(document);

//pre-Class OOP
function Person(firstName,lastName,dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function(){
  return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John','doe','1980-4-3');
console.log(person1);
console.log(person1.getFullName());
console.log(`Hi, my name is ${person1.getFullName()} and i am ${2020 - person1.getBirthYear()} years old`)

//using class
class Prson{
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  getBirthYear(){
    return this.dob.getFullYear();
  }
}

const person2 = new Prson('Helen','keller','1998-6-6');
console.log(`Hi, My name is ${person2.getFullName()} and I am ${2020 - person2.getBirthYear()}.`);

//document objec model
console.log(window);

//single selector
