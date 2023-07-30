"use strict"
document.addEventListener("DOMContentLoaded",function(){
  // Auto typing text 
  let typing =  new Typed("#type",{
      strings:["Web Developer","Wordpress Developer","Video Editor","Content Writer","Graphic Designer","Learner"],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true
  })
})
//image Changing Animation
let img = document.querySelector(".img");
setInterval(() => {
  if(img.classList.contains("img1")){
    img.classList.remove("img1");
  }else{
    img.classList.add("img1");
  }
}, 5000);
