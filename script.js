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
    }) ;
});

document.addEventListener('DOMContentLoaded', function() {
    const openButtonProdutos = document.getElementById('btn-produtos');
    const popUpProdutos = document.getElementById('pop-produtos');
    const closeButtonProdutos = document.getElementById('close-produtos');
    const overlay = document.getElementById('overlay');
    
    openButtonProdutos.addEventListener('click', function() {
        popUpProdutos.style.display = 'block'; // Mostra o pop
        overlay.style.display = 'block'; // Exibe o overlay
    });
    
    closeButtonProdutos.addEventListener('click', function() {
        popUpProdutos.style.display = 'none'; // Esconde o pop
        overlay.style.display = 'none'; // Esconde o overlay
    }) ;
});