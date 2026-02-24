
    const boneco = document.getElementById('boneco-interativo');

    document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const larguraTela = window.innerWidth;

    // Lógica simples dividindo a tela em colunas
    if (x < larguraTela * 0.2) {
        // Mouse muito à esquerda -> Mostra o 1º boneco
        boneco.style.backgroundPosition = '-1810px 0';
    } else if (x < larguraTela * 0.4) {
        // Mouse levemente à esquerda -> Mostra o 2º boneco
        boneco.style.backgroundPosition = '-7px 0';
    } else if (x < larguraTela * 0.6) {
        // Mouse no centro -> Mostra o 3º boneco
        boneco.style.backgroundPosition = '-460px 0';
    } else if (x < larguraTela * 0.8) {
        // Mouse levemente à direita -> Mostra o 4º boneco
        boneco.style.backgroundPosition = '-460px 0';
    } else {
        // Mouse muito à direita -> Mostra o 5º boneco
        boneco.style.backgroundPosition = '-898px 0';
    }
    });