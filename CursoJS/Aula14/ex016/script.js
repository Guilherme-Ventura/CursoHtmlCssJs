function contar() {
    var txtInicio = document.getElementById('txtInicio')
    var txtFim = document.getElementById('txtFim')
    var txtPasso = document.getElementById('txtPasso')
    var res = document.getElementById('res')
    let inicio = Number(txtInicio.value)
    let fim = Number(txtFim.value)
    let passo = Number(txtPasso.value)

    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0) {
        if (txtInicio.value.length == 0) {
            res.innerHTML = 'Você deixou o campo "Início" em branco'
        } else if (txtFim.value.length == 0) {
            res.innerHTML = 'Você deixou o campo "Fim" em branco'
        } else {
            alert('"Passo" invalido! Considerando "Passo" 1')
            contagem(inicio, fim, passo)
        }
    } else {
        contagem(inicio, fim, passo)
    }
}

function contagem(inicio, fim, passo) {
    res.innerHTML = 'Contando: '
    if (passo <= 0) {
        passo = 1
        alert('"Passo" invalido! Considerando "Passo" 1')
    }

    if (inicio < fim) {
        for (let c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c} &#128073 `
        }

    } else {
        for (let c = inicio; c > fim; c -= passo) {
            res.innerHTML += `${c} &#128073`
        }
    }
    res.innerHTML += '&#127937;'
}