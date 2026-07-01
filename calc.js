import promptSync from "prompt-sync";
const prompt = promptSync();

let resultado = null;
let Salir = false;

let numValid;

while (Salir == false) {

  numValid = true
  console.log(
    "CALCULADORA: Elige números y operadores! (Escribe exit para salir)",
  );
  let num1 = prompt("Número 1: ");

  if (num1 == "exit") {
    Salir = true;
  } else {
    let oper = prompt("Selecciona un operador (+ - * /): ");

    num1 = Number(num1);
    let num2 = prompt("Número 2: ");
    num2 = Number(num2);

    if (oper === "+") {
      resultado = num1 + num2;
    } else if (oper === "-") {
      resultado = num1 - num2;
    } else if (oper === "*") {
      resultado = num1 * num2;
    } else if (oper === "/") {
      if (num2 === 0) {
        console.log("No se puede dividir por cero.");
        numValid = false
            }
      resultado = num1 / num2;
    } else {
      console.log("OPERADOR NO VÁLIDO");
    }
  }

  if (resultado != null && numValid == true) {
    console.log("El resultado es: ", resultado);
    console.log("----------------------------");
  }


}

console.log("Saliendo del programa...");
