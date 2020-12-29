function validdateForm() {
    var un = document.loginform.user.value;
    var pw = document.loginform.psw.value;
    if ((un == "username") && (pw == "password")) {
        window.location = "main.html";
        alert("login successful")
        return true;
    } else {
        alert("Login was unsuccessful, please check your username and password");
        return false;
    }
}