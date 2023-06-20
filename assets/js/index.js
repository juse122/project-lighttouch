// Swiper slider initialization //

import { Swiper } from "./swiper-9.4.1-bundle.esm.browser.min.js";

const swiperOne = new Swiper(".swiper-1", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination-1",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev-1",
        nextEl: ".swiper-button-next-1",
    },
});

const swiperTwo = new Swiper(".swiper-2", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev-2",
        nextEl: ".swiper-button-next-2",
    },
});

const swiperThree = new Swiper(".swiper-3", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination-3",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev-3",
        nextEl: ".swiper-button-next-3",
    },
});



// Details elements toggle plus/minus symbol on open/close //

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

const submitButtonElement = document.querySelector(".main-contact-form-button");

submitButtonElement.addEventListener("click", async (event) => {
    event.preventDefault();

    const formElement = document.querySelector(".main-contact-form");
    const successElement = document.querySelector(".success");
    const errorElement = document.querySelector(".error");

    try {
        await fetch(formElement.action, {
            method: formElement.method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: new FormData(formElement),
        });

        errorElement.style.display = "none";
        successElement.style.display = "flex";

    } catch (error) {
        successElement.style.display = "none";
        errorElement.style.display = "flex";
        errorElement.querySelector("p").innerText = error;
    };
});
