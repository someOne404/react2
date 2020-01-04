let name = "Bu"
console.log(name)

for (i = 0; i < 5; i++){
    var count = i;
    //let count2 = i;
}
console.log(count)

//let -- local
//var -- global

console.log(typeof(3.14))

// === vs ==
console.log( 5 == "5") //true, type coercion
console.log(5 === "5") //false
console.log(0 == "\n\n") //true

let x = 3;
let y = "3";

console.log(x+y); // same as console.log((String) + y)

//Functions
function grow(last, increase){
    return last * (1 + increase);
}

console.log(grow(0.7, 0.1))

career = function(last, increase){
    return last * (1 + increase);
};

console.log(career(0.8, 0.1))

//Arrow Functions
//let func = (arg1, arg2, ...argN) => expression
//== 
let func = function(arg1, arg2, ...argN) {
    return expression;
}

let multiply = (a, b) => a * b
// multiply = function(a, b){
//     return a * b;
// }

console.log(multiply(2,4))

square = a => multiply(a, a)

console.log(square(4))

bigger = (a, b) => {
    if (a >= b){
        return a;
    }else{
        return b;
    }
}
console.log(bigger(2,6))

bigger2 = (a, b) => {
    return a >= b ? a : b; 
}
console.log(bigger2(2,6))
//bigger2 = (a, b) => a >= b ? a : b; 