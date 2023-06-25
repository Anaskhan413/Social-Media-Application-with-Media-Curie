window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginUser"))
    var userLogin = localStorage.getItem("loginUser")
    if (userLogin) {
        window.location.replace("./dashboard.html")
    }

})


function login() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var getUser = JSON.parse(localStorage.getItem("users")) || [];

    var userIndex = getUser.findIndex(function (value) {
        return value.email === email && value.password === password;
    });

    if (userIndex !== -1) {
        alert("Successfully Logged In");
        window.location.replace("./dashboard.html");
    } else {
        alert("Email and password combination is incorrect");
    }
}
