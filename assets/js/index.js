import { Swiper } from "./swiper-9.4.1-bundle.esm.browser.min.js";

// https://codepen.io/i-did/pen/yLYRvVL
// https://codepen.io/bradtraversy/pen/ExNVwgZ
// https://stackoverflow.com/questions/72709006/video-touch-slider-with-html-css-javascript



// Swiper slider #1 //

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});



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



// Contact form submit message & error handling

// <i class="fa-solid fa-circle-check"></i>
// <i class="fa-solid fa-circle-exclamation"></i>
