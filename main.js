let login = document.querySelector(".wrapper_inner");
let signupBtn = document.querySelector("#signUp");
let signUpSection = document.querySelector(".sign-up-wrapper");
let loginBack = document.querySelector("#loginBack");
let form = document.forms[0];
signupBtn.addEventListener("click", function () {
    login.style.display = "none"
    signUpSection.style.display = "block"
});
loginBack.addEventListener("click", returnFunc);
form.signUpBtn.addEventListener("click", returnFunc);
function returnFunc() {
    login.style.display = "block"
    signUpSection.style.display = "none"
    if (form.pass.value != form.repeatPass.value) {
        alert("Passwords are not same")
    }
}

// document.querySelector("#checkbox").addEventListener("click", remember)

// let rememberValue = localStorage.getItem("value");

// if(rememberValue){
//     form.mail.value = "rememberValue"
// }

// function remember(){
//     let selectedMail = form.mail.value
//     // let selectedPass = form.pswrd.value

//     localStorage.setItem("value", selectedMail);
//     // localStorage.setItem("value", selectedPass);
// }