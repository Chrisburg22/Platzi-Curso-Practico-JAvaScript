//vARIABLE EN LA QUE GUARDAREMOS LOS ELEMENTOS DEL ARREAY
var  List =[];



//PROMEDIO
function calcularPromedio(lista){
   /**
    * let sumaLista = 0;
    *   for (let i = 0; i < lista.length; i++) {
    *  sumaLista = sumaLista + lista[i]; }
    * El .reduce es como un ciclo for que permite hacer un buque para recorrer el array
    * */
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;}
  );  
  
  const promedioLista = sumaLista / lista.length;
  return promedioLista;

}

  //FUNCION PARA SABER SI UN NUMERO ES PAR
  function esPar(numeroP){
      if(numeroP % 2 === 0){
          return true;
      }else{
          return false;
      }
  }
 
  //FUNCION PARA COMPARAR ELEMENTOS Y ACOMODAR UN ARREGLO DE NUMEROS
 function comparar(a, b){
     return a-b;
 }
 
  //FUNCION PARA SACAR LA MEDIANA
  function calcularMediana(lista){
    
    lista.sort(comparar);

    const mitadlLista =  parseInt(lista.length / 2);//ParseInt NOS PERMITE CONVERTIR UN NUMERO DECIMAL A UNO ENTERO: 2.5 --> 2
    
   if (esPar(lista.length)){
       const elemento1 = lista[mitadlLista - 1];
       const elemento2 = lista[mitadlLista];
       const promedioElem1y2 = calcularPromedio( [elemento1,elemento2,] );
       return promedioElem1y2;
   }else{
       return lista[mitadlLista];
  }
}


function calcularModa(lista){
    
    const listaCount = {};

    lista.map(function(elemento){                                     //EL METODO MAP NOS AYUDARA A EL CREAR UN OBJETO A PARTIR DE UN ARRAY
        if(listaCount[elemento]){                                         //QUE PUEDA CALCULAR CUANTAS VECES SE REPITE UN ELEMENTO
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    } );


const listaArray = Object.entries(listaCount).sort(        //EL METODO ENTRIES NOS VA A AYUDAR A CONVERTIR 
  function (elementoA, elementoB) {                               //UN OBJETO A UN NUEVO ELEMENTO ARRAY 
    return elementoA[1] - elementoB[1];
  }
);
return listaArray[listaArray.length - 1];
}







//EN ESTA PARTE SE DEFINEN LA FUNCIONES PARA INTERACUAR CON HTML
//FUNCION PARA AGREGAR ELEMENTOS A LA LISTA
var  List =[];
function onClickButtonListNumber(){

    const element=document.getElementById("inputList");
    const elementValue=element.value;

    List.push(elementValue);
    const fixLista = List.map( (i) => Number(i));
    fixLista.sort(comparar);

    const finalList = document.getElementById("FinalList");
    finalList.innerText = "Elementos en la lista: " + fixLista ;
}

//FUNCION PARA CALCULAR EL PROMEDIO EN HTML
function onClickButtonPromedio(){
    
    const fixLista = List.map( (i) => Number(i));//MODIFICAMOS LOS STRING POR VALORES NUMERICOS
    const promedio = calcularPromedio(fixLista);//CALCULAMOS EL PROMEDIO
    const finalPromedio = document.getElementById("calcularPromedioP");
    finalPromedio.innerText = "El promedio es " + promedio;

}

//FUNCION PARA CALCULAR LA MEDIA EN HTML
function onClickButtonMediana(){
    
    const fixLista = List.map( (i) => Number(i));//MODIFICAMOS LOS STRING POR VALORES NUMERICOS
    const mediana= calcularMediana(fixLista);//CALCULAMOS EL LA MEDIANA
    const finalMediana = document.getElementById("calcularMedianaP");
    finalMediana.innerText = "La mediana es " + mediana;

}

//FUNCION PARA CALCULAR LA MODA DESDE EL HTML
function onClickButtonModa(){

    const fixLista = List.map((i) =>Number(i)) ;
    const moda = calcularModa(fixLista);
    const finalModa = document.getElementById("calcularModaP");
    finalModa.innerText = "La moda es " + moda[0];
}