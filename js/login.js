let password=document.querySelector("#password"),
    userName=document.querySelector("#username"),
    signin=document.querySelector("#sign_in");
    signin.addEventListener("click",login);
    function login(e){
        e.preventDefault();
    if(userName.value==="" ||  password.value==="")
    {
        alert("fill data to login or go to register ");
    }
    else{

      if (localStorage.getItem("userName").trim()==userName.value.trim() && localStorage.getItem("password")==password.value ){
        setTimeout(() => { window.location = "index.html" }, 1500);
      }
      else{
          alert("wrong password or username")
      }
    
    }}