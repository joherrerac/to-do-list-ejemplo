// variables

const formulario = document.querySelector("#formulario");
const tituloForm = document.querySelector("#titulo-formulario");

console.log(formulario);

// eventos
function eventos() {
    formulario.addEventListener("submit", validarFormulario);
}
eventos();

// funciones
function validarFormulario(e) {
    e.preventDefault();

    // validar datos del input
    const tarea = document.querySelector("#tarea").value;
    console.log(tarea);
    if (!tarea.trim()) {
        tituloForm.textContent = 'formulario vacio'
        return
    }else{
        console.log(tarea);
    }
}

