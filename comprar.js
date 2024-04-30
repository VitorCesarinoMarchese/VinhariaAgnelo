var cupom = document.getElementById("cupom").value;
let ValorFinal = 0;
function aplicar() {
  var cupom = document.getElementById("cupom").value;
  if (cupom === "FIAP2024") {
    desconto.innerHTML = "Você tem um desconto de 10%";
    document.getElementById("ValorFinal").innerHTML = ValorFinal * 0.9
  } else {
    desconto.innerHTML = "Cupom inválido";
  }
}
function irDetalheVinho(n) {
  let divDetalhe = document.querySelector(".detalhe");
  divDetalhe.classList.remove("none");
  document.querySelector(".conteudo").classList.add("none")
  
  let divVinho = document.getElementById(`vinho${n}`);
  let preco = divVinho.querySelector("#preco-vinho").innerHTML;
  let nome = divVinho.querySelector("#nome-vinho").innerHTML;
  let img = divVinho.querySelector("#img-vinho").src;
  let desc = divVinho.querySelector("#vinho-desc").innerHTML
  for (let i = 1; i <= 4; i++) {
    if (n == i) {
      divDetalhe.querySelector(".img-vinho").src = img;
      divDetalhe.querySelector(".nome-vinho").innerHTML = nome;
      divDetalhe.querySelector(".text-vinho").innerHTML = desc;
      divDetalhe.querySelector(".preco-vinho").innerHTML = preco;
    }
  }
}
function sum() {
  let divDetalhe = document.querySelector(".detalhe");
  window.alert("Item Adicionado ao carrinho")
  divDetalhe.classList.add("none")
  let preco = Number(document.querySelector(".preco-vinho").innerHTML);
  ValorFinal += preco;
  document.getElementById("ValorFinal").innerHTML = ValorFinal
  document.querySelector(".conteudo").classList.remove("none")
  aplicar()
}
