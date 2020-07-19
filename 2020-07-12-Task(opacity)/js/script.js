const right = document.querySelector(`.right`);
const left = document.querySelector(`.left`);
const images = document.querySelector(`.slider-images`);


const rightClick = function() {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add('active');
    } else {
        images.firstElementChild.classList.add('active');
    }
}
const leftClick = function() {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add('active');
    } else {
        images.lastElementChild.classList.add('active');
    }
}

let slideInterval = setInterval(rightClick, 2000)


right.addEventListener('click', rightClick);

left.addEventListener('click', leftClick);

right.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
})
left.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
})
right.addEventListener('mouseleave', function() {
    slideInterval = setInterval(rightClick, 2000)
})
left.addEventListener('mouseleave', function() {
    slideInterval = setInterval(rightClick, 2000)
})