const show_menu = (toggleId,navId) =>{
    const toggle= document.getElementById(toggleId)
    const nav=document.getElementById(navId)
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Tu código aquí
    show_menu('main-menu-toggle', 'main-nav');
    // Otro código...
});

document.addEventListener("scroll", function(){
    const scrolly = window.scrollY
    const traslatey = scrolly * 0.6

    document.querySelector(".cohete").style.transform = `translate(0%, calc(-700% + ${traslatey}px))`
})

const btnleft=document.querySelector(".btn-left")
const btnright=document.querySelector(".btn-right")
const slidercontent=document.querySelector(".slider--content")
const slidersection=document.querySelectorAll(".slider--section")
let operacion=0
let i=0
let widthImg= 100/slidersection.length

setInterval(() => {
    right()
}, 3000);

btnleft.addEventListener("click", e =>{
    left()
})

function left(){
    if(i<0){
        i = slidersection.length-1
        operacion = widthImg * (slidersection.length-1)
        slidercontent.style.transform=`translateX(-${operacion}%)`
    }
    else{
        i--
        operacion = operacion - widthImg
        slidercontent.style.transform=`translateX(-${operacion}%)`
        slidercontent.style.transition=`all 1s ease-out`
    }
    
}

btnright.addEventListener("click", e =>{
    right()
})

function right(){
    if(i>=slidersection.length-1){
        i=0
        operacion=0
        slidercontent.style.transform=`translateX(-${operacion}%)`
        slidercontent.style.transition=`none`
    }else{
        i++
        operacion = operacion + widthImg
        slidercontent.style.transform=`translateX(-${operacion}%)`
        slidercontent.style.transition=`all 1s ease-out`
    }
    
}

