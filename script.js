// script.js - Para futuras interatividades!

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Site de Casamento Pixelado Carregado!');
    // Adicione aqui futuras animações ou interatividades
});


// Data e hora do evento final (ex: 1º de janeiro de 2026, 00:00:00)
const dataFinal = new Date("Jul 4, 2026 15:30:00").getTime();

// Atualiza a contagem a cada 1 segundo
const x = setInterval(function() {

    // Pega a data e hora atuais
    const agora = new Date().getTime();

    // Calcula a distância entre a data final e a data atual
    const distancia = dataFinal - agora;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento com id="countdown"
    document.getElementById("countdown").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Quando a contagem chega a zero
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("textoContagem").innerHTML = "CASAMOS!";
        document.getElementById("countdown").innerHTML = '<p style="text-align: center;"><video width="100%"  autoplay muted loop> <source src="movies/videoCasamos.mp4" type="video/mp4"> Seu navegador não suporta a tag de vídeo.                            </video></p>';
        document.getElementsByClassName("grid-left")[0].innerHTML = '';
        document.getElementsByClassName("grid-rigth")[0].innerHTML = '';
    }

    
}, 1000);

// var y = document.getElementById("musica"); 
// y.play(); 


document.addEventListener('DOMContentLoaded', function() {
      const meuAudio = document.getElementById('meuAudio');
      const btnAudio = document.getElementById('btnAudio');
      const iconeAudio = document.getElementById('iconeAudio');

      btnAudio.addEventListener('click', function() {
        if (meuAudio.paused) {
          meuAudio.play();
          iconeAudio.classList.remove('fa-volume-mute');
          iconeAudio.classList.add('fa-volume-up');
        } else {
          meuAudio.pause();
          iconeAudio.classList.remove('fa-volume-up');
          iconeAudio.classList.add('fa-volume-mute');
        }
      });
    });