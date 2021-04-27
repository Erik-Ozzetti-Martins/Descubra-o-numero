const inputNumero = document.getElementById("numero");
const status = document.getElementById("status");
const resultado = document.getElementById("resultado");
const tenti = document.getElementById("tente")

const guess = {
    max :10,
    tentaivas: 0,
    numeroAleatorio: function aleatorio () {
        return Math.round(Math.random() * this.max);
    }
}

let numAleatorio = guess.numeroAleatorio();

function atualizaTentativas (tenti, value) {
    tenti.innerHTML = `Tentativas:` + value
}

function calcular() {
    let numero = inputNumero.value;

    if (!numero) {
        alert("Digite algum numuro");
        return
    }
    atualizaTentativas(tenti, ++guess.tentaivas);
    
    if (numAleatorio == numero){
        JogarNovamente();
        status.innerHTML = "Parabens,vocẽ acertou"
        resultado.style.transition ="0.4s";
        resultado.style.background = '#37c978';
        resultado.style.color = '#fff'
        limpa();
    } else  if (numAleatorio > numero){
        status.innerHTML = "O numero e maior !";
        resultado.style.color = "#de4251"
        limpa()

    } else  if (numAleatorio < numero){      
        status.innerHTML = "O numero e menor !";
        status.style.color = "#de4251"
        limpa()
    }    
}

function limpa() {
    document.getElementById('numero').value = ""; 
}

function JogarNovamente() {
    document.getElementById('id').style.display = "flex";
}

function resete () {
    console.log("funcionou")
    document.location.reload(true)
}
