window.sr = ScrollReveal();

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
        sr.reveal('.portada', {
            duration: 3000,
            origin: 'bottom',
            distance: '-100px',
        });
    }, 2500)

})

sr.reveal('.titles', {
    duration: 2000,
    origin: 'top',
    distance: '-150px',
    reset: true
})
sr.reveal('.linksApps', {
    duration: 2000,
    origin: 'top',
    distance: '-150px',
    reset: true
})
sr.reveal('.tech', {
    duration: 2000,
    origin: 'right',
    distance: '-150px',
    reset: true,

});
sr.reveal('.port', {
    duration: 2000,
    origin: 'right',
    distance: '-150px',
    reset: true,

});
sr.reveal('.parti', {
    duration: 2000,
    origin: 'right',
    distance: '-150px',
    reset: true,

});

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

function modalsOpen(id, idBoxModal){
    let modals = document.querySelectorAll(`#${id}`);
    let modalsAnimation = document.querySelectorAll(`#${idBoxModal}`);
    modals.forEach(modal => {
        modal.classList.add('openModal');
    })
    modalsAnimation.forEach(modal => {
        modal.style.animation = 'UpModal 1s ease';
    })
}
function modalsClose(id, idBoxModal){
    let modals = document.querySelectorAll(`#${id}`)
    let modalsAnimation = document.querySelectorAll(`#${idBoxModal}`);
    modalsAnimation.forEach(modal => {
        modal.style.animation = 'downModal 1s ease';
    })
    setTimeout(() => {
        modals.forEach(modal => {
            modal.classList.remove('openModal');
        })
    },500)
}