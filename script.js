
// when you click on one star it change its color to gold

let star=document.getElementsByClassName("fa-star")
for(let index=0;index<star.length;index++){
    star[index].addEventListener("click",function(){
        star[index].style.filter="brightness(0) saturate(100%) invert(75%) sepia(82%) saturate(546%) hue-rotate(357deg) brightness(99%) contrast(106%)"
    })
}
