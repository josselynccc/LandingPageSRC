const show_menu = (toggleId,navId) =>{
    const toggle= document.getElementById(toggleId)
    const nav=document.getElementById(navId)
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

show_menu('main-menu-toggle','main-nav')


document.addEventListener("scroll", function(){
    const scrolly = window.scrollY
    const traslatey = scrolly * 0.6

    document.querySelector(".cohete").style.transform = `translate(0%, calc(-700% + ${traslatey}px))`
})