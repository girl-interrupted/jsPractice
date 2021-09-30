function sumInput() {
    let numbers = [];
    let sum = 0;  

    while (true) { 
        let userInput = +prompt("please enter a number");
        
        if (isNaN(userInput) || userInput === '' || userInput === null) {
            break;
        }

        numbers.push(userInput);

        numbers.sort(function(num1, num2) {
            return num1 - num2;
        })
    }

    for (i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }

    document.getElementById('sortedNumbers').innerHTML = "Sorted numbers are: " + numbers;
    document.getElementById('sum').innerHTML = "The sum is: " + sum;
}