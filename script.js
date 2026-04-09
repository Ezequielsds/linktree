// Pequena animação ao carregar
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn, index) => {
        btn.style.opacity = 0;
        btn.style.transform = "translateY(20px)";

        setTimeout(() => {
            btn.style.transition = "0.5s";
            btn.style.opacity = 1;
            btn.style.transform = "translateY(0)";
        }, index * 200);
    });
});