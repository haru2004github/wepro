let navIcon = document.querySelector(".navIcon")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let aside = document.querySelector("#aside");

navIcon.addEventListener('click' ,()=>{
    one.classList.toggle('active')
    two.classList.toggle('active')
    three.classList.toggle('active')

    
    aside.classList.toggle("-translate-x-full")
})