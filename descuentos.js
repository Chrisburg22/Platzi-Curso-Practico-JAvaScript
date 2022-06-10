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

function ValidarCupon(coupon){

    if(coupon === "Chrisburg22"){
        return 25;
    } else if (coupon === "ZoroCoupon"){
        return 15;
    } else if (coupon === "PlatziCoupon"){
        return 20;
    } else if (coupon === "MasterCoupon" ){
        return 45;
    } else {
        alert("El cupon " + coupon + " no es valido");
        return 0;
    }

}
//Interactuando con HTML

function onClickButtonPriceDiscount(){
    
    const price=document.getElementById("inputPrice");
    const priceValue=price.value;

    const discount=document.getElementById("inputDiscount");
    const discountValue=discount.value;

    const coupon=document.getElementById("inputCoupon");
    const couponValue=coupon.value;

   const discountPrice = aplicandoDescuento(priceValue, discountValue);
   const validcoupon = ValidarCupon(couponValue);
   const couponPrice= aplicandoDescuento(discountPrice, validcoupon);
   
   const finalPrice = document.getElementById("FinalPriceDiscount");
   finalPrice.innerText = "El Precio final del producto con el descuento aplicado es de $" + couponPrice;
}



