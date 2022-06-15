function calcularUtilidadBruta(producto){
    const utilidadBruta = (producto.costoCompra + ( producto.costoCompra * producto.porcentaje) );
    return utilidadBruta;
} 

function ganacioPorProducto(producto){
    return  calcularUtilidadBruta(producto) - producto.costoCompra;
}

//FUNCIONES PARA EL PANDA 
function onClickPanda()  {
   const costoVenta = calcularUtilidadBruta(listaPoductos[0]);
    const gananciaProducto = ganacioPorProducto(listaPoductos[0]);

    const imprimirCompra = document.getElementById("precioCompraPanda");
    imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[0].costoCompra;
    
    const imprimirPorcentaje = document.getElementById("porcentajePanda");
    imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[0].porcentaje;
   
    const imprimirventa = document.getElementById("costoVentaPanda");
    imprimirventa.innerText = "Venta al publico: " + costoVenta;

    const imprimirGanancia = document.getElementById("ganaciaProductoPanda");
    imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
 }  