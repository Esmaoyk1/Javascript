let greeting = "Hello, world!";
console.log(greeting);  

var name = "John";   // Değişken tanımlama (let ile değişken değerini değiştirebilirsiniz)
const age = 30;      // Sabit tanımlama (const ile değer değişmez)

console.log(name);  // "John"
console.log(age);   // 30


let number = 42;
let floatNumber = 3.14;
console.log(number);      
console.log(floatNumber); 

let isActive = true;
let isAdmin = false;
console.log(isActive); 
console.log(isAdmin);


let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person.firstName); 
console.log(person["age"]);    

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); 
console.log(numbers.length); 


function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice")); 



const add = function(a, b) {
    return a + b;
};

console.log(add(5, 7)); // 12



const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12






