let isActive = true;
let funcionalidad;
let contadorUsuarios = 0;

let contadorDeTranseferencias = 0;

let atenciones = [];

const filtro= (condicion1, condicion2)=>{
    return atenciones.filter(object => object.tipoUsuario === condicion1 && object.moduloAtencion==condicion2)
    .length;
}



while(isActive){                   

    funcionalidad = prompt("Ingrese lo que quiere hacer " + "\n"+
    "1.Atender un usuario." + "\n"+
    "2. Consultas de estadisticas" + "\n"+
    "3. Transferir de modulo de atención" + "\n"+
    "4. Estadisticas de transferencias " + "\n"+
    "5. Salir del sistema");

    switch(funcionalidad){
        case  "1":
            let option = prompt("Ingrese el modulo de atención: 1.Llamada // 2.Oficina");
            let tipo = prompt("Ingrese el tipo de usuario: 1.Cliente Bancolombia // 2.Cliente otro");
            let name = prompt("Ingrese el nombre de la persona");
            const consulta ={
                moduloAtencion : option == "1" ? "Llamada" : "Oficina",
                tipoUsuario : tipo == "1" ? "Estudiante" : "Docente",
                nombreUsuario : name
            }
            atenciones.push(consulta);
            contadorUsuarios++
            break;
        case "2":
            alert("Usuarios totales atendidos: "+ contadorUsuarios);

            let clienBancolombiaConsultaLlamada = filtro("Cliente Bancolombia", "Llamada")

            alert("Clientes de Bancolombia atendidos y de consulta llamada: "+ clienBancolombiaConsultaLlamada);

            let clienBancolombiaConsultaOficina = filtro("Estudiante","Oficina");
            
            alert("Clientes de Bancolombia atendidos y de consulta oficina: "+ clienBancolombiaConsultaOficina);

            let clienOtroConsultaLlamada = filtro("Docente","Llamada");

            alert("Clientes de otros bancos atendidos de modulo llamada: "+ clienOtroConsultaLlamada);

            let clienOtroConsultaOficina = filtro("Docente","Oficina");

            alert("Clientes de otros bancos atendidos de modulo Oficina: "+ clienOtroConsultaOficina);
            
            break;    
        case "3":
            let username = prompt("Ingrese el nombre  del usuario");
            let moduloAtencionDeseado = prompt("Ingrese el modulo de atencion al que va a cambiar 1.Llamada // 2.Oficina");
            let consultaEncontrada = atenciones.find(consulta=>consulta.nombreUsuario === username);

            if(consultaEncontrada){

                consultaEncontrada.moduloAtencion= moduloAtencionDeseado == "1"? "Llamada" : "Oficina";
                contadorDeTranseferencias++;

            }else alert("No se encontro ningun usuario con ese nombre");
            break;

        case "4":
            alert("Se han transferido "+ contadorDeTranseferencias);
            break;

        case "5":
            isActive=false;
            break;
    }
    
}

