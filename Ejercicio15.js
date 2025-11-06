class Cuenta {
    #saldo;
    constructor(saldoInicial) {
        if (saldoInicial >= 0) {
            this.#saldo = saldoInicial;
        } else {
            this.#saldo = 0;
        }
    }
    get saldo() {
        return this.#saldo;
    }
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log("Depósito exitoso: +" + monto + ". Saldo actual: " + this.#saldo);
        } else {
            console.log("El monto a depositar debe ser mayor que 0");
        }
    }
    retirar(monto) {
        if (monto <= 0) {
            console.log("El monto a retirar debe ser mayor que 0");
        } else if (monto > this.#saldo) {
            console.log("Fondos insuficientes");
        } else {
            this.#saldo -= monto;
            console.log("Retiro exitoso: -" + monto + ". Saldo actual: " + this.#saldo);
        }
    }
    transferir(destino, monto) {
        if (destino instanceof Cuenta && monto > 0 && this.#saldo >= monto) {
            this.retirar(monto);
            destino.depositar(monto);
            console.log("Transferencia exitosa de " + monto);
        } else {
            console.log("Transferencia no válida");
        }
    }
}
class CuentaAhorro extends Cuenta {
    constructor(saldoInicial) {
        super(saldoInicial);
    }
    retirar(monto) {
        if (monto > this.saldo) {
            console.log("No puedes retirar más del saldo disponible en cuenta de ahorro");
        } else {
            super.retirar(monto);
        }
    }
}
class CuentaCorriente extends Cuenta {
    #limiteSobregiro;
    constructor(saldoInicial, limiteSobregiro) {
        super(saldoInicial);
        this.#limiteSobregiro = limiteSobregiro;
    }
    retirar(monto) {
        if (monto <= 0) {
            console.log("El monto debe ser mayor que 0");
        } else if (monto > this.saldo + this.#limiteSobregiro) {
            console.log("Límite de sobregiro excedido");
        } else if (monto <= this.saldo) {
            super.retirar(monto);
        } else {
            var saldoFinal = this.saldo - monto;
            console.log("Sobregiro realizado: -" + monto + ". Saldo final: " + saldoFinal);
        }
    }
}
// Pruebas
var ahorro = new CuentaAhorro(1000);
var corriente = new CuentaCorriente(500, 300);
ahorro.retirar(1200);   // No permite
corriente.retirar(700); // Usa sobregiro
ahorro.depositar(200);
ahorro.retirar(500);
ahorro.transferir(corriente, 300);