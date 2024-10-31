const imagens = document.querySelector('.imagens');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const totalImagens = document.querySelectorAll('.imagens img').length;
let index = 0;
const intervalTime = 3000; // Tempo em milissegundos para mudar a imagem

function updateCarrossel() {
    const translateX = -index * 100; // Calcula a posição da imagem
    imagens.style.transform = `translateX(${translateX}%)`;
}

function nextImage() {
    index = (index + 1) % totalImagens; // Incrementa o índice
    updateCarrossel();
}

// Muda a imagem automaticamente a cada intervalo definido
let interval = setInterval(nextImage, intervalTime);

nextButton.addEventListener('click', () => {
    clearInterval(interval); // Para o intervalo ao clicar
    nextImage();
    interval = setInterval(nextImage, intervalTime); // Reinicia o intervalo
});

prevButton.addEventListener('click', () => {
    clearInterval(interval); // Para o intervalo ao clicar
    index = (index - 1 + totalImagens) % totalImagens; // Decrementa o índice
    updateCarrossel();
    interval = setInterval(nextImage, intervalTime); // Reinicia o intervalo
});

