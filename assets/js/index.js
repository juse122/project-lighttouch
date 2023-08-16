// Set copyright year //

document.querySelector("#copyright-year").innerText = new Date().getFullYear();



// Google Reviews Badge data fetch //

// place_id: ChIJOZAmnoxOqEcRLkyODcDKj58



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



// Contact form submit message & error handling //

const submitButtonElement = document.querySelector(".main-contact-form-button");

submitButtonElement.addEventListener("click", async (event) => {
    const formElement = document.querySelector("#main-contact-form");
    const successElement = document.querySelector(".success");
    const errorElement = document.querySelector(".error");

    event.preventDefault();

    if (formElement.checkValidity()) {
        try {
            // await grecaptcha.ready(() => {
            //     grecaptcha.execute("6Ldi2rwmAAAAAEjjzoaCv8X3A5hQWIKKS4E5RKJC", { action: "submit" })
            //     .then((token) => {
            //         console.log("Set reCAPTCHA token: " + token);
            //         document.querySelector("#recaptcha").value = token;
            //     });
            // });

            const response = await fetch(formElement.action, {
                method: formElement.method,
                headers: {
                    "Accept": "application/json",
                },
                body: new FormData(formElement),
            });

            const responseData = await response.json();

            if (responseData.success) {
                errorElement.style.display = "none";
                successElement.style.display = "flex";
                formElement.reset();

            } else throw new Error(responseData.error_msg);

        } catch (error) {
            errorElement.querySelector("p").innerText = error;
            successElement.style.display = "none";
            errorElement.style.display = "flex";
        };

    } else formElement.reportValidity();
});



// Contact form submit status message close function //

const closingButtonElements = document.querySelectorAll(".main-contact-form-notification-close");

closingButtonElements.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        
        element.parentElement.style.display = "none";
    });
});



// Create correct link scroll behaviour //

const hrLinkElements = document.querySelectorAll(".hr-link");
const cryoLinkElements = document.querySelectorAll(".cryo-link");
const contactLinkElements = document.querySelectorAll(".contact-link");

hrLinkElements.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();

        const hairremovalPageArea = document.querySelector("#hairremoval");
        const positionData = hairremovalPageArea.getBoundingClientRect();

        if (window.matchMedia("(min-width: 640px)").matches && window.matchMedia("(max-width: 959px)").matches) {
            window.scrollBy(0, positionData.y - 88);
        } else window.scrollBy(0, positionData.y - 112);
    });
});

cryoLinkElements.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();

        const cryolipolysisPageArea = document.querySelector("#cryolipolysis");
        const positionData = cryolipolysisPageArea.getBoundingClientRect();
        
        if (window.matchMedia("(min-width: 640px)").matches && window.matchMedia("(max-width: 959px)").matches) {
            window.scrollBy(0, positionData.y - 88);
        } else window.scrollBy(0, positionData.y - 112);
    });
});

contactLinkElements.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();

        const contactPageArea = document.querySelector("#contact");
        const positionData = contactPageArea.getBoundingClientRect();
        
        if (window.matchMedia("(min-width: 640px)").matches && window.matchMedia("(max-width: 959px)").matches) {
            window.scrollBy(0, positionData.y - 88);
        } else window.scrollBy(0, positionData.y - 112);
    });
});
