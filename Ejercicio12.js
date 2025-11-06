class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    mostrarInfo() {
        return "Nombre: " + this.nombre + " | Email: " + this.email;
    }
}
class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }
    mostrarInfo() {
        return super.mostrarInfo() + " | Nivel de fidelidad: " + this.nivelFidelidad;
    }
}
class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }
    mostrarInfo() {
        return super.mostrarInfo() + " | Permisos: " + this.permisos.join(", ");
    }
}
const cliente1 = new Cliente("Roy", "roy@mail.com", 4);
const admin1 = new Administrador("Hann", "hann@vertice.org", ["crear", "editar", "eliminar"]);
console.log(cliente1.mostrarInfo());
console.log(admin1.mostrarInfo());