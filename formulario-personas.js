const formulario = document.getElementById("formulario-personas")
const nombrePaciente = document.getElementById("Nombre")
const apellidoPaciente = document.getElementById("Apellido")
const cedula = document.getElementById("numero-de-cedula")
const edad = document.getElementById("Edad")
const numeroTelefono = document.getElementById("Telefono")
const fecha = document.getElementById("Fecha")
const especialidad = document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const paciente={
        nombrePaciente: nombrePaciente.value,
        apellidoPaciente: apellidoPaciente.value,
        cedula:cedula.value,
        edad: edad.value,
        numeroTelefono: numeroTelefono.value,
        fecha: fecha.value,
        especialidad: especialidad.value,
    }

    let pacientes = []
    let infoLocal=localStorage.getItem("pacientes")
    if(infoLocal){
        pacientes = JSON.parse(infoLocal)
    } 
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert("Paciente registrado con exito")
})