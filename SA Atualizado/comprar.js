
function MostrarLojas(){
    document.getElementById('div-retirada').style.display = 'block'
    document.getElementById('div-delivery').style.display = 'none'
}

function Endereco(){
    document.getElementById('div-retirada').style.display = 'none'
    document.getElementById('div-delivery').style.display = 'block'
}

// function Finalizar{
    
// }

function mudarTelaIni(){
    window.location.href = "PaginaInicial.html";
}

function mudarTelaCad(){
    window.location.href = "cadastro.html";
}