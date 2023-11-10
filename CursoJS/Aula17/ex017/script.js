let num = document.getElementById('txtnum')
let cxNum = document.getElementById('cxNum')
let res = document.getElementById('res')
let valores = []

function addNumero() {
    if (isNumber(num.value) && !isList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        cxNum.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (cxNum.length == 0) {
        alert('Voc não informou os valores')
    } else {
        let numMaior = valores[0]
        let numMenor = valores[0]
        let soma = 0
        let media = 0

        for (let i in valores) {
            if (valores[i] >= numMaior) {
                numMaior = valores[i]
            }
            if (valores[i] <= numMenor) {
                numMenor = valores[i]
            }
            soma += valores[i]
            media = soma / valores.length
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor informando foi ${numMenor}</p>`
        res.innerHTML += `<p>O maior valor informado foi ${numMaior}</p> `
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitado é ${media}</p>`
    }
    num.focus()
}
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else
        return false
}
function isList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}