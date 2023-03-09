const tipoDeErrores = [ 
    "valueMissing",
    "typeMismatch"
  ];
  
  const inputs = document.querySelectorAll("input");
  
  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
    },
    mensaje: {
        valueMissing: "Debes agregar un mensaje",
    }
  };
  
  function verifica(input){
  
    const tipoDeInput = input.dataset.tipo;
    let mensaje = "";
  
    tipoDeErrores.forEach((error) =>{
      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
  
    input.setCustomValidity(mensaje);
  }
  
  inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
      const inputActual = event.target;
      const mensaje = verifica(inputActual);
      console.log(mensaje);
    });
  });

  const boton = document.querySelector('[data-tipo="boton"]');

function verificaInputs() {
  let inputsCompletos = true;
  inputs.forEach(input => {
    if (!input.value) {
      inputsCompletos = false;
    }
  });
  boton.disabled = !inputsCompletos;
}

inputs.forEach(input => {
  input.addEventListener("input", verificaInputs);
});