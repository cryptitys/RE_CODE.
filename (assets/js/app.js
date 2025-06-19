// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Particles.js Config
document.addEventListener('DOMContentLoaded', () => {
    particlesJS.load('particles-js', 'assets/js/particles-config.json');
});
