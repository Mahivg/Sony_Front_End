var x = 10; // number

var str = "string"; // string


var isCool = true; // boolean


var name = "Mouni";

var designation = "SSE";

var company = "NS";


var  mounika = {
    name: 'mouni',
    'my name' : 'mad',
    designation: 'sse',
    company: 'NS',
    sal: 24000,
    getSal: function() {
        return this.sal;
    }
}; // JSON -> JavaScript Object Notation
var mouni = {};

mouni['name'] = 'mouni';

console.log(mouni['my name']);

console.log(mouni.name);
console.log(mounika.getSal());




// creating a function

// 1. Function expression

console.log(add());
function add(){
    return 10;
}


var add3 = function(num1) {
    if(typeof num1 == 'number')
    return num1 + 3;
}


console.log(add3(18));


// Lambda Expressions


var add3 = (num1) => {
    return num1 + 3;
}

var add3 = num1 =>  num1 + 3;

var add3 = (num1, num2) => num1 + num2 + 3;



var addMyArgs = (arg1, arg2) => arg1 + arg2;

var subMyArgs = (arg1, arg2) => arg1 - arg2;

console.log(addMyArgs("1", "2"));

console.log(subMyArgs("7.4", 1));



var numArr = [1, 2, 3];

var numArr1 = [1, "str", false, { abc: 's'}]

numArr.push(4);
console.log(numArr);
numArr.push(false);

console.log(numArr);

numArr.push("str");

console.log(numArr);


console.log(1 === "1");

var x1 = 10;

x1 = "any";

x1 = false;

x1 = {};


for(let i = 0; i < 5; i++) {
    console.log(numArr[i]);
}



numArr.forEach(res => console.log(res));


// length








