const listaPoductos = [];

//FUNCIONES PARA CALCULAR EL PRECIO
function calcularUtilidadBruta(producto){
    const utilidadBruta = (producto.costoCompra + ( producto.costoCompra * producto.porcentaje) );
    return utilidadBruta;
} 

function ganacioPorProducto(producto){
    return  calcularUtilidadBruta(producto) - producto.costoCompra;
}


//FUNCIONES PARA EL PANDA  0
listaPoductos.push(
    {
        name: "panda",
        costoCompra: 269,
        porcentaje: 0.37,
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

 //FUNCIONES PARA EL LORO 1
 listaPoductos.push(
     {
        name: "loro",
        costoCompra: 314,
        porcentaje: 0.37,
     }
 )
 function  onCLickLoro() {
    const costoVenta = parseInt( calcularUtilidadBruta(listaPoductos[1]) );
     const gananciaProducto = parseInt( ganacioPorProducto(listaPoductos[1]) );
 
     const imprimirCompra = document.getElementById("precioCompraLoro");
     imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[1].costoCompra;
     
     const imprimirPorcentaje = document.getElementById("porcentajeLoro");
     imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[1].porcentaje;
    
     const imprimirventa = document.getElementById("costoVentaLoro");
     imprimirventa.innerText = "Venta al publico: " + costoVenta;
 
     const imprimirGanancia = document.getElementById("gananciaProductoLoro");
     imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
  }  


  //FUNCIONES PARA LA JIRAFA 2
  listaPoductos.push(
    {
       name: "jirafa",
       costoCompra: 360,
       porcentaje: 0.37,
    }
)
function  onCLickJirafa() {
   const costoVenta = parseInt( calcularUtilidadBruta(listaPoductos[2]) );
    const gananciaProducto = parseInt( ganacioPorProducto(listaPoductos[2]) );

    const imprimirCompra = document.getElementById("precioCompraJirafa");
    imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[2].costoCompra;
    
    const imprimirPorcentaje = document.getElementById("porcentajeJirafa");
    imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[2].porcentaje;
   
    const imprimirventa = document.getElementById("costoVentaJirafa");
    imprimirventa.innerText = "Venta al publico: " + costoVenta;

    const imprimirGanancia = document.getElementById("gananciaProductoJirafa");
    imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
 }  

 //FUNCIONES PARA LA ARAÑA 3
 listaPoductos.push(
     {
         name: "araña",
         costoCompra: 404,
         porcentaje: 0.37,
     }
 );
 function onClickAraña() {
    const costoVenta = parseInt( calcularUtilidadBruta(listaPoductos[3]) );
     const gananciaProducto = parseInt( ganacioPorProducto(listaPoductos[3]) );
 
     const imprimirCompra = document.getElementById("precioCompraAraña");
     imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[3].costoCompra;
     
     const imprimirPorcentaje = document.getElementById("porcentajeAraña");
     imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[3].porcentaje;
    
     const imprimirventa = document.getElementById("costoVentaAraña");
     imprimirventa.innerText = "Venta al publico: " + costoVenta;
 
     const imprimirGanancia = document.getElementById("gananciaProductoAraña");
     imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
  }  
 
  //FUNCIONES PARA EL PERRO 4
  listaPoductos.push(
      {
          name: 'perro',
          costoCompra: 449,
          porcentaje: 0.37,
      }
  ) 
  function onClickPerro(){
    const costoVenta = parseInt( calcularUtilidadBruta(listaPoductos[4]) );
     const gananciaProducto = parseInt( ganacioPorProducto(listaPoductos[4]) );
 
     const imprimirCompra = document.getElementById("precioCompraPerro");
     imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[4].costoCompra;
     
     const imprimirPorcentaje = document.getElementById("porcentajePerro");
     imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[4].porcentaje;
    
     const imprimirventa = document.getElementById("costoVentaPerro");
     imprimirventa.innerText = "Venta al publico: " + costoVenta;
 
     const imprimirGanancia = document.getElementById("gananciaProductoPerro");
     imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
  }  

  //FUNCIONES PARA EL GATO 5
  listaPoductos.push(
    {
        name: 'gato',
        costoCompra: 495,
        porcentaje: 0.37,
    }
) 
function onClickGato(){
  const costoVenta = parseInt( calcularUtilidadBruta(listaPoductos[5]) );
   const gananciaProducto = parseInt( ganacioPorProducto(listaPoductos[5]) );

   const imprimirCompra = document.getElementById("precioCompraGato");
   imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[5].costoCompra;
   
   const imprimirPorcentaje = document.getElementById("porcentajeGato");
   imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[5].porcentaje;
  
   const imprimirventa = document.getElementById("costoVentaGato");
   imprimirventa.innerText = "Venta al publico: " + costoVenta;

   const imprimirGanancia = document.getElementById("gananciaProductoGato");
   imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
}  

  //FUNCIONES PARA EL RATON 6
  listaPoductos.push(
    {
        name: 'raton',
        costoCompra: 539,
        porcentaje: 0.37,
    }
) 
function onClickRaton(){
  const costoVenta = parseInt( calcularUtilidadBruta(listaPoductos[6]) );
   const gananciaProducto = parseInt( ganacioPorProducto(listaPoductos[6]) );

   const imprimirCompra = document.getElementById("precioCompraRaton");
   imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[6].costoCompra;
   
   const imprimirPorcentaje = document.getElementById("porcentajeRaton");
   imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[6].porcentaje;
  
   const imprimirventa = document.getElementById("precioVentaRaton");
   imprimirventa.innerText = "Venta al publico: " + costoVenta;

   const imprimirGanancia = document.getElementById("gananciaProductoRaton");
   imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
}  

  //FUNCIONES PARA EL HAMSTER 7
  listaPoductos.push(
    {
        name: 'hamster',
        costoCompra: 584,
        porcentaje: 0.37,
    }
) 
function onClickHamster(){
  const costoVenta = parseInt( calcularUtilidadBruta(listaPoductos[7]) );
   const gananciaProducto = parseInt( ganacioPorProducto(listaPoductos[7]) );

   const imprimirCompra = document.getElementById("precioCompraHamster");
   imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[7].costoCompra;
   
   const imprimirPorcentaje = document.getElementById("porcentajeHamster");
   imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[7].porcentaje;
  
   const imprimirventa = document.getElementById("precioVentaHamster");
   imprimirventa.innerText = "Venta al publico: " + costoVenta;

   const imprimirGanancia = document.getElementById("gananciaProductoHamster");
   imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
}  

  //FUNCIONES PARA EL CONEJO 8
  listaPoductos.push(
    {
        name: 'conejo',
        costoCompra: 629,
        porcentaje: 0.37,
    }
) 
function onClickConejo(){
  const costoVenta = parseInt( calcularUtilidadBruta(listaPoductos[8]) );
   const gananciaProducto = parseInt( ganacioPorProducto(listaPoductos[8]) );

   const imprimirCompra = document.getElementById("precioCompraConejo");
   imprimirCompra.innerText = "Precio de Compra: " + listaPoductos[8].costoCompra;
   
   const imprimirPorcentaje = document.getElementById("porcentajeConejo");
   imprimirPorcentaje.innerText = "Porcentaje de ganacia: " + listaPoductos[8].porcentaje;
  
   const imprimirventa = document.getElementById("precioVentaConejo");
   imprimirventa.innerText = "Venta al publico: " + costoVenta;

   const imprimirGanancia = document.getElementById("gananciaProductoConejo");
   imprimirGanancia.innerText = "Ganacia final del producto: " + gananciaProducto;
}  