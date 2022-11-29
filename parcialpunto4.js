let pet = confirm("Tiene mascotas")
let howMany =prompt("Para cuantas personas")
let smoke =confirm("¿Desea habitacion para fumadores?")

if (pet == true){
    alert("Habitacion familiar seleccionada")
}else{
    if (howMany <= 2){
        option1 =prompt("Que habitacion desea ordenar, individual(1), doble(2), familiar(3)");
        alert("Para continuar con la reserva necesitamos los sieguiente datos");
        nombre =prompt("Indique a nombre de quien la reserva")
        period =prompt("Cuantos dias piensa tener la habitacion")
    }else if (4 < howMany && howMany <= 6){
        alert("Habitacion familiar seleccionada")
        alert("Para continuar con la reserva necesitamos los sieguiente datos");
        nombre =prompt("Indique a nombre de quien la reserva")
        period =prompt("Cuantos dias piensa tener la habitacion")
    }else if (2 < howMany && howMany <= 4){
        option2 =prompt("Que habitacion desea ordenar, doble(2), familiar(3)");
        alert("Para continuar con la reserva necesitamos los sieguiente datos");
        nombre =prompt("Indique a nombre de quien la reserva")
        period =prompt("Cuantos dias piensa tener la habitacion")
    }else{
        alert("No tenemos habitaciones tan grandes")
    }
};
const reserva ={
    nombre,howMany,period,pet
}
alert(`La reserva quedo: \n Nombre: ${reserva.nombre} \n Personas en la habitacion: ${reserva.howMany} \n Periodo de tiempo: ${reserva.period} \n Personas en el hotel: ${reserva.howMany+6} \n Es verdad que trajo mascota?: ${reserva.pet}`)