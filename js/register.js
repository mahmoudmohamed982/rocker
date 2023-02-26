let userEmail=document.querySelector("#email"),
    password=document.querySelector("#password"),
    userName=document.querySelector("#username"),
    signUp=document.querySelector("#sign_up");
    signUp.addEventListener("click",register);
    function register(e){
        e.preventDefault();
    if(userName.value==="" || userEmail.value==="" || password.value==="")
    {
        alert("fill data to register");
    }
    else{

        localStorage.setItem("userName",userName.value);
        localStorage.setItem("useEmail",userEmail.value);
        localStorage.setItem("password",password.value);

        setTimeout(() => { window.location = "login.html" }, 1500);
    }}