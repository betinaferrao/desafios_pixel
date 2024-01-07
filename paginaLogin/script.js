
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


function validarSenha(senha) {
    return senha.length >= 6;
}


function validarFormulario(event) {
    event.preventDefault(); 


    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;


    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');


    if (!validarEmail(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

    if (!validarSenha(senha)) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }

    if (validarEmail(email) && validarSenha(senha)) {
        document.getElementById('email').value = '';
        document.getElementById('password').value = ''; 
    }
}


document.getElementById('form').addEventListener('submit', validarFormulario);