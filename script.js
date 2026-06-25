window.addEventListener("scroll",()=>{

const cards=document.querySelectorAll(".card,.project-card,.pub");

cards.forEach(card=>{

const position=card.getBoundingClientRect().top;

if(position<window.innerHeight-100){

card.style.opacity=1;
card.style.transform="translateY(0px)";
}

});

});

const roles = document.querySelectorAll(".role");

let currentRole = 0;

setInterval(() => {

    roles.forEach(role => {
        role.classList.remove("active");
    });

    roles[currentRole].classList.add("active");

    currentRole++;

    if(currentRole >= roles.length){
        currentRole = 0;
    }

}, 2000);
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;

function showSlide(index){

    slides.forEach(slide =>
        slide.classList.remove('active')
    );

    slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
});

prevBtn.addEventListener('click', () => {

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);
});

setInterval(() => {

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

}, 4000);