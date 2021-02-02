
const sec01 = document.getElementById('main-kv');
const sec02 = document.getElementById('redesign');
const sec03 = document.getElementById('resume');
const sec04 = document.getElementById('contact');

let titStart = document.querySelector('.tit');

function startPortFolio(){
    titStart.innerHTML = 'START';
    titStart.classList.remove('fade-out');
    titStart.classList.add('fade-in');
}

function topScrollHeading() {
    titStart.innerHTML = 'My portfolio';
    titStart.classList.add('fade-in');
}

window.addEventListener('scroll', (e) => {
    let scrollLoc = document.documentElement.scrollTop;
    let coffee = document.querySelector('.coffee');
    let diary = document.querySelector('.diary');

    if(scrollLoc >= 500) {
        coffee.classList.add('act');
        diary.classList.add('act');
        startPortFolio();
    } else if(scrollY < 500) {
        coffee.classList.remove('act');
        diary.classList.remove('act');
        topScrollHeading();
    }


});