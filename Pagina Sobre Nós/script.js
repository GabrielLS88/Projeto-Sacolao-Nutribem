document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('open');
    const popUp = document.getElementById('pop');
    const closeButton = document.getElementById('close');
    const overlay = document.getElementById('overlay');
    
    openButton.addEventListener('click', function() {
        popUp.style.display = 'block'; // Mostra o pop
        overlay.style.display = 'block'; // Exibe o overlay
    });
    
    closeButton.addEventListener('click', function() {
        popUp.style.display = 'none'; // Esconde o pop
        overlay.style.display = 'none'; // Esconde o overlay
    });
});