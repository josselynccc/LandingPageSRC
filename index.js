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
