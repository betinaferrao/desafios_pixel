function validarNomeCartao(nome) {
    return nome.trim().length > 0;
}

function validarNomeTitular(nome) {
    return nome.trim().length > 0;
}

function validarDataValidade(data) {
    return /\d{2}\/\d{2}/.test(data); 
}

function validarCVV(cvv) {
    return cvv.trim().length === 3 && !isNaN(cvv);
}

function validarFormulario(event) {
    event.preventDefault(); 

    const nomeCartao = document.getElementById('cardName').value;
    const nomeTitular = document.getElementById('cardHolder').value;
    const dataValidade = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cw').value;

    const nomeCartaoError = document.getElementById('cardNameError');
    const nomeTitularError = document.getElementById('cardHolderError');
    const dataValidadeError = document.getElementById('expiryDateError');
    const cvvError = document.getElementById('cwError');

    if (!validarNomeCartao(nomeCartao)) {
        nomeCartaoError.textContent = 'Por favor, insira um nome de cartão válido.';
        nomeCartaoError.style.display = 'block';
    } else {
        nomeCartaoError.style.display = 'none';
    }

    if (!validarNomeTitular(nomeTitular)) {
        nomeTitularError.textContent = 'Por favor, insira um nome de titular válido.';
        nomeTitularError.style.display = 'block';
    } else {
        nomeTitularError.style.display = 'none';
    }

    if (!validarDataValidade(dataValidade)) {
        dataValidadeError.textContent = 'Insira uma data de validade válida no formato mm/yy.';
        dataValidadeError.style.display = 'block';
    } else {
        dataValidadeError.style.display = 'none';
    }

    if (!validarCVV(cvv)) {
        cvvError.textContent = 'Insira um CVV válido!';
        cvvError.style.display = 'block';
    } else {
        cvvError.style.display = 'none';
    }

    if (validarNomeCartao(nomeCartao) && validarNomeTitular(nomeTitular) && validarDataValidade(dataValidade) && validarCVV(cvv)) {
        document.getElementById('cardName').value = '';
        document.getElementById('cardHolder').value = '';
        document.getElementById('expiryDate').value = '';
        document.getElementById('cw').value = '';
    }
}

document.getElementById('form').addEventListener('submit', validarFormulario);
