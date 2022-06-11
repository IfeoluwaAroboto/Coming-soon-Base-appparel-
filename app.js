const email = document.querySelector(".email")
const icon = document.querySelector(".icon")
const error = document.querySelector(".error")
const message =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const exlaim = document.querySelector(".fa-circle-exclamation")
const combine = document.querySelector(".combine")
function input(email){
if (email.value === ""){
   error.classList.add("show-error")
 email.style.borderColor= "red"
 exlaim.classList.add("show-circle")

 }

    else if(email.value.match (message)) {
        email.style.borderColor= "green"
        error.classList.remove("show-error")
        exlaim.classList.remove("show-circle")
        alert("Thank You")
       combine.style.display = "none" 
    }

}


icon.addEventListener("click", function(){
   
   return input(email)    
})