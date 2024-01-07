const botaoMais = document.getElementById('mais');
const botaoMenos = document.getElementById('menos');
const numeroPorcoes = document.getElementById('numero');

botaoMais.addEventListener('click', function() {
    aumentarPorcao();
});

botaoMenos.addEventListener('click', function() {
    diminuirPorcao();
});

function aumentarPorcao() {
    let numero = parseInt(numeroPorcoes.textContent);
    numero++;
    numeroPorcoes.textContent = numero < 10 ? `0${numero}` : numero;
}

function diminuirPorcao() {
    let numero = parseInt(numeroPorcoes.textContent);
    if (numero > 1) {
        numero--;
        numeroPorcoes.textContent = numero < 10 ? `0${numero}` : numero;
    }
}