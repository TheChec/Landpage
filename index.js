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
    origin: 'top',
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

var contador = false;

function clickNavbarCellphone(){
    let nav = document.getElementById('nav')
    if(contador == false){
        contador=true;
        nav.style.display = "flex"
        nav.style.animation = "rightNav .6s ease"
        nav.style.transform = "translateX(0px)"
    }else if(contador == true){
        contador=false;
        nav.style.animation = "leftNav .6s ease"
        setTimeout(() => {
            nav.style.display = "none"

        }, 500);

    }
}



let projects = [];

fetch("./projects/projects.json")
.then(res => res.json())
.then(data => {

    projects = data.projects;

    document.querySelectorAll(".openProject").forEach(card => {

        card.addEventListener("click", () => {

            const id = card.dataset.id;
            openModal(id);

        });

    });

});

function openModal(id){

    const project = projects.find(p => p.id === id);
    if(!project) return;

    const modal = document.getElementById("modal");
    const modalBox = modal.querySelector(".Modal");

    const techH3 = modalBox.querySelector("#techH3");
    const modalTitle = document.getElementById("modalTitle");
    const modalVideo = document.getElementById("modalVideo");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const modalLink = document.getElementById("modalLink");
    const modalTech = document.getElementById("modalTech");

    modalTitle.textContent = project.title || "";

    if(project.video){
        modalVideo.src = project.video;
        modalVideo.style.display = "block";
        modalImage.style.display = "none";
        modalVideo.currentTime = 0;
    }else if(project.image){
        modalImage.src = project.image;
        modalImage.style.display = "block";
        modalVideo.style.display = "none";
        techH3.style.display = "none";

    }else{
        modalVideo.style.display = "none";
        modalImage.style.display = "none";
    }

    modalDescription.textContent = project.description || "";

    if(project.link){
        modalLink.href = project.link;
        modalLink.textContent = "Enlace a la página aquí";
        modalLink.style.display = "block";
    }else{
        modalLink.style.display = "none";
    }

    modalTech.innerHTML = "";

    if(project.technologies){
        project.technologies.forEach(tech => {
            const img = document.createElement("img");
            img.src = tech;
            modalTech.appendChild(img);
        });
    }

    modal.classList.add("openModal");
    modalBox.style.animation = "UpModal 0.6s ease";
}

function closeModal(){

    const modal = document.getElementById("modal");
    const modalBox = modal.querySelector(".Modal");

    modalBox.style.animation = "downModal 0.6s ease";

    setTimeout(()=>{
        modal.classList.remove("openModal");
        document.getElementById("modalVideo").pause();
    },500);

}

document.querySelectorAll(".openProject").forEach(card => {

    card.addEventListener("click", () => {

        const id = card.dataset.id;
        openModal(id);

    });

});

document.getElementById("closeModal").onclick = closeModal;

document.getElementById("modal").onclick = (e)=>{

    if(e.target.id === "modal"){
        closeModal();
    }

};