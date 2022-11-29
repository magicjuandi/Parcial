let tiempo = 2000;
let coop = true;
function time(ms){
    return new Promise((resolve, reject) =>{
        if (coop){
            setTimeout(resolve,ms);
        }else{
            reject(console.log("La cooperativa esta cerrada"));
        }
    })
}

async function cooperativa (){
    
    try{
        await time(tiempo)
        alert("¡Bienvenido a la cooperativa");
        await time(tiempo)
        let clientecoop = confirm("¿Sr cliente, es usted cliente de la cooperativa?");
        if (clientecoop == true){
            tiempo = 0;
        }
        await time(tiempo)
        let solicitud = prompt("¿Que tipo de solicitud desea realizar, Pagos(1) o Asesoria(2)");
        if (solicitud == 1){
            solicitud =prompt("Si desea realizar a partir de cuotas(a) o a partir de administracion(b)")
            if (solicitud == "a"){
                await time(tiempo)
                alert("Sr usuario, usted se encuentra en la caja 1");
                await time(1000)
                alert("Realizando pago...");
                await time(5000);
                alert("Pago realizado, muchas gracias por su visita");
            }else if(solicitud == "b"){
                await time(tiempo)
                alert("Sr usuario, usted se encuentra en la caja 2");
                await time(1000)
                alert("Realizando pago...");
                await time(5000);
                alert("Pago realizado, muchas gracias por su visita");
            }   
        }else if(solicitud == 2){
            await time(tiempo)
            alert("Sr usuario, usted se encuentra en la caja 3");
            await time(1000)
            alert("Realizando asesoria...");
            await time(5000);
            alert("Asesoria realizada, muchas gracias por su visita");
        }
    }
    catch(error){
        alert("Cliente se ha ido",error);
    }
    finally{
        alert("La cooperativa ha cerrado");
    }
}
cooperativa();
