// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
    // Create the button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = 'Top';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
