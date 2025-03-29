document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    const text = "AI Workflows Hub";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    title.textContent = "";
    typeEffect();

    window.addEventListener("scroll", function() {
        const services = document.querySelectorAll(".service");
        services.forEach(service => {
            const position = service.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                service.style.opacity = "1";
                service.style.transform = "translateY(0)";
            }
        });
    });
});
