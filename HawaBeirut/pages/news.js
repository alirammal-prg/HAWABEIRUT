function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight && elementBottom > 0) {
            element.classList.add('animate');
        } else {

            element.classList.remove('animate');
        }
    });
}


let scrollTimeout;
function throttledScroll() {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            animateOnScroll();
            scrollTimeout = null;
        }, 16); // ~60fps
    }
}


document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav .link a").forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

});

window.addEventListener('scroll', throttledScroll);

window.addEventListener('resize', animateOnScroll);