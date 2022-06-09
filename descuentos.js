/**const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioFinal = (precioOriginal * porcentajePrecioConDescuento)  / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioFinal,
});  
*/

function aplicandoDescuento(precio, descuento){
    
    const precioFinal = (precio * (100 - descuento) )  / 100;

    return precioFinal;
}

//Interactuando con HTML

function onClickButtonPriceDiscount(){
    
    const price=document.getElementById("inputPrice");
    const priceValue=price.value;

    const discount=document.getElementById("inputDiscount");
    const discountValue=discount.value;

    const discountPrice = aplicandoDescuento(priceValue, discountValue);

    const finalPrice = document.getElementById("FinalPriceDiscount");
    finalPrice.innerText = "El Precio final del producto con el descuento aplicado es de $" + discountPrice;
}



