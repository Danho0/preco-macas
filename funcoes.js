function precomacas(){
    let qtd=quantidade.value
    if(qtd < 12){
        let valorcompra=qtd * 1.3
        alert("O valor total da sua compra é: R$ " + valorcompra)
    }else{
        let valorcompra = qtd * 1
        alert("O valor total da sua compra é: R$ " + valorcompra)
    }
}
