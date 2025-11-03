function dadoNumero() {
    return Math.trunc(Math.random()*6+1);
}
let dado1 = dadoNumero();
let dado2 = dadoNumero();
console.log(dado1);
console.log(dado2);
console.log(dado1 + dado2);