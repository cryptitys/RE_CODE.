// Copiar código de bookmarklet
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const code = e.target.getAttribute('data-code');
        navigator.clipboard.writeText(code);
        e.target.textContent = 'Copiado!';
        setTimeout(() => {
            e.target.textContent = 'Copiar';
        }, 2000);
    });
});
// Filtro de tutoriais
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove classe 'active' de todos os botões
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Adiciona 'active' no botão clicado
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const videos = document.querySelectorAll('.video-card');
        
        videos.forEach(video => {
            if (filter === 'all' || video.getAttribute('data-category') === filter) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    });
});
