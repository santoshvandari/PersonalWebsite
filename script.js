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

    let url='https://type.fit/api/quotes';
    fetch(url)
    .then(response=>response.json())
    .then(response=>{
        document.getElementById("quotes").textContent = response[Random(0,16)].text;
        document.getElementById("author").textContent = "- "+(response[Random(0,16)].author).split(',')[0];
        setTimeout(QuotesFetch,10000);
    })
    .catch(error=>{
        console.log(error);
    })
}

QuotesFetch();
let Random = (mix,max)=> Math.floor(Math.random()*(max-mix+1)+mix);