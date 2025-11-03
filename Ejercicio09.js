class Producto{
    #nombre = "Juguete";
    #precio = 0.0;
    #stock = 0;
    set precio(valor) {
        if(valor >= 0) this.#precio = valor;
    }
    set stock(cantidad) {
        if(cantidad >= 0) this.#stock = cantidad;
    }
    vender(cantidad) {
        if (cantidad <= 0) {
            console.log("La cantidad a vender debe ser mayor que 0");
        } else if (cantidad > this.#stock) {
            console.log("No hay suficiente stock para completar la venta");
        } else {
            this.#stock -= cantidad;
            console.log("Venta realizada: " + cantidad + " unidades");
        }
    }
    toString() {
        return "Nombre: " + this.#nombre + " | Precio: " + this.#precio + " | Stock: " + this.#stock;
    }
}
const producto = new Producto();
producto.precio = 30.5;
producto.stock = 10;
console.log(producto.toString());
producto.vender(3);              
console.log(producto.toString()); 
producto.vender(15);  