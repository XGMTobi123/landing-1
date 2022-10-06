// Next/previous controls
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Set the date we're counting down to
let countDownDate = new Date(Date.parse(new Date()) + 30 * 60 * 1000);

// Update the count down every 1 second
let x = setInterval(function () {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    if (seconds < 10) {
        document.getElementsByClassName("timer")[0].innerHTML = minutes + ":0" + seconds;
    } else {
        document.getElementsByClassName("timer")[0].innerHTML = minutes + ":" + seconds;
    }


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("timer")[0].innerHTML = "EXPIRED";
    }
}, 1000);


