// loading purpose and it will resist the user to go back at the previous pages until he would be loged out //

window.addEventListener("load", function () {

    var userLogin = localStorage.getItem("UserLogin")
    if (!userLogin) {
        window.location.replace("./index.html")
        return
    }

    var getUser = JSON.parse(localStorage.getItem("UserLogin"))
    login = getUser
    var usrFullName = this.document.getElementById("fulName")
    console.log(usrFullName)
    if (fulName) {
        fulName.innerHTML = "WELCOME" + " " + login.fulName

    }

    if (allList) {
        var getPosts = JSON.parse(localStorage.getItem("posts")) || []

        for (var value of getPosts) {
            allList.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">${value.desc}</p>
                <button class="btn btn-info" onclick="editPost(${value.id} , this)" >EDIT</button>
                <button class="btn btn-danger" onclick="deletePost(${value.id} , this)" >DELETE</button>
            </div>
        </div>`
        }

    }

})


// TWO VARIABLES//

var allList = document.getElementById("allList")
var login;



// MAIN WORK STARTED//

function addPost() {
    console.log("addPost");
    var title = document.getElementById("title");
    var desc = document.getElementById("description");

    if (!title.value || !description.value){
        alert("Please enter values");
        return;
    }

    var id;
    var getPosts = JSON.parse(localStorage.getItem("posts")) || [];
    console.log("getPosts", getPosts);

    if (getPosts.length > 0) {
        id = getPosts[0].id + 1;
    } else {
        id = 1;
    }

    var postBox = `<div class="card" style=" width:230px;">
    <div class="card-body" style="background-color:black;">
        <h5 class="card-title"style="font-size: 38px;
       color: white; ">${title.value}</h5>
        <p class="card-text"style="font-size: 38px;
        color: white; ">${description.value}</p>
        <button style="background-color: blue;margin-top: 19px; padding :25px;color:white; border-radius:10px;" onclick="edit(${id}, this)">EDIT</button>
        <button  style="background-color: rgb(226, 64, 43);margin-top: 19px; padding :25px; border-radius:10px;color:white;" onclick="delPost(${id}, this)">DELETE</button>
    </div>
</div>`;
allList.innerHTML = postBox + allList.innerHTML;

    var postObj = {
        id: id,
        title: title.value,
        description: description.value
    };

    getPosts.unshift(postObj);
    localStorage.setItem("posts", JSON.stringify(getPosts));

    title.value = "";
    desc.value = "";
}


//DELETER  WORK STARTED//

function delPost(id, e) {
    var getPosts = JSON.parse(localStorage.getItem("posts"));
    var indexNum = getPosts.findIndex(function(value) {
        return value.id === id;
    });
    getPosts.splice(indexNum, 1);
    localStorage.setItem("posts", JSON.stringify(getPosts));

    // Remove element
    e.parentNode.parentNode.remove();
}


//EDIT  WORK STARTED//
function edit(id, e) {
    var getPosts = JSON.parse(localStorage.getItem("posts"));
    var indexNum;
    var post = getPosts.find(function(value, index) {
        if (value.id === id) {
            indexNum = index;
            return true;
        }
    });

    var editTitle = prompt("Edit title", post.title);
    var editDesc = prompt("Edit description", post.desc);
    var editObj = {
        id: post.id,
        title: editTitle,
        desc: editDesc
    };

    getPosts.splice(indexNum, 1, editObj);
    localStorage.setItem("posts", JSON.stringify(getPosts));

    var h5detail = e.parentNode.firstElementChild;
    var paraDesc = e.parentNode.firstElementChild.nextElementSibling;
    h5detail.innerHTML = editTitle;
    paraDesc.innerHTML = editDesc;
}
//LOGOUT  WORK STARTED//
function logout() {
    localStorage.removeItem("UserLogin")
    window.location.replace("./index.html")
}
