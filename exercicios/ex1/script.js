function carregar() {
    var msg = document.getElementById('mensagem');
    var foto = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    
    if (hora >= 0 && hora < 12) {
        foto.src = 'manha.jpg';
        document.body.style.background = 'yellow';
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'tarde.jpg';
        document.body.style.background = 'orange';
    } else {
        foto.src = 'noite.jpg';
        document.body.style.background = 'black';
        document.body.style.color = 'white';
    }
}
