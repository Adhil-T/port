document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Reveal Animation
    const elementsToAnimate = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elementsToAnimate.forEach(el => observer.observe(el));

    // 2. Ultra-Smooth 3D Tilt Hover Effect
    const cards = document.querySelectorAll('.tilt-effect');
    
    cards.forEach(card => {
        // When mouse enters, apply a fast ease-out so it catches up to the cursor smoothly
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
        });

        // Mouse move tracks cursor and tilts card
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Subtle rotation degrees for a high-end feel
            const rotateX = ((y - centerY) / centerY) * -3; 
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // When mouse leaves, restore the buttery CSS cubic-bezier to gently snap it back into place
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
        });
    });
});