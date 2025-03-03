function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!

    const containerElement = document.querySelector('.container')

    for (let i = 0; i < 100; i++) {
        const cloudElement = document.createElement('span');
        cloudElement.innerHTML = '☁️';
        cloudElement.classList.add('cloud');
        const randYPosition = getRandomNumber(0, containerElement.offsetHeight) + 'px';
        cloudElement.style.top = randYPosition;
        const randXPosition = getRandomNumber(0, containerElement.offsetWidth) + 'px';
        cloudElement.style.left = randXPosition;

        containerElement.appendChild(cloudElement);
    }

    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        // gsap.to(cloud, {
        //     scrollTrigger: {
        //         trigger: cloud,
        //         // markers: true,
        //         start: 'top 70%',
        //         // scrub: true,
        //     },
        //     opacity: 1,
        //     duration: 2,
        // });

        // gsap.from(cloud, {
        //     scrollTrigger: {
        //         trigger: cloud,
        //         start: 'top 10%',
        //     },
        //     opacity: 1,
        //     duration: 2,
        // });

        const tl = gsap.timeline({});
        tl.to(cloud, {
            scrollTrigger: {
                trigger: cloud,
                // markers: true,
                start: 'top 70%',
                scrub: true,
            },
            opacity: 1,
            duration: 2,
        })
        tl.to(cloud, {
            scrollTrigger: {
                trigger: cloud,
                // markers: true,
                start: 'top 10%',
                scrub: true,
            },
            opacity: 0,
            duration: 2,
        })
    })
    
});

