export function valida(input){
    const tipoDeInput = input.dataSet.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input)
    }

}

const validadores = {
}

const tipoDeError = [
    "valueMissing",
    "typeMismatch"
]

const mensajesDeError = { 
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio" 
    },
    email: { 
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido (Ejemplo@dominio.com) " 
    },
    asunto: {
        valueMissing: "El campo password no puede estar vacio"
    },
    mensaje: {
        valueMissing:"Este campo no puede estar vacio"
    }
}


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeError.forEach(error =>{
        if(input.validity[error]){
            console.log(tipoDeInput, error)
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje;
}