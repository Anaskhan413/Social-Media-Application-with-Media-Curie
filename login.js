
window.addEventListener("load", function () {
    console.log(localStorage.getItem("UserLogin"))
    var chckUser = localStorage.getItem("UserLogin")
    if (chckUser) {
        window.location.replace("./dashboard.html")
    }

})




function login() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var getUser = JSON.parse(localStorage.getItem("USERDATA")) || [];

    var userIndex = getUser.findIndex(function (value) {
        return value.email === email && value.password === password;
    });

    if (userIndex !== -1) {
        console.log("successfully login")
        alert("successfully login")
        localStorage.setItem("UserLogin", JSON.stringify(userIndex))
        window.location.replace("./dashboard.html");

    } else {
        alert("Email and password combination is incorrect");
    }
}
