

function add() {

    if (localStorage.getItem('username')) {
        window.location = 'Home.html'
    }
    else {
        window.location = "signup.html"
    }

}




