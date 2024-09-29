// script.js
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.about-us, .vision, .mission, .international-standard-system img');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible'); // Remove class when not visible
        }
    });
});
