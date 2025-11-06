class Producto2 {
    #nombre = "Juguete";
    #precio = 0.0;
    #stock = 0;
    set precio(valor) {
        let num = Number(valor); // convierte a número si es cadena
        if (!isNaN(num) && num >= 0) {
            this.#precio = num;
        } else {
            console.log("Precio inválido");
        }
    }
    get precio() {
        return "$" + this.#precio.toFixed(2);
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
// ----------------- Prueba -----------------
const producto2 = new Producto2();
producto2.precio = "120.5"; // string válido
producto2.stock = 10;
console.log(producto2.toString()); 
producto2.vender(3);
console.log(producto2.toString()); 
producto2.precio = 150; 
console.log(producto2.precio); 
producto2.precio = "abc"; // inválido
console.log(producto2.precio); 