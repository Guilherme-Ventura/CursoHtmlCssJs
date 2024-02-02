function gerarTabuada(){
    let num = document.getElementById('txtnum')
    let tabuada = document.getElementById('selectTab')
    
    if(num.value.length == 0){
        alert('zerado!')
    } else{
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for(let i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${n} X ${i} = ${n * i}`
            tabuada.appendChild(item)
        }
    }
}