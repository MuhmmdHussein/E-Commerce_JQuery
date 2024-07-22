
// / =============================== Storage Part ==================================================



// let loginForm = document.getElementById("loginForm");
// let userName = document.getElementById("inputUsername");
// let userPass = document.getElementById("firstPassword");

// loginForm.addEventListener("submit", function (e) {
//     e.preventDefault();

    
//     storedUsername = localStorage.getItem("username");
//     storedPassword = localStorage.getItem("userPass");


//     if (userName.value === storedUsername && userPass.value === storedPassword) {

//         window.location = "Home.html";
//     }
//     else {
//         document.getElementById("valid1").textContent = "Username or password incorrect!"
//     }
    
// });

// ==========================================================================


$("#loginForm").on("submit", function (e) {
    e.preventDefault();

    let userName = $("#inputUsername").val();
    let userPass = $("#firstPassword").val();

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("userPass");

    if (userName === storedUsername && userPass === storedPassword) {
        window.location = "Home.html";
    } else {
        $("#valid1").text("Username or password incorrect!").css("color", "red");
    }
});