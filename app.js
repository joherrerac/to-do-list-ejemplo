// variables

const formulario = document.querySelector("#formulario");
const tituloForm = document.querySelector("#titulo-formulario");
const task = document.querySelector(".tareas");
let tareas = [];

console.log(formulario);

// eventos
function eventos() {
    formulario.addEventListener("submit", validarFormulario);
    task.addEventListener("click", eliminarTarea)
}
eventos();

// funciones
function validarFormulario(e) {
    e.preventDefault();

    // validar datos del input
    const tarea = document.querySelector("#tarea").value;
    if (!tarea.trim()) {
        tituloForm.textContent = 'formulario vacio'

        setTimeout(() => {
            tituloForm.textContent = 'formulario'
        }, 2000)

        return
    }

    //crear un objeto
    const objTarea = {
        id: Date.now(),
        tarea: tarea,
        estado: false
    }
    tareas = [...tareas, objTarea];
    formulario.reset();
    mostrarHTML();
}

function mostrarHTML() {

    task.innerHTML = '';

    if(tareas.length < 1){
        const mensaje = document.createElement("h5");
        mensaje.textContent = "SIN TAREAS"
        return
    }

    tareas.forEach((item) => {
        const itemTarea = document.createElement("div");
        itemTarea.classList.add("item-tarea");
        itemTarea.innerHTML = `
        <p>${item.estado ? (
            `<span class='completa'>${item.tarea}</span>`
        ) : (
            `<span>${item.tarea}</span>`
        )}</p>
        <div class="botones">
            <button class="eliminar" data-id="${item.id}">x</button>
            <button class="completada" data-id="${item.id}">?</button>
        </div>`
        ;
        task.appendChild(itemTarea)
    })
}

//crear un objeto
function eliminarTarea(e) {
    if(e.target.classList.contains("eliminar")) {
        const tareaID = Number(e.target.getAttribute("data-id"))
        // eliminar tarea
        const newTask = tareas.filter((item) => item.id !== tareaID);
        tareas = newTask;
        mostrarHTML();
    }
}