let offset = 0;
const sliderLine = document.querySelector('.carusel2');

document.querySelector('.nextbtn2').addEventListener('click', function(){
    offset = offset + 220;
    if (offset > 880) {
        offset = 880;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prevbtn2').addEventListener('click', function () {
    offset = offset - 220;
    if (offset < 0) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});