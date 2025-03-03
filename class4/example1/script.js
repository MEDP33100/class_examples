document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!

    gsap.to('.spin', {
        duration: 1, 
        rotation: 360,
        repeat: -1,
        ease: 'power1.out'
    });

    gsap.from('.bounce', {
        y: -20,
        duration: 1,
        repeat: -1,
        ease: 'bounce',
        yoyo: true,
    })

    const timeline = gsap.timeline({repeat: -1, repeatDelay: 1});
    timeline.to('.lick', {
        scale: 1.5
    });
    timeline.to('.lick', {
        y: -20
    });
    timeline.to('.lick', {
        scale: 1,
        y: 0,
    })
});