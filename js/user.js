let signList=document.querySelector(".signList");
let iconsList=document.querySelector("#user_info");
let userDom=document.querySelector("#user"),
logout=document.querySelector("#logout");

username=localStorage.getItem("userName");
if(username){
    signList.remove();
    userDom.innerHTML=username;
    iconsList.style.display = "flex";
    
}

logout.addEventListener("click",function(){
    localStorage.clear();
})



