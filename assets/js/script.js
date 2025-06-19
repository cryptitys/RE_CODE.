function copyCode(button) {
    const code = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(code);
    button.textContent = "Copiado!";
    setTimeout(() => button.textContent = "Copiar", 2000);
}
