const username = document.getElementById("username");
const password = document.getElementById("password");
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", e=>{
    e.preventDefault();
    if(username.value !== "admin" ){
        alert("Username is not valid");
        return;
    }
    if(password.value !== "admin123" ){
        alert("Password is not valid");
        return;
    }

    window.location.href = "/dashboard.html"
})