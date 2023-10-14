"use strict"
// document.addEventListener("DOMContentLoaded",function(){
//   // Auto typing text 
//   let typing =  new Typed("#type",{
//       strings:["Web Developer","Wordpress Developer","Video Editor","Content Writer","Graphic Designer","Learner"],
//       typeSpeed: 120,
//       backSpeed: 120,
//       loop: true
//   })
// })



function QuotesFetch(){
    URL='https://api.quotable.io/random';
  /* margin: 10px 0; */
    URL='https://zenquotes.io/api/quotes';
    fetch(url)
    .then(response=>response.json())
    .then(response=>{
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    })
}
