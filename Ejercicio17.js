class Notificacion {
    constructor(destinatario) {
        this.destinatario = destinatario;
    }
    enviar() {
        console.log("Enviando notificación genérica a " + this.destinatario);
    }
}
class Email extends Notificacion {
    constructor(destinatario, asunto) {
        super(destinatario);
        this.asunto = asunto;
    }
    enviar() {
        console.log("Enviando EMAIL a " + this.destinatario + " con asunto: " + this.asunto);
    }
}
class SMS extends Notificacion {
    constructor(destinatario, numeroTelefono) {
        super(destinatario);
        this.numeroTelefono = numeroTelefono;
    }
    enviar() {
        console.log("Enviando SMS a " + this.destinatario + " al número " + this.numeroTelefono);
    }
}
class Push extends Notificacion {
    constructor(destinatario, dispositivo) {
        super(destinatario);
        this.dispositivo = dispositivo;
    }
    enviar() {
        console.log("Enviando notificación PUSH a " + this.destinatario + " en el dispositivo " + this.dispositivo);
    }
}
// Función que procesa una lista de notificaciones
function procesarNotificaciones(lista) {
    console.log("---- Procesando notificaciones ----");
    for (var i = 0; i < lista.length; i++) {
        lista[i].enviar(); // Polimorfismo: cada tipo ejecuta su propia versión de enviar()
    }
    console.log("-----------------------------------");
}
// Pruebas
var notificaciones = [
    new Email("Juan", "Reunión mañana 10 AM"),
    new SMS("Ana", "+51987654321"),
    new Push("Carlos", "Tablet Samsung")
];
procesarNotificaciones(notificaciones);