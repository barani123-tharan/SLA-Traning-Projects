// 1. Create variables of different data types (string, number, boolean) and print their types using typeof.

let name = "Barani";  
let age = 19; 
let isStudent = true;

console.log(typeof name);    
console.log(typeof age);      
console.log(typeof isStudent); 


// 2. Write a function that accepts two numbers and returns the larger number.

function findLarger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(findLarger(10, 20));


// 3. Given an array of numbers, find the sum of all elements without using built-in sum methods.

const numbers =[1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


// 4. Write a program to remove duplicate values from an array using Set.

const arr = [10, 20, 30, 40, 50];
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr); 


// 5. Create a Map containing student names and marks. Display all keys and values using a loop.

const students = new Map([
    ["dani", 85],
    ["deepak", 92],
    ["nandha", 78]
]);

for (let [name, marks] of students) {
    console.log(name + ": " + marks);
}


// 6. Write a program to count the number of vowels in a given string. 

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); 


// 7. Use string methods to reverse the word 'JavaScript'.

const word = "Hii Guys";
const reversed = word.split("").reverse().join("");

console.log(reversed);


// 8. Using Math functions, find the square root of 144 and round 12.78 to the nearest integer.

console.log(Math.sqrt(144)); 
console.log(Math.round(12.78)); 


// 9. Write a program that checks whether a number is even or odd using operators.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(7)); 


// 10. Given an array of numbers, find the largest and smallest values using Math.max() and Math.min().

const nums =[10, 20, 30, 40, 50];

const maxVal = Math.max(...nums);
const minVal = Math.min(...nums);

console.log("Max: " + maxVal + ", Min: " + minVal); 
