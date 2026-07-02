// initilitation , validation , updation   --- main for loops 

// Loops

// While , do-while , for loop
// -- Initialistion , Validation , updation  --      important line 
// While Loop

// loop oda condition eppo false agu tho apo loop haa vittu veliya vandhu ruum 
// loop false aga laa naa infinite haa run agitaeyyy erukum 
let num = 1;
 while (num <= 10){
    console.log(num);
    num++;
 
 }
 console.log("Condition False");


 // do-while Loop

 // first run agitu loop then check condition
 let numm = 1;

 do {
   console.log(numm);
   numm++;
 }
   while (numm <= 10);
   console.log("Condition False");


   // For Loop

for (let i = 2; i<=19; i++){
   console.log(i);
}
console.log("Condition False");


// sum of n num
let n = 10;
let ans = 0;
for (let b=1; b<=n; b++){
 ans = ans + b;
console.log(b);
}
console.log("Sum =", ans);