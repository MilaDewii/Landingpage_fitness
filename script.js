document.addEventListener('DOMContentLoaded', () => {
    console.log('Fitness UI (Guidelines Applied) loaded!');

    const playButtons = document.querySelectorAll('.play-button-large, .play-button-small');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Placeholder for video playback.
            // In a real application, you'd integrate a video player (e.g., YouTube iframe in a modal).
            alert('Video playback initiated! (Placeholder)');
            console.log('Video play button clicked!');
        });
    });

    // Potential future JavaScript enhancements:
    // - Smooth scrolling for navigation links
    // - Mobile menu toggle
    // - Form validation for contact section (if it were a form)
});