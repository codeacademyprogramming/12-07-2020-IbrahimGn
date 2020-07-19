$(document).ready(function() {
    let itemCount = $('.slider-element').length;
    $('.slider-images').css('width', itemCount * 100 + '%');
    $('.slider-element').css('width', 100 / itemCount + '%');
    let count = 0;

    function rightClick() {
        if (count < (itemCount - 1)) {
            count++;
            $('.slider-images').animate({
                'margin-left': '-' + 100 * count + '%'
            })
        } else {
            $('.slider-images').animate({
                'margin-left': '0'
            })
            count = 0;
        }
    }

    $('.right').click(rightClick);

    $('.left').click(function() {
        if (count > 0) {
            count--;
            $('.slider-images').animate({
                'margin-left': '-' + 100 * count + '%'
            })
        } else {
            $('.slider-images').animate({
                'margin-left': '-' + 100 * (itemCount - 1) + '%'
            })
            count = (itemCount - 1);
        }
    })

    let slideInterval = setInterval(rightClick, 2000);
    $('.right, .left').mouseenter(function() {
        clearInterval(slideInterval);
    })
    $('.right, .left').mouseleave(function() {
        slideInterval = setInterval(rightClick, 2000);
    })
});