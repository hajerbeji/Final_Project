// variables

let heart=document.getElementsByClassName("like")
let del_btn=document.getElementsByClassName("delete")
let box=document.getElementsByClassName("box")

// For Loop
for(let index=0;index<heart.length;index++){
    // like button

    heart[index].addEventListener("click",function(){
        if(heart[index].style.color=="red"){
            heart[index].style.color="white"
        }else{
            heart[index].style.color="red"
        }
    })

    // End like button

    // delete button
    del_btn[index].addEventListener("click",function(){
        box[index].style="display: none"
    })

    // End delete button
}