function enviarDatos(){
    let nombre = document.getElementsByName('nombre')[0].value; 
    if (nombre == ""){
        alert("no se permiten espacios vacios");
    }else if (!isNaN(nombre)) {
        alert("El campo 'nombre del estudiante'no puede ser numero");
        return false;
        return true;
    }else{
        console.log(nombre) || alert("Datos enviados correctamente")
    }

    let apellido = document.getElementsByName('apellido')[0].value;
    if (apellido == ""){
        alert("no se permiten espacios vacios");
    }else if(!isNaN(apellido)) {
        alert("El campo 'Apellido del estudiante'no puede ser un numero");
        return false;
        return true;
    }else{
        console.log(apellido) || alert("Datos enviados correctamente")
    }

    let telefono = document.getElementsByName('telefono')[0].value;
    if (telefono == ""){
        alert("no se permiten espacios vacios")
    } if(isNaN(telefono) || telefono < 222222222 || telefono >= 999999999) {
        alert("Por favor ingrese un numero de telefono valida en el rango de 222222223 a 999999998.");
        return false;
        return true;
    }else{
        console.log(telefono) || alert("Datos enviados correctamente")
    }

    let carrera = document.getElementsByName('carrera')[0].value;
    if (carrera == ""){
        alert("no se permiten espacios vacios")
    } if(!isNaN(carrera)) {
        alert("EL campo'carrera por la cual desea consultar' no puede ser solo un numero");
        return false;
        return true;
    }else{
        console.log(carrera) || alert("Datos enviados correctamente")
    }

    let edad = document.getElementsByName('edad')[0].value;
    if (isNaN(edad)){
        alert("por favor ingrese un valor numerico para la edad")
        return false;
        edad = parseInt(edad);
    } if(edad <17 || edad > 60) {
        alert("la edad debe estar en el rango de 17 a 60 años");
        return false;
        return true;
    }else{
        console.log(edad) || alert("Datos enviados correctamente")
    }

    let mensaje = document.getElementsByName('mensaje')[0].value;
    if (mensaje.trim() ===""){
        alert("no se permiten espacios vacios");
        return false;
    } if(!isNaN(mensaje)) {
        alert("EL campo'mensaje de consulta'no puede ser solo un numero");
        return false;
        return true;
    }else{
        console.log(mensaje) || alert("Datos enviados correctamente")
    }
    }
