let num = [5, 8, 4]
num[3] = 6
num.push(7) // vai alocar o dado em ultimo lugar do vetor. dado fica entre ()

/* console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) */

/* for (var i = 0; i <= num.length; i++) {
    console.log(`O número ${num[i]} está na posição ${[i]}`)
} */
num.sort()

for (let i in num) {
    console.log(`O número ${num[i]} está na posição ${[i]}`)
}
let pos = num.indexOf(9)// procurar o valor q esta no indexOF() e se n encontrar retorna valor(-1)
if (pos == -1) { 
    console.log('O valor não foi encontrado')
} else {
    console.log(`Esta na posição ${pos}`)
}
