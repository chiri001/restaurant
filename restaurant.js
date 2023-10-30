$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
//javascript for events image
var all_images = ['Images/food1.jpg', 'Images/restr1.jpg', 'Images/restr2.jpg'];

var currentIndex = 0;

function showNextImage() {
    $('#image').fadeOut(1000, function () {
        $(this)
            .css('background-image', 'url(' + all_images[currentIndex] + ')')
            .fadeIn(1000);
        currentIndex++;
        if (currentIndex >= all_images.length) {
            //restart the loop
            currentIndex = 0;
        }
    });
}

//starts the fading of the image by calling showNextImage
function startFading() {
    //calls showNextImage immediately on load
    showNextImage();
    setInterval(showNextImage, 6000);
}

$(document).ready(function () {
    startFading();
});

//functiont to close popups on the page
function close_popup() {
    document.getElementById('popup').style.display = 'none';
}


function openMenu() {
    var sidemnu = document.getElementById('header-text');
    sidemnu.style.right = '0';
}

function closeMenu() {
    var sidemnu = document.getElementById('header-text');
    sidemnu.style.right = '-100%'; // Adjust as necessary
}
