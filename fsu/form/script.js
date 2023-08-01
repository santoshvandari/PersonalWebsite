let name=document.getElementById("name");
let question=document.getElementById("question");
let problem=document.getElementById("problem");
let suggestion=document.getElementById("suggestion");
let nameerror=document.getElementById("nameerror");
let msgerror=document.getElementById("textareaerror");
document.getElementById("send").addEventListener("click",function(e){
    let data=question.value.trim()+problem.value.trim()+suggestion.value.trim();
    e.preventDefault();
    let length = data.length;
    console.log(length)
    if(!(name.value)){
        nameerror.textContent="* Please Enter Your Name";
    }else{
        nameerror.textContent="";
    }
    if(!data){
        msgerror.textContent="* Please Fill one of the Field";
    }else if(length<50){
        msgerror.textContent="* Please Explain in More than 50 Characters.";
    }else{
        msgerror.textContent="";
    }
    if(data&&length>50&& name.value){
        document.getElementById("submit").click();
    }
})

