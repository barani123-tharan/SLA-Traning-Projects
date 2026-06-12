
// 1. Write a program using var inside a block and print it outside the block. Explain the output.

function check() {
    if (true) {
        // Declared inside an 'if' block
        var message = "block"; 
    }
    // Printed outside the 'if' block
    console.log("term", message); 
}

check();


//2. Create an object named student with properties name, age, and a function display(). Print all details and call the function.

let student = {
    name: "barani",
    age: "20",
    
     display(){
console.log("Name is " + this.name + " and age is " + this.age);
    }

    };

console.log(student.name);
console.log(student.age);
student.display();


// 3. Create an array [10, 20, 30, 40, 50] and use map(), filter(), and find() to perform different operations.

let arr = [10 , 20 , 30 , 40 , 50];

console.log(arr.map(map=>map*2));
console.log(arr.filter(filter=>filter>20));
console.log(arr.find(find=>find==30));

// 4. Write a function that accepts two numbers as parameters and returns their sum, difference, and multiplication.

function math(a,b){
    let sum = a+b;
    let difference = a-b;
    let multiplication = a*b;

    return{
        sum: sum,
        difference: difference,
        multiplication: multiplication
    };
}
let result = math(10,5);

console.log("Sum:", result.sum);
console.log("Difference:", result.difference);
console.log("Multiplication:", result.multiplication);

// 5. Create a function that returns another function. Store the returned function in a variable and invoke it.

function outerFunction() {
    let message = "Hello this a inner function";

    return function innerFunction() {
        console.log(message);
    };
}

const mySubFunction = outerFunction();

mySubFunction(); 
