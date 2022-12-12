export function valida(input){ 
    const tipoDeInput = input.dataset.tipo; 
    if( validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    console.log(input.parentElement)
    if (input.validity.valid) { //esta condindicion se utiliza para validar si los valores son correctos
        input.parentElement.classList.remove("input-container--invalid");// si el input es valido se remueve la clase
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else {
        input.parentElement.classList.add("input-container--invalid"); // si no cumple con los valores se agrega la clase
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
}
const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajesDeError = { // se abre el arreglo para agregar los emnsajes de error dependiendo del tipo de input
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio" // es una propiedad de validity donde se verifica si esta vacio o no el campo 
    },
    email: { 
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido (Ejemplo@dominio.com) " // igual proviene de validity donde se verifica si el correo es true o false
    },

}

function mostrarMensajeDeError(tipoDeInput, input){ //con la funcion tipo de input se busca el data-type del elemento, y el input para saber su contenido
    let mensaje = "";// se pone el mensaje en blanco
    tipoDeError.forEach( error => { //aqui utilizamos este atributo para poder buscar en tipoDeError, y ver si el hay un error ys i lo hay agrega el mensaje que corrsponda
        if (input.validity[error]){// aqui se agrega la condicional para crear el validador 
            console.log(tipoDeInput,error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error]; //se utiliza la funcion mensajeDeError, para poder obtener los mensajes dependiendo del que sea requerido
        }
    })
    return mensaje

}