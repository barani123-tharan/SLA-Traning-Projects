console.log("barani")


function setinputdiv(a, b, callback) {
    callback(a, b);
}

function getdiv(c, m) {
    console.log(c + m);
}


setinputdiv(20, 3, getdiv);

// CallBack Function

function getsub(a,b){
    console.log(a-b);
}
function getinput(c,d,getinput){
    getinput(c,d);
}
getinput(10,5,getsub);

// ---This callBack function workes with return function

// function setinputdiv(a, b, callback) {
//     callback(a, b);
// }

// function getsub(a, b) {
//     console.log(a - b);
// }


// function getinput(c, d, callback) {
//     callback(c, d);
// }

// getinput(10, 5, getsub);


let first=[50, 70, 90]
let array=[10,20,30]
console.log(array[1]);
console.log(first[1]);
console.log(array.length);
console.log(array.map(map=>2*map));
console.log(array.join(first));
console.log(array.filter(filter=>filter==20))
console.log(array.concat("...",first))


//Stack LIFO

let thing=[];
thing.push("pen");
thing.push("book");
thing.push("note");
thing.pop();
console.log("thing push:"+thing);

// Queue FIFO  

let names=["guru","deep","dani"];
names.unshift("nandha");
names.unshift("jaya");  // unshift used to add items in array at first 
names.shift();  // it remove first items in array
console.log("names:"+names);

//reduce

let boy=[1,3,4,5,];
console.log(boy.reduce((total,current)=>total+current,0))

// find

let number=[1,3,4,5];
console.log(number.find(find=> find==4));

// function decleration

function man(){
    console.log('men');
}
man ();

// function expression

const add=function(){
    let name = "barani";
    console.log(name);

    a=2;
    b=5;
    console.log(a+b);
}
add();


// nested function 

function men(){
    console.log("men is powerfull");

    function women(){
        console.log("women is powerfull");
    }
    women();
}
 men();

 // parameter function

function addtowname(){
    return "baraani" + "tharan";
}
console.log(addtowname());

//return function

function returnf(){
    console.log("return function");
    return function numbers(){
        console.log(10,20,50);
    }
}
returnf()();


// rest parameter function  --- used to store values in an array

function go(...num){        // here this ... consider as a paramater 
    console.log(num);

}
go(10,20,40);


// arrow function  -- used to create logic


const ad=(a,b)=>a+b;
console.log(add(10,20),add(30,40))
const date=(a,b)=>{
    console.log("helo");

    return a+b;

}
console.log(date(10,20));