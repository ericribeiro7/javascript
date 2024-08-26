var num = document.getElementById('num');
var tab = document.getElementById('seltab');
var valores = [];

function add(){
    var n = Number(num.value);
    if(n < 1 || n > 100){
        alert('Valor inválido');
    } else{
        valores.push(n);
        let item = document.createElement('option');
        item.textContent = `O número ${n} foi adicionado!`;
        tab.appendChild(item);
        num.value = ''; // Limpa o campo de entrada
        num.focus(); // Coloca o foco de volta no campo de entrada
    }
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!');
    } else {
        let total = valores.length;
        let soma = valores.reduce((acc, val) => acc + val, 0);
        let media = soma / total;

        var res = document.getElementById('res');
        res.innerHTML = ''; // Limpa o conteúdo anterior
        res.innerHTML += `O total de elementos é: ${total}<br>`;
        res.innerHTML += `A soma dos valores é: ${soma}<br>`;
        res.innerHTML += `A média dos valores é: ${media}<br>`;
    }
}

