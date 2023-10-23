function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('Erro, verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/foto_bb_menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto_h_jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto_h_adulto.jpg')
            } else {
                img.setAttribute('src', 'img/foto_h_idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/foto_bb_menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto_m_jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto_m_adulto.jpg')
            } else {
                img.setAttribute('src', 'img/foto_m_idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}