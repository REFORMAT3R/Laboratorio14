function numeroAleatorio(min, max) {
    return Math.trunc(Math.random()*(max-min+1)+(min));
}
console.log(numeroAleatorio(4, 8));