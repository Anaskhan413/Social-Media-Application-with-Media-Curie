
var listParent = document.getElementById("listParent");
var loginUser;




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

    var todoBox = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${title.value}</h5>
        <p class="card-text">${description.value}</p>
        <button style="background-color: blue;margin-top: 19px; padding :25px;color:white; border-radius:10px;" onclick="edit(${id}, this)">EDIT</button>
        <button  style="background-color: rgb(226, 64, 43);margin-top: 19px; padding :25px; border-radius:10px;color:white;" onclick="delPost(${id}, this)">DELETE</button>
    </div>
</div>`;
    listParent.innerHTML = todoBox + listParent.innerHTML;

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

    var h5Title = e.parentNode.firstElementChild;
    var pDesc = e.parentNode.firstElementChild.nextElementSibling;
    h5Title.innerHTML = editTitle;
    pDesc.innerHTML = editDesc;
}

function logout() {
    localStorage.removeItem("loginUser")
    window.location.replace("./index.html")
}
