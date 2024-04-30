function verificarIdade() {
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