class Usuario2 {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    mostrarInfo() {
        return "Nombre: " + this.nombre + " | Email: " + this.email;
    }
}
class Cliente2 extends Usuario2 {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }
    mostrarInfo() {
        return super.mostrarInfo() + " | Nivel de fidelidad: " + this.nivelFidelidad;
    }
}
class Administrador2 extends Usuario2 {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }
    mostrarInfo() {
        return super.mostrarInfo() + " | Permisos: " + this.permisos.join(", ");
    }
}
const usuarios = [
  new Cliente2("Juan", "juan@mail.com", 150),
  new Administrador2("Ana", "ana@mail.com", ["crear", "editar", "eliminar"]),
  new Cliente2("Luis", "luis@mail.com", 80)
];
usuarios.forEach(usuario => console.log(usuario.mostrarInfo()));