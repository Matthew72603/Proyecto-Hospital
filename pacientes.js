function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if(localPacientes){ 
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]
    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombrePaciente = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaFecha = fila.insertCell()

        celdaNombrePaciente.textContent = paciente.nombrePaciente
        celdaApellido.textContent = paciente.apellidoPaciente
        celdaNumeroCedula.textContent = paciente.cedula
        celdaEdad.textContent = paciente.edad
        celdaEspecialidad.textContent = paciente.especialidad
        celdaTelefono.textContent = paciente.numeroTelefono
        celdaFecha.textContent = paciente.fecha
    });
}

mostrarPacientes()