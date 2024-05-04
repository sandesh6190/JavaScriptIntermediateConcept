//callback functions with arrow functions
const calculate = (a, b, callBack) => {
    return callBack(a, b);
};

//method-1
const addition = calculate(2, 3, function (num1, num2) {
    return num1 + num2;
});

console.log(addition);

//method-2

const subtraction = (a, b) => {
    return a - b;
}
const result = calculate(3, 2, subtraction);
console.log(result);

//method-3

const multiplication = (a, b) => a * b;
const res = calculate(4, 5, multiplication);
console.log(res);


//implementing find() function using callback function + predicate concept (num)

const a = [1, 2, 6, 3, - 3, -4, -6, 8];

const firstNeg = (num) => { //num if predicate
    return num < 0;
};

const neg = a.find(firstNeg);   //passing function
//a.findIndex(firsNeg); //retrieving index of the result
console.log(neg);

a.forEach((num, i) => { //retrieving number and index using arrow function on forEach
    console.log("array", num, i);
});