function askName() {
    let name = prompt("please enter your name")
    alert("Hi, " + name +"!")
}


//basic calculator
function requestNumbers(){
    num1 = prompt("Please enter first number")
    num2 = prompt("Please enter second number")
}

function addNumbers(num1, num2) {
    let sumResult = +num1 + +num2
    alert("the result is " + sumResult)
}

function subtractNumbers(num1, num2) {
    let subtractResult = num1 - num2
    alert("the result is " + subtractResult)
}

function divideNumbers(num1, num2) {
    let divisionResult = num1/num2
    alert("the result is " + divisionResult)
}

function multiplyNumbers(num1, num2) {
    let multiplyResult = num1 * num2
    alert("the result is " + multiplyResult)
}
