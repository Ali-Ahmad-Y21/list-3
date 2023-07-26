let loginBtn = document.getElementById("login")
let usernameEl = document.getElementById("username")
let passwordEl = document.getElementById("password")

document.title = ("logIn page")

loginBtn.addEventListener("click",  function(){

    let accessUser = usernameEl.value
    let accessPass = passwordEl.value

   console.log(accessUser)
})