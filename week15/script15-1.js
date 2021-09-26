function requestNumbers() {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
}

function addNumbers(num1,num2) {
    requestNumbers();
    let sumResult = +num1 + +num2;
    document.getElementById('result').innerHTML = sumResult;
}

function subtractNumbers(num1, num2) {
    requestNumbers();
    let subtractResult = num1 - num2;
    document.getElementById('result').innerHTML = subtractResult;
}

function divideNumbers(num1, num2) {
    requestNumbers();
    let divisionResult;
    if(num2 == '0') {
        divisionResult = "You cannot divide by zero"
    } else {
        divisionResult = num1/num2;
    }
    document.getElementById('result').innerHTML = divisionResult;
}

function multiplyNumbers(num1, num2) {
    requestNumbers();
    let multiplyResult = num1 * num2;
    document.getElementById('result').innerHTML = multiplyResult;
}