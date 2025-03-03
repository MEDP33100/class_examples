document.addEventListener("DOMContentLoaded", (event) => {
    const bars = document.querySelectorAll('.bar');
    var timeline = gsap.timeline({ delay: 1 });
    bars.forEach(function (bar) {
        const label = bar.querySelector('.label');
        timeline.from(bar, {
            height: '0%',
            duration: 0.5,
            ease: "bounce.out",
        });
        timeline.from(label, {
            opacity: 0,
            duration: 0.3,
        })
    });
});