//Recursividade / Função recursiva/ que chama ela mesma
function fatorial(n){
    if(n ==1){
        return 1
    } else{
        return n* fatorial(n - 1)
    }
}