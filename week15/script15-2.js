function clearAllErrors(){
    errorFirstName.innerHTML = "";
    errorLastName.innerHTML = "";
    errorPhoneNumber.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPassword.innerHTML = "";
    errorConfirmPassword.innerHTML = "";
    errorUpdates.innerHTML = "";
}

function checkInputsValue() {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let updatesYes = document.getElementById('radio-yes').value;
    let updatesNo = document.getElementById('radio-no').value;

    clearAllErrors();

    if(firstName == '') {
        errorFirstName.innerHTML = "First name is required";
    }
    if(lastName == '') {
        errorLastName.innerHTML = "Last name is required";
    }
    if(phoneNumber == '') {
        errorPhoneNumber.innerHTML = "Only enter number values for a phone number";
    }
    if(email.indexOf("@")) {
        errorEmail.innerHTML = "Email address must contain @";
    }
    if(email == '') {
        errorEmail.innerHTML = "Please enter email address";
    }
    if(password == '') {
        errorPassword.innerHTML = "Password is required";
    }
    if(password.length <= 6) {
        errorPassword.innerHTML = "Password must be at least 6 characters";
    }
    if(confirmPassword != password) {
        errorConfirmPassword.innerHTML = "Passwords are not matching, please try again";
    }
    if(!updatesYes.checked || !updatesNo.checked) {
        errorUpdates.innerHTML = "Select whether you'd like to get the updates";
    } else {
        success.innerHTML = "Thank you and welcome to our community, " + firstName + "!";
    }
}