const videoContainers = document.querySelectorAll('.projects-section article');

videoContainers.forEach(container => {
    const video = container.querySelector('video') as HTMLVideoElement;

    container.addEventListener('mouseenter', () => {
        console.log('¡Hola!');
        video.play();
    });

    container.addEventListener('mouseleave', () => {
        console.log('¡Adiós!');
        video.pause();
    });
});
