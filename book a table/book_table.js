// Make alerts for the booking section 

let btn=document.getElementsByTagName("button")[0]

btn.addEventListener("click",function(){
    let phone=document.getElementsByClassName("phone_number")[0].value
    let nom=document.getElementsByClassName("name")[0].value
    let message=document.getElementsByClassName("message")[0].value
    let persons=document.getElementsByClassName("persons")[0].value

    if(phone.length==0){
        alert("Phone Number is required")
    }
    if(isNaN(Number(phone))){
        alert("Phone number should be a number")
    }
    if(nom.length===0){
        alert("Name is required")
    }
    if(message.length===0){
        alert("But you didn't tell us what you like to eat !")
    }
    if(persons.length===0){
        alert("Please enter the number of persons !")
    }
    
})