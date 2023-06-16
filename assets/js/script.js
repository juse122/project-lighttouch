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
