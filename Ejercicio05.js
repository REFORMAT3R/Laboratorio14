function gradosARadianes(grados) {
    let radianes = (grados*Math.PI)/180;
    console.log(radianes);
    console.log(Math.sin(radianes));
    console.log(Math.cos(radianes));
}
function radianesAGrados(radianes) {
    let grados = (radianes*180)/Math.PI;
    console.log(grados);
}
gradosARadianes(90);
radianesAGrados(Math.PI);
