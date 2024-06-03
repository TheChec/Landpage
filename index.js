window.addEventListener('load', () => {
    let modal = document.getElementById('charging')
    let circle = document.getElementById('onsize')
    let anotherCircle = document.getElementById('movein')

    setTimeout(() => {
        anotherCircle.style.display = 'none'
    },1500)
    
    setTimeout(() => {
        circle.style.display = 'block'
        circle.style.animation = 'tamaño3 1s linear'
    },1500)

        
    setTimeout(() => {
        modal.style.display = 'none'
    }, 2500)
})
nav.style.transition = 'transform 1s ease'


var contador = 0;

function clickNavbarCellphone(){
    let nav = document.getElementById('nav')
    let buttons = document.getElementById('buttonsNavBar')


    if(contador == 0){
        nav.style.boxShadow = "0 0 10px 2px rgba(255, 255, 255, 0.8)"
        nav.style.transform = 'translateX(0)'
        nav.style.transition = 'transform 1s ease'
        buttons.style.opacity = '1';
        buttons.style.transition = 'opacity 1s ease'
        contador=1;
    }else{
        nav.style.boxShadow = "none"
        buttons.style.opacity = '0';
        buttons.style.transition = 'opacity 1s ease'
        nav.style.transform = 'translateX(-300px)'
        nav.style.transition = 'transform 1s ease'
        contador=0;
    }
}

function modalsOpen(id){
    let modals = document.querySelectorAll(`#${id}`)
    modals.forEach(modal => {
        modal.classList.add('openModal')
    })
}
function modalsClose(id){
    let modals = document.querySelectorAll(`#${id}`)
    modals.forEach(modal => {
        modal.classList.remove('openModal')
    })
}