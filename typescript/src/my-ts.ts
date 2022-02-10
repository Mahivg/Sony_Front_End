
let x22:number = 10;

let x23:number[] = [];

let xstr: string = "Assign";


let obj12: object = {}; // generic way to accept all kind of objects

obj12 = { da: 12, ca: 12 };


let obj123: { name: string, age: number };

obj123 = { name: "Sony", age: 26 };

enum APP_CONST { NEW, OLD, MED };

let mixArr: [ string, number ] = ["s", 1]; // Tuple variables

let expVar : number | string ; // union variables
expVar = 's';
expVar = 12;

let allVar: any; // JS variables

allVar = 'd';
allVar = 12;
allVar = false;
allVar = { a: 12 };


function myAddTyped(arg1: number, arg2: number): number {
    return arg1 + arg2;
}


const fun1 = function(a: any, b: any) {
    return a + b;
}


// console.log( myAddTyped("1", "2")); Cannot be called with invalid args

console.log(myAddTyped(1, 2));

console.log(myAddTyped(2, 3));


interface Person {
    name: string,
    age: number
}

let per1 : Person;

