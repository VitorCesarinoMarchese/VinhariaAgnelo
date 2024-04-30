function verificarIdade() 
{
    const inputIdade = document.getElementById('idade');
    const aviso = document.getElementById('aviso');
    const formularioIdade = document.getElementById('formularioIdade');

    const idade = parseInt(inputIdade.value);

    if (isNaN(idade) || idade < 0 || idade > 110) {
        aviso.textContent = 'Por favor, digite uma idade válida (entre 0 e 110).';
        inputIdade.value = '';
    } 
    else if (idade < 18){
        aviso.textContent = 'Você deve ser maior de idade para acessar o site.'
    }
    else {
        aviso.textContent = '';
        formularioIdade.style.display = 'none';
    }
}

function Login() {
    window.location.href="login.html";
}

function UsuarioSenha() {
    const inputSenha = document.getElementById('senha');
    const inputUsuario = document.getElementById('usuario');
    const logar = document.getElementById('logar');

    const usuario = inputUsuario.value;
    const senha = inputSenha.value;

    if (usuario === "1234" && senha === "1234") {
        logar.textContent = 'Login concluído.'
    } 
    else {
        logar.textContent = 'Usuário ou senha incorretos, por favor tente novamente.';
    }

    window.location.href="index.html";
}
