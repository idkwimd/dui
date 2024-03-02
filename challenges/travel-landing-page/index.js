gsap.to('.jumbotron', {
    y: 280,
    ease: 'none',
    scrollTrigger: {
        trigger: '.welcome',
        scrub: true,
        start: 'top top',
        end: 'bottom top'
    }
});
