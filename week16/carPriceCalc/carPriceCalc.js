function checkValue() {
    let carValue = 0;
    let allValues = document.querySelectorAll(".userChoice");

    allValues.forEach(elemValue => {

        let valueCounter;

        if (elemValue.type === "radio") {
            if (elemValue.checked) {
                valueCounter = +(elemValue.value);
            } else {
                valueCounter = 0;
            }  
        } else if (elemValue.type === "checkbox") {
            if (elemValue.checked) {
                valueCounter = +(elemValue.value);
            } else {
                valueCounter = 0;
            }
        } else if (elemValue.type === "number") { 
            if (+(elemValue.value) < 50000) {
                valueCounter = 800;
            } else if (+(elemValue.value) < 100000) {
                valueCounter = 600;
            } else if (+(elemValue.value) > 100001) {
                valueCounter = 300;
            } else {
                valueCounter = 0;
            }
        } else {
            valueCounter = +(elemValue.value);
        }
        carValue += valueCounter;
    });

    document.getElementById("value").innerHTML = `Estimated value of your car is ${carValue}`;
}