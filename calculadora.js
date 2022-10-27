function adicionar(um, dois) {
    let soma = um + dois;
    return soma ;

}

function subtracao(um, dois) {
    let sub = um - dois;
    return sub;
}

function multiplicacao(um, dois) {
    let mult = um * dois;
    return mult;
}

function divisao(um, dois) {
    let divi = um / dois;
    return divi;
}

console.log("Testando calculadora")
console.log(adicionar(9, 6))
console.log(subtracao(8, 5))
console.log(multiplicacao(10, 2))
console.log(divisao(10, 5))
console.log(divisao(10, 0))

function quadraDodoNumero(dois = 2) {
    console.log(multiplicacao(dois, dois));
    
}
quadraDodoNumero(2);

function mediaDeTresNumeros(um, dois, tres) {
    let tresnumeros = adicionar(um, dois) + tres;
    let  total = divisao(tresnumeros, 2);
    return total;
}
console.log(mediaDeTresNumeros(5,6,3));
function calculaPorcentagem(cem, cinco) {
    

}

function  calculaPorcentagem(uno, duos) {
    let porcentagem = multiplicacao(uno, duos);
    let resultado = divisao(porcentagem, 100);
    return resultado;
}

console.log(calculaPorcentagem(300, 15))

function geradorDePorcentagem(uno ,duos) {
    let porcentagem = multiplicacao(uno, 100);
    let resultado = divisao(porcentagem, duos);
    return resultado;

}
console.log(geradorDePorcentagem(2, 200))











