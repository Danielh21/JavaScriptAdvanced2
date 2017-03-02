

var sum = function(num1,num2){
    return num1 + num;
}

var subtract = function(num1,num2){
    return num1 - num2;
}

var multiply = function(num1,num2){
    return num1 * num2;
}

var divide = function(num1, num2){
    if(num2 === 0)
    {
    throw new Error("Divied by zero attempt!");
    }
    else
    return num1 / num2;
}

module.exports = {sum,subtract,multiply,divide};