// letiables globales
let palabraSecreta = "";
let palabraDescubierta = "";
let intentos = 0;
let maximoIntentos = 7;

// Función para cargar una palabra
function cargarPalabra() {
  palabraSecreta = prompt("Ingresa la palabra secreta:");
  palabraDescubierta = "*".repeat(palabraSecreta.length);
  intentos = 0;
  console.log("¡Palabra cargada exitosamente!");
}

// Función para descubrir la palabra
function descubrirPalabra() {
  while (intentos < maximoIntentos) {
    let letra = prompt("Ingresa una letra:");
    let acierto = false;
    let nuevaPalabraDescubierta = "";

    for (let i = 0; i < palabraSecreta.length; i++) {
      if (palabraSecreta[i] === letra) {
        nuevaPalabraDescubierta += letra;
        acierto = true;
      } else {
        nuevaPalabraDescubierta += palabraDescubierta[i];
      }
    }

    palabraDescubierta = nuevaPalabraDescubierta;
    console.log(palabraDescubierta);

    if (!palabraDescubierta.includes("*")) {
      console.log("¡GANASTE! Has descubierto la palabra.");
      return;
    }

    if (!acierto) {
      intentos++;
      console.log("Fallo " + intentos + " de " + maximoIntentos);
    }
  }

  console.log("GAME OVER. No has logrado descubrir la palabra.");
}

// Menú principal del juego
function menu() {
  let opcion;

  do {
    opcion = prompt("=== JUEGO DE ADIVINANZAS ===\n1. Cargar palabra\n2. Descubrir palabra\n3. Salir");

    switch (opcion) {
      case "1":
        cargarPalabra();
        break;
      case "2":
        if (palabraSecreta === "") {
          console.log("Error: Debes cargar una palabra primero.");
        } else {
          descubrirPalabra();
        }
        break;
      case "3":
        console.log("Saliendo del juego...");
        break;
      default:
        console.log("Opción inválida. Por favor, elige una opción válida.");
        break;
    }
  } while (opcion !== "3");
}

// Ejecutar el menú principal
menu();
