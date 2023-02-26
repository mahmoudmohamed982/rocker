//setting box

//varaibles declaration
let color =localStorage.getItem("color"),
 bgcolor =localStorage.getItem("bgcolor");
 let settingIcon=document.querySelector(".spin_icon .fa-cog"),
 settingBox =document.querySelector(".setting");
 let colorlist=document.querySelectorAll(".color-list li ");
 let RandomBackgroundEL=document.querySelectorAll(".Random-Background  span");
    let backgroundOption=true;
    

 



 //check to page color 
 if(color!==null)
 {
    document.documentElement.style.setProperty("--main-color", color);
 };

 if(bgcolor!==null)
 {
    document.documentElement.style.backgroundColor=bgcolor;
    document.documentElement.style.setProperty("--white-color", bgcolor);
 };
 if(localStorage.getItem("activeElement")!==null)
 {
    document.documentElement.style.setProperty("--main-color", color);
 };




 // toggle gear icon
 settingIcon.onclick=function(){
    this.classList.toggle("fa-spin");
    settingBox.classList.toggle("setting_open");
 }



 //color list option
 
colorlist.forEach((i)=>{
    i.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("color",e.target.dataset.color);
        //remove active class from all elements
        e.target.parentElement.querySelectorAll(".active").forEach((el)=>{
            el.classList.remove("active")
        })
        e.target.classList.add("active");
        localStorage.setItem("activeElement",e.target);
    })
  
})


//mode options
let mode=document.querySelectorAll(".mode li i");
mode.forEach((i)=>{
    i.addEventListener("click",(e)=>{
        document.documentElement.style.backgroundColor=e.target.dataset.bgcolor;
       document.documentElement.style.setProperty("--white-color", e.target.dataset.color);
      localStorage.setItem("bgcolor",e.target.dataset.bgcolor)

    })
  
})
backgroundOptionInStorage=localStorage.getItem("backOption");
//back ground options
RandomBackgroundEL.forEach((span)=>{
    span.addEventListener("click",(ev)=>{
ev.target.parentElement.querySelectorAll(".active").forEach((el)=>{
    el.classList.remove("active");

});
ev.target.classList.add("active");
if(ev.target.dataset.bgimage=="yes")
{
  
    backgroundOption=true;
    slideshow();
    localStorage.setItem("backOption",backgroundOption)

}
else{
   
    backgroundOption=false;
    clearTimeout(backTimeOut);
    localStorage.setItem("backOption",backgroundOption)
}
    }

)}
);



RandomBackgroundEL.forEach((el)=>{
    el.classList.remove("active");
   
});
if(backgroundOptionInStorage=="true"){
    document.querySelector(".Random-Background .yes").classList.add("active");
}
else{
    document.querySelector(".Random-Background .no").classList.add("active"); 
}

// Select All Bullets
const allBullets = document.querySelectorAll(".Navigation-bullet");

// Select All Links

function scrollToSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}

scrollToSomewhere(allBullets);


//reset options

document.querySelector(".reset-options").onclick=function(){
    localStorage.removeItem("backOption");
    localStorage.removeItem("bgcolor");
    localStorage.removeItem("color");

    window.location.reload();
};


//=======================draw ProductUI=================================
let productsDom = document.querySelector(".featured-items");
let products = productsDB;

// Display Producs
let drawProductsUI;

(drawProductsUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
    <div class="featured-item" style="border:
     ${ item.isMe === "Y" ? "2px solid #green" : "" }">
    <div class="img-container">
    <img src="${item.imageUrl}" alt="">
    <div class="featured-overlay">
        <img src="${item.overlayImgeUrl}" alt="chair">
        <div class="featured-icons">
            <ul>
                <li><i class="far fa-heart fa-lg" style="color: ${
                  item.liked == true ? "red" : ""
                }" onclick="addToFavorite(${item.id})></i></li>
                <li><i class="fas fa-eye fa-lg"></i></li>
                 <li><i class="fas fa-cart-plus fa-lg"  onclick="addedToCart(${item.id})"></i></li>
                

                 ${
                  item.isMe === "Y" &&
                  "<button class='edit-product' onclick='editProduct(" +
                    item.id +
                    ")'>Edit</button>"
                }
                
            </ul>
    
        </div>
    </div>
</div>
    <div class="item-desc not-rated">
    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
    <p>${item.title}"</p>
    <span> Size: ${item.size} </span>
    <span>&dollar;260 <s>&dollar;300</s></span>
</div>
</div>
    `;
  });

  productsDom.innerHTML = productsUI.join(""); //back
})(JSON.parse(localStorage.getItem("products")) || products);

