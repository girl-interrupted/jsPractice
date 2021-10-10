function transformName() {
    clearResultFields();

    let userInput = document.getElementById('userInput').value.trim();
    let lowerCaseInput = userInput.toLowerCase();
    let userInputArray = lowerCaseInput.split(' ');
        
    userInputArray.forEach(function (name, position) {
        userInputArray[position] = name[0].toUpperCase() + name.slice(1);
    })

    let outputFirstName = userInputArray[0];
    let outputLastName = userInputArray[1];
    let outputPatronymic = userInputArray[2];

    if (!outputFirstName) {
        document.getElementById('promptFirstName').innerHTML = "Please enter your first name";
    } else {
        document.getElementById('firstName').value = outputFirstName;
    }

    if (!outputLastName) {
        document.getElementById('promptLastName').innerHTML = "Please enter your last name";
    } else {
        document.getElementById('lastName').value = outputLastName;
    }

    if (!outputPatronymic) {
        document.getElementById('promptLastName').innerHTML = "Please enter your patronymic";
    } else {
        document.getElementById('patronymic').value = outputPatronymic;

    }
}

function clearResultFields() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('patronymic').value = '';
}