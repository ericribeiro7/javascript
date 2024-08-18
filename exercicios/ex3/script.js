function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('contagem')

    if(inicio.value.length == 0 || fim.value.lenght == 0|| fim.value.lenght == 0){
        alert('Erro. Faltam dados')
    }else {
        res.innerHTML = 'Contando: '
        var n1 = Number(inicio.value)
        var n2 = Number(fim.value)
        var n3 = Number(passo.value)

        if(n1 < n2){
          for(var c = n1; c <= n2; c += n3){
            res.innerHTML += `${c}... `
        }  
        }else{
            for(var c = n1; c >= n2; c -= n3){
            res.innerHTML += `${c}, `
        }
    }
    res.innerHTML += `Acabou. `
}
}