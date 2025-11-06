class Figura {
    constructor(nombre) {
        this.nombre = nombre;
    }
    area() {

    }
    perimetro() {

    }
}
class Cuadrado extends Figura {
    constructor(nombre, lado) {
        super(nombre)
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
    perimetro() {
        return this.lado * 4;
    }
}
class Triangulo extends Figura {
    constructor(nombre, base, altura, lado1, lado2, lado3) {
        super(nombre);
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    area() {
        return (this.base * this.altura)/2;
    }
    perimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}
const cuadrado = new Cuadrado("Cuadrado", 5);
console.log(cuadrado.nombre);
console.log("Área:", cuadrado.area());
console.log("Perímetro:", cuadrado.perimetro());
console.log("---------------");
const triangulo = new Triangulo("Triángulo", 6, 4, 5, 4, 3);
console.log(triangulo.nombre);
console.log("Área:", triangulo.area());
console.log("Perímetro:", triangulo.perimetro());