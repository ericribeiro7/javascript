function verificar(){
    var fano = document.getElementById('txtano')
    var resposta = document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()

    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            gen = 'homem'
            if(idade >= 0 && idade <= 10){
                img.src = 'criançah.jpg'
            }else if(idade < 21){
                img.src = 'adolescenteh.jpg'
            }else if(idade < 50){
                img.src = 'homem.jpg'
            }else{
                img.src = 'senhor.jpg'
            }
        }else if(fsex[1].checked){
            gen = 'mulher'
            if(idade >= 0 && idade <= 10){
                img.src = 'criançam.jpg'
            }else if(idade < 21){
                img.src = 'adolescentm.jpg'
            }else if(idade < 50){
                img.src = 'mulher.jpg'
            }else{
                img.src = 'senhora.jpg'
            }
        }

        resposta.style.textAlign = 'center'
        img.style.display = 'block' 
        img.style.margin = '0 auto'
        img.style.width = '200px'
        img.style.height = '200px'
        resposta.innerHTML = `Detectamos ${gen} com ${idade} anos`
        resposta.appendChild(img) 
    }
}
