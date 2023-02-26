
// =====================      slider       ===========================
let slide_img =["images/slider_img/slider01.jpg","images/slider_img/slider02.png","images/slider_img/slider04.jpg","images/slider_img/slider03.jpg"];
var i=0;
let bbackTimeOut;
var slideshow=function(){
    if(backgroundOption==true){
        document.slideshow.src=slide_img[i];
if(i<slide_img.length-1)
{
  i++;
}
else{
  i=0;
}
backTimeOut=setTimeout("slideshow()",10000000);
}
    }
    slideshow();


















