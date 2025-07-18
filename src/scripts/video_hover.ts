const videoContainers = document.querySelectorAll('.projects-section article');

videoContainers.forEach(container => {
    const video = container.querySelector('video') as HTMLVideoElement;
    
    // Solo aplicar lógica de video si existe un elemento video
    if (video) {
        // Pausar el video al cargar para mostrar el primer frame
        video.addEventListener('loadedmetadata', () => {
            video.currentTime = 0;
            video.pause();
        });

        container.addEventListener('mouseenter', () => {
            // Reproducir el video
            video.play();
        });

        container.addEventListener('mouseleave', () => {
            // Pausar el video y volver al inicio
            video.pause();
            video.currentTime = 0;
        });
    }
    // Para proyectos con imagen estática, no se necesita lógica adicional
});