$(document).ready(function () {

    // ============================ Username ===============================

    $("#inputUsername").on("blur", function () {
        let inputUsername = $('#inputUsername').val();
        let patternUserName = /[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/;
        let validElement = $("#valid1");

        if (!patternUserName.test(inputUsername)) {
            validElement.text("Invalid name format").addClass("invalid-feedback").css("color", "red");
            $('#inputUsername').addClass("is-invalid").removeClass("is-valid");
        } else {
            validElement.text("");
            $('#inputUsername').addClass("is-valid").removeClass("is-invalid");
        }
    });

    /// ======================= Email validation ===================================

    $("#inputEmail").on("blur", function () {
        let inputEmail = $(this).val();
        let patternEmail = /^[a-z]([a-z0-9])+@([a-z])+(.org|.com|.uk|.edu|.net)$/;
        let validElement = $("#valid2");

        if (!patternEmail.test(inputEmail)) {
            validElement.text("Invalid email format").addClass("invalid-feedback").css("color", "red");
            $(this).addClass("is-invalid").removeClass("is-valid");
        } else {
            validElement.text("");
            $(this).addClass("is-valid").removeClass("is-invalid");
        }
    });

    //====================================== Password =====================================

    $("#secondPassword").on("blur", function () {
        let firstPassword = $("#firstPassword").val();
        let secondPassword = $(this).val();
        let validpassword = $("#valid3");

        if (firstPassword !== secondPassword) {
            validpassword.text("Passwords do not match").addClass("invalid-feedback").css("color", "red");
            $("#firstPassword, #secondPassword").addClass("is-invalid").removeClass("is-valid");
        } else {
            validpassword.text("");
            $("#firstPassword, #secondPassword").addClass("is-valid").removeClass("is-invalid");
        }
    });

    // =======================  Storage  ===========================

    $("#registrationForm").submit(function (e) {
        e.preventDefault();

        let userName = $("#inputUsername").val();
        let userPass = $("#firstPassword").val();
        let userPass2 = $("#secondPassword").val();

        if (userName === "" || userPass === "" || userPass2 === "") {
            $("#alertMessage").removeClass("d-none");
        } else {
            $("#alertMessage").addClass("d-none");
            localStorage.setItem("username", userName);
            localStorage.setItem("userPass", userPass);
            localStorage.setItem("userPass2", userPass2);

            setTimeout(() => {
                window.location = "login.html";
            }, 3000);
        }
    });
});

