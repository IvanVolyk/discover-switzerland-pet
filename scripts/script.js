var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
});

$(document).ready(function(){
    $('.icon').click(function(){
        $('.seacrh').toggleClass('active')
    });
});

function toggleMenu(e) {
    e.classList.toggle("open");
}

function menuToggle() {
    var nav = document.getElementById('menu');
    nav.classList.toggle('burger');

    var nav = document.getElementById('toggleIcon');
    nav.classList.toggle('burger');
}

function menuToggle2() {
    var nav = document.getElementById('menu2');
    nav.classList.toggle('burger2');

    var nav = document.getElementById('toggleIcon2');
    nav.classList.toggle('burger2');
}

function menuToggle3() {
    var nav = document.getElementById('menu3');
    nav.classList.toggle('burger3');

    var nav = document.getElementById('toggleIcon3');
    nav.classList.toggle('burger3');
}

function menuToggle4() {
    var nav = document.getElementById('menu4');
    nav.classList.toggle('burger4');

    var nav = document.getElementById('toggleIcon4');
    nav.classList.toggle('burger4');
}

function menuToggle5() {
    var nav = document.getElementById('menu5');
    nav.classList.toggle('burger5');

    var nav = document.getElementById('toggleIcon5');
    nav.classList.toggle('burger5');
}