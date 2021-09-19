//1. ask name
function askName() {
    document.getElementById('name').innerHTML = "Hi, " + name +"!";
}
//2. calc with inputs
let num1;
let num2;

function requestNumbers() {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
}

function addNumbers(num1,num2) {
    requestNumbers();
    let sumResult = +num1 + +num2;
    document.getElementById('result').value = sumResult;
}

function subtractNumbers(num1, num2) {
    requestNumbers();
    let subtractResult = num1 - num2;
    document.getElementById('result').value = subtractResult;
}

function divideNumbers(num1, num2) {
    requestNumbers();
    let divisionResult = num1/num2;
    document.getElementById('result').value = divisionResult;
}

function multiplyNumbers(num1, num2) {
    requestNumbers();
    let multiplyResult = num1 * num2;
    document.getElementById('result').value = multiplyResult;
}

//3. changing div colours onclick
function changingColour() {
    let divOne = document.getElementById('first');
    divOne.style.background = '#303fa3';
    let divTwo = document.getElementById('second');
    divTwo.style.background = '#53be44';
    let divThree = document.getElementById('third');
    divThree.style.background = '#eb612f';
}

//4. gallery with 2+ images
function displayCherries() {
    document.getElementById('photo').src = 'cherries.jpeg';
    document.getElementById('nextPhoto').onclick = displayApricots;
    document.getElementById('previousPhoto').onclick = displayApples;
}

function displayApricots() {
    document.getElementById('photo').src = 'apricots.jpeg';
    document.getElementById('nextPhoto').onclick = displayApples;
    document.getElementById('previousPhoto').onclick = displayCherries;
}

function displayApples() {
    document.getElementById('photo').src = 'apples.jpeg';
    document.getElementById('nextPhoto').onclick = displayCherries;
    document.getElementById('previousPhoto').onclick = displayApricots;
}
