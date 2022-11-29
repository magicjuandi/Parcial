class productos{
    id;
    name;
    date;
    price;
    priceadd;
    pricetotal;
    constructor(id,name,date,price,priceadd){
        this.id = id;
        this.name = name;
        this.date = date;
        this.price = price;
        this.priceadd = priceadd;
        this.pricetotal = price + parseInt(priceadd);
    }
}
let producto1 = new productos (1,"Botella","09/11",5000);
let producto2 = new productos (2,"Camiseta","05/03",45000);
let producto3 = new productos (3,"Plato","06/09",20000);
let producto4 = new productos (4,"Espejo","12/11",50000);

let arrayProducts = [producto1,producto2,producto3,producto4];
alert(`Nuestros productos son: \n ${producto1.id} ${producto1.name} ${producto1.date} ${producto1.price} \n ${producto2.id} ${producto2.name} ${producto2.date} ${producto2.price} \n ${producto3.id} ${producto3.name} ${producto3.date} ${producto3.price} \n ${producto4.id} ${producto4.name} ${producto4.date} ${producto4.price}`)

let menu = prompt("Para ver nuestros productos actuales(1)")
let wich = prompt("Indique el codigo del producto al cual desea ofertar")
let add = parseInt(prompt("Indique cuanto quiere añadir al valor ya establecido:"))
producto1.priceadd = add;
producto1.pricetotal = pricetotal;
console.log(arrayProducts)
console.log(producto1.priceadd)


