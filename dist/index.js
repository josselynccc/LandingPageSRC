document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar/ocultar el menú
    const show_menu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        }
    };

    
    const mediaQuery = window.matchMedia("(min-width: 1500px)");
    if (mediaQuery.matches) {
        const cohete = document.querySelector(".cohete")

        if(cohete){
            // Función para el efecto de paralaje en el cohete
            window.addEventListener('scroll', function() {
                const scrolly = window.scrollY;
                const traslatey = scrolly * 0.6;
                cohete.style.transform = `translate(0%, calc(-700% + ${traslatey}px))`;
                
            });
        }
    }
    

    // Función para manejar la navegación del carrusel hacia la izquierda
    const btnleft = document.querySelector(".btn-left");
    if(btnleft){
        btnleft.addEventListener("click", function() {
            left();
        });
    }
    

    // Función para manejar la navegación del carrusel hacia la derecha
    const btnright = document.querySelector(".btn-right");
    if(btnright){
        btnright.addEventListener("click", function() {
            right();
        });
    }
    

    // Variables para el carrusel
    const slidercontent = document.querySelector(".slider--content");
    const slidersection = document.querySelectorAll(".slider--section");
    let operacion = 0;
    let i = 0;
    const widthImg = 100 / slidersection.length;

    // Función para mover el carrusel hacia la izquierda
    function left() {
        if (i < 0) {
            if(slidersection && widthImg){
                i = slidersection.length - 1;
                operacion = widthImg * (slidersection.length - 1);
            }
            
        } else {
            i--;
            if(slidersection && widthImg){
                operacion = operacion - widthImg;
                slidercontent.style.transition = `all 1s ease-out`;
            }
            
        }
        if(slidercontent){
            slidercontent.style.transform = `translateX(-${operacion}%)`;
        }
        
    }

    // Función para mover el carrusel hacia la derecha
    function right() {
        if (i >= slidersection.length - 1) {
            i = 0;
            operacion = 0;
            if(slidercontent){
            slidercontent.style.transition = `none`;}
        } else {
            i++;
            if(widthImg && slidercontent){
                operacion = operacion + widthImg;
                slidercontent.style.transition = `all 1s ease-out`;
            }
            
        }
        if(slidercontent){
        slidercontent.style.transform = `translateX(-${operacion}%)`;}
    }

    // Función para cambiar la opacidad del header al hacer scroll
    const head = document.querySelector(".main-header");
    if (head){
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                head.classList.add('main-header-transparent');
            } else {
                head.classList.remove('main-header-transparent');
            }
        });
    }

    // Iniciar la función para mostrar/ocultar el menú
    show_menu('main-menu-toggle', 'main-nav');

    // Iniciar el carrusel automáticamente cada 3 segundos
    if (slidercontent && slidersection.length > 0) {
        setInterval(right, 3000);
    }

    // Seleccionar el div y eliminarlo en el formulario
    
    const infoUsuario = document.querySelector('.l-form-info-usuario')
    const inputUsuario = document.querySelector('.inputNombre')
    if (infoUsuario && inputUsuario) {
        infoUsuario.addEventListener('click', ()=>{
            infoUsuario.style.visibility = 'hidden'
            inputUsuario.focus()
            
            
        })
        inputUsuario.addEventListener('click', ()=>{
            infoUsuario.style.visibility = 'hidden'}
        )
    }
    

    const inputEmail = document.querySelector('.inputEmail')
    const infoEmail = document.querySelector('.l-form-info-email')
    if (infoEmail && inputEmail) {
        infoEmail.addEventListener('click', ()=>{
            infoEmail.style.visibility = 'hidden'
            inputEmail.focus()
        })
        inputEmail.addEventListener('click', ()=>{
            infoEmail.style.visibility = 'hidden'}
        )
    }
    

    const inputCel = document.querySelector('.inputCel')
    const infoCelular = document.querySelector('.l-form-info-celular')

    if(infoCelular && inputCel){
        infoCelular.addEventListener('click', ()=>{
            infoCelular.style.visibility = 'hidden'
            inputCel.focus()
        })


        inputCel.addEventListener('click', ()=>{
            infoCelular.style.visibility = 'hidden'
            
        })}

    const inputS = document.querySelector('.inputS')
    const infoGrado = document.querySelector('.l-form-info-grado')

    if (infoGrado && inputS) {
        infoGrado.addEventListener('click', ()=> {
            infoGrado.style.visibility = 'hidden';
        });
        inputS.addEventListener('click', ()=> {
            infoGrado.style.visibility = 'hidden';
        });
    }
    
    

    const inputM = document.querySelector('.inputM')
    const infoMensaje = document.querySelector('.l-form-info-mensaje')
    if(infoMensaje && inputM){
        infoMensaje.addEventListener('click', ()=>{
            infoMensaje.style.visibility = 'hidden'
            inputM.focus()
        })
    }
    
    const event = document.querySelector('.event')
    if(event){
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 1400) {
                event.classList.add('event-active')
            } else{
                event.classList.remove('event-active')
            }
        })
    }
});