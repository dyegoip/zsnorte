document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-number');
    const speed = 0.5; // Ajusta la velocidad global del contador

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-to');
            const count = +counter.innerText;
            const increment = target / (counter.getAttribute('data-speed') / speed);

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

