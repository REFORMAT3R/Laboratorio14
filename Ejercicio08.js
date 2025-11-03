function normalizarNotas(calificaciones) {
    let maximo = Math.max(...calificaciones);
    let normalizar = calificaciones.map(nota => nota / maximo);
    console.log("Calificaciones normalizadas:" + normalizar);
}
normalizarNotas([12, 15, 20, 5]);
