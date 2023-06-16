// Carousel slider //

// https://codepen.io/i-did/pen/yLYRvVL
// https://codepen.io/bradtraversy/pen/ExNVwgZ
// https://stackoverflow.com/questions/72709006/video-touch-slider-with-html-css-javascript



const slides = document.querySelectorAll(".main-lt-reasons-slider-slide");
const slideAmount = slides.length;
const previousButton = document.querySelector(".main-lt-reasons-slider-arrow-previous");
const nextButton = document.querySelector(".main-lt-reasons-slider-arrow-next");
const controlButtons = document.querySelectorAll(".main-lt-reasons-slider-control-button");
let slidePosition = 0;

const hideSlides = () => {
    slides.forEach(slide => {
        slide.classList.remove("visible");
        slide.classList.add("hidden");
    });

    controlButtons.forEach(button => button.classList.remove("selected"));
};

const showPreviousSlide = () => {
    hideSlides();

    if (slidePosition === 0) {
        slidePosition = slideAmount - 1;
    } else slidePosition--;

    slides[slidePosition].classList.add("visible");
    controlButtons[slidePosition].classList.add("selected");
};

const showNextSlide = () => {
    hideSlides();

    if (slidePosition === slideAmount - 1) {
        slidePosition = 0;
    } else slidePosition++;

    slides[slidePosition].classList.add("visible");
    controlButtons[slidePosition].classList.add("selected");
};

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);



// Details elements plus/minus symbol switch on open/close //

const detailsElements = document.querySelectorAll("details");

detailsElements.forEach(element => {
    const summaryElement = element.querySelector("summary");
    const spanElement = summaryElement.querySelector("span");

    summaryElement.addEventListener("click", () => {
        if (element.hasAttribute("open")) {
            spanElement.innerHTML = `<i class="fa-solid fa-plus"></i>`;

        } else {
            spanElement.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        };
    });
});
