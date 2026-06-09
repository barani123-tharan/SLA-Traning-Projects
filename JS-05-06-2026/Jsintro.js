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