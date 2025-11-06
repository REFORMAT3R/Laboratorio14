class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
    calcularSueldo() {
        return this.sueldoBase;
    }
    mostrarInfo() {
        return "Nombre: " + this.nombre + " | Sueldo base: " + this.sueldoBase;
    }
}
class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }
    calcularSueldo() {
        return this.sueldoBase * 1.10;
    }
    mostrarInfo() {
        return super.mostrarInfo() + " | Lenguaje: " + this.lenguaje + " | Sueldo final: " + this.calcularSueldo().toFixed(2);
    }
}
class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }
    calcularSueldo() {
        return super.calcularSueldo() * 1.25;
    }
    mostrarInfo() {
        return "Nombre: " + this.nombre + " | Sueldo base: " + this.sueldoBase + " | Lenguaje: " + this.lenguaje + 
        " | Sueldo final: " + this.calcularSueldo().toFixed(2);;
    }
}
const empleados = [
    new Empleado("Carlos", 1000),
    new Programador("Lucía", 1500, "JavaScript"),
    new ProgramadorSenior("Miguel", 2000, "Python")
];
empleados.forEach(e => console.log(e.mostrarInfo()));