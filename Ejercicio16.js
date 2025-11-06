class Producto3 {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    obtenerSubtotal() {
        return this.precio * this.cantidad;
    }
    mostrarInfo() {
        return "Producto: " + this.nombre + " | Precio: " + this.precio + " | Cantidad: " + this.cantidad + 
               " | Subtotal: " + this.obtenerSubtotal();
    }
}
class Carrito {
    constructor() {
        this.productos = []; // composición: el carrito contiene productos
    }
    agregarProducto(producto) {
        if (producto instanceof Producto3) {
            this.productos.push(producto);
            console.log("Producto agregado: " + producto.nombre);
        } else {
            console.log("Solo se pueden agregar objetos de tipo Producto");
        }
    }
    calcularTotal() {
        var total = 0;
        for (var i = 0; i < this.productos.length; i++) {
            total += this.productos[i].obtenerSubtotal();
        }
        return total;
    }
    mostrarResumen() {
        console.log("---- Resumen del carrito ----");
        for (var i = 0; i < this.productos.length; i++) {
            console.log(this.productos[i].mostrarInfo());
        }
        console.log("Total a pagar: " + this.calcularTotal());
        console.log("-----------------------------");
    }
}
// Pruebas
var carrito = new Carrito();
var p1 = new Producto3("Camiseta", 50, 2);
var p2 = new Producto3("Pantalón", 80, 1);
var p3 = new Producto3("Zapatos", 120, 1);
carrito.agregarProducto(p1);
carrito.agregarProducto(p2);
carrito.agregarProducto(p3);
carrito.mostrarResumen();