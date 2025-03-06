document.addEventListener(DOMContentLoaded, function() { 
    const aumentafonte = document.getElementById('aumenta-fonte');

    let fontsize = 1; 
    aumentafonteBotao.addEventListener('click', function() {
        TamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `$(tamanhoAtualFonte}rem)`
    })

    const diminuiFonteBotao = document.getElementById('diminui-fonte');
})