"use strict"
document.addEventListener("DOMContentLoaded",function(){
  // Auto typing text 
  let typing =  new Typed("#type",{
      strings:["Web Developer","Wordpress Developer","Video Editor","Content Writer","Graphic Designer","Learner"],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true
  })
  //image Changing Animation
  let img = document.querySelector(".img");
  let i=2;
  setInterval(() => {
    if(i==13)
      i=1;
    let styledata=`background: url('/img/img${i}.jpg') center center/cover;`;
    if(i%2){
      styledata+="transform: rotatey(360deg);"
    }else{
    styledata+="transform: rotatey(720deg);"
    }
    console.log(styledata);
    img.style=styledata;
    i++;
  }, 5000);
})
