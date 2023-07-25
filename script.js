const pantalla = document.querySelector(".Contenedor__pantalla__setValores");
var opracionEspecial = "";

function getBoton(boton) {
    switch (boton) {
        case "1":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "2":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "3":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "4":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "5":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "6":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "7":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "8":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "9":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "0":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case ".":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "+":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "-":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "/":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "*":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "**":
            pantalla.innerHTML = pantalla.textContent + boton;
        break;
        case "abs":
            pantalla.innerHTML = pantalla.textContent + boton;
            let valor1 = pantalla.textContent.split("abs");
            opracionEspecial = `Math.abs(${valor1})`;

        break;
        case "√":
            pantalla.innerHTML = pantalla.textContent + boton;
            let valor2 = pantalla.textContent.split("√");
            opracionEspecial = `Math.sqrt(${valor2[0]})`;
        break;
        case "c":
            pantalla.innerHTML = "";
        break;
        case "=":
            if (opracionEspecial.includes("Math.sqrt")) {
                try {
                    pantalla.innerHTML = eval(opracionEspecial);
                    opracionEspecial = "";    
                } catch {
                    pantalla.innerHTML = "ERROR";
                }
            } else if (opracionEspecial.includes("Math.abs")){
                try {
                    pantalla.innerHTML = eval(opracionEspecial);
                } catch {
                    pantalla.innerHTML = "ERROR";
                }
            }else{
                try {
                    let resultado = eval(pantalla.textContent);
                    pantalla.innerHTML = "";
                    pantalla.innerHTML = resultado;
                } catch {
                    pantalla.innerHTML = "ERROR";
                }
            }
        break;          
        default:
            pantalla.innerHTML = "ERROR";
        break;
    }
}