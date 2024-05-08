function verificarIdade() 
{
    const inputIdade = document.getElementById('idade');
    const aviso = document.getElementById('aviso');
    const formularioIdade = document.getElementById('formularioIdade');
function IrParaPaginaDeCompra(){
    window.location.href='Comprar.html'
}
    const idade = parseInt(inputIdade.value);

    if (isNaN(idade) || idade < 0 || idade > 110) {
        aviso.textContent = 'Por favor, digite uma idade válida (entre 0 e 110).';
        inputIdade.value = '';
    } 
    else if (idade < 18){
        window.location.href = 'https://www.rihappy.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=[INST]Ri_Happy_Sul_e_Sudeste&gad_source=1&gclid=Cj0KCQjwir2xBhC_ARIsAMTXk87MqmyVNBW5qMafPOykzu2r0RAiAt0847S36PP8X9uhyRZhAiiYHpAaAgNgEALw_wcB';
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

function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('popup').style.display = 'block';
    document.getElementById('contact-form').reset(); 
  });

