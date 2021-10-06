function transformName() {
    clearResultFields();

    let userInput = document.getElementById('userInput').value.trim();
    let lowerCaseInput = userInput.toLowerCase();
    let userInputArray = lowerCaseInput.split(' ');
        
    userInputArray.forEach(function (name, position) {
        userInputArray[position] = name[0].toUpperCase() + name.slice(1);
    })

    document.getElementById('firstName').value = userInputArray[0];
    document.getElementById('lastName').value = userInputArray[1];
    document.getElementById('patronymic').value = userInputArray[2];
}

function clearResultFields() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('patronymic').value = '';
}