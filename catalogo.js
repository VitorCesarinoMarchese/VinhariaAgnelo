var cupom=document.getElementById('cupom').value;
function aplicar(){
    var cupom=document.getElementById('cupom').value;

    if (cupom === 'FIAP2024'){

        desconto.innerHTML= "Você tem um desconto de 10%"
    }

    else{

        desconto.innerHTML="Cupom inválido"
    }

}