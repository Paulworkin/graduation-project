function validate(event) {
    let userName = document.getElementById("userName");
    let userPassword = document.getElementById("userPassword");

    event.preventDefault()
    if(!userName.value) {
        userName.style.border = "2px solid red";
        return false;
    }
    if(!userPassword.value) {
        userPassword.style.border = "2px solid red";
        return false;
    }

    return true;
}

console.log(validate());