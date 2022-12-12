import { valida } from "./js/validacion.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
        console.log(valida(input.target));
    });
});
