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
