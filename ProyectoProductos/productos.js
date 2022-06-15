const listaPoductos = [];

function calcularUtilidadBruta(producto){
    const utilidadBruta = (producto.costoCompra + ( producto.costoCompra * producto.porcentaje) );
    return utilidadBruta;
} 

function ganacioPorProducto(producto){
    return  calcularUtilidadBruta(producto) - producto.costoCompra;
}


//FUNCIONES PARA EL PANDA 
listaPoductos.push(
    {
        name: "panda",
        costoCompra: 269,
        porcentaje: 0.2,
    }
);
function onClickPanda()  {
   const costoVenta = parseInt( calcularUtilidadBruta(listaPoductos[0]) );
    const gananciaProducto = parseInt( ganacioPorProducto(listaPoductos[0]) );

    const imprimirCompra = document.getElementById("precioCompraPanda");
    imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[0].costoCompra;
    
    const imprimirPorcentaje = document.getElementById("porcentajePanda");
    imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[0].porcentaje;
   
    const imprimirventa = document.getElementById("costoVentaPanda");
    imprimirventa.innerText = "Venta al publico: " + costoVenta;

    const imprimirGanancia = document.getElementById("ganaciaProductoPanda");
    imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
 }  