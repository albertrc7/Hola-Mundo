const imagen1 = document.getElementById('imagen1');
const contador = document.getElementById('contador1');
const desbloqueo = document.getElementById('chckdes');
const desbloqueo2 = document.getElementById('chckdes2');
const imagendes = document.getElementById('imagen2');
let suma = 0;
let incremento = 1; // Incremento inicial (1 punto por clic)

imagen1.addEventListener("click", manejarClick);

// Función principal que maneja el clic y actualiza el estado del juego
function manejarClick() {
    actualizarPuntuacion();
    verificarDesbloqueos();
}

// Actualiza la puntuación al hacer clic, usando el valor de incremento
function actualizarPuntuacion() {
    suma += incremento; // Suma con el valor del incremento actual
    contador.innerText = suma;
}

// Verifica los hitos de desbloqueo y ajusta el incremento
function verificarDesbloqueos() {
    if (suma >= 50 && suma < 200 && incremento === 1) {
        incremento = 10; // Cambia el valor de cada clic a 10 cuando llegas a 50 puntos
        desbloqueo.innerText = "Has desbloqueado el multiplicador x10!";
        imagendes.src = '/img/desbloqueo.jpg';
    } else if (suma >= 200 && incremento === 10) {
        incremento = 100; // Cambia el valor de cada clic a 100 cuando llegas a 200 puntos
        desbloqueo2.innerText = "Has desbloqueado el multiplicador x100!";
    }
}
