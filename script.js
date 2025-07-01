let x = Number(prompt("enter 1st number:"));
let y = Number(prompt("enter 2nd number:"));
let op = prompt("enter operator (+ , - , * , /):")

let result;

// perform correct calculation
if (op === "+"){
    result = x + y ;
}
else if (op === "-"){
    result = x - y
}
else if (op === "*") {
  result = x * y;
} 
else if (op === "/"){
    if(y === 0 ) {
        result = "error: cant be divided by zero";}
 else {
    result = x / y; 
} 
}
else {
    result = "invalid operator";
}

// faulty calculation

// using logical operator && so that Math.random will pick random number only when the result is a number,

// Math.floor ensures that the number will be a integer non decimal number 

// and + 1 ensures that error will be added to the result till the extent of 10 not 9 we can simply write it 11 also

if (typeof result === "number" && Math.random() < 0.1) {
  let error = Math.floor(Math.random() * 10) + 1; // 1 to 10
  result = result + error;
  alert("⚠️ Faulty result! (Calculator messed up on purpose)");
}

alert ("result is : " + result);
