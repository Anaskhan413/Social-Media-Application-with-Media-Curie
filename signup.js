window.addEventListener("load", function () {
    console.log(localStorage.getItem("UserLogin"))
    var chckUser = localStorage.getItem("UserLogin")
    if (chckUser) {
        window.location.replace("./dashboard.html")
    }

})



function userSignup() {
    var fullName = document.querySelector("#fName").value;
    var phoneNumber = document.querySelector("#contactNumber").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var userObj = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        password: password
    };

    var getUserData = JSON.parse(localStorage.getItem("USERDATA")) || [];
    var findingUser = getUserData.find(function (value) {
        return value.email === email;
    });

    if (findingUser) {
        alert("Email address already exists");
    } else {
        getUserData.push(userObj);
        localStorage.setItem("USERDATA", JSON.stringify(getUserData));
        alert("User signed up");
        window.location.href = "./index.html";
    }
}