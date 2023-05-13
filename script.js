let burgerIcon = document.querySelector(".burger-icon");
let uList = document.querySelector("ul");

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    uList.classList.toggle("open");
});