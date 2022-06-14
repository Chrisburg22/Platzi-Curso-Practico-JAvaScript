    //FUNCION PARA SABER SI UN NUMERO ES PAR
   function esPar(numeroP){
       if(numeroP % 2 === 0){
           return true;
       }else{
           return false;
       }
   }
   
   function calcularPromedio(lista){

   const sumaLista = lista.reduce(
     function (valorAcumulado = 0, nuevoElemento) {
       return valorAcumulado + nuevoElemento;}
   );  
   
   const promedioLista = sumaLista / lista.length;
   return promedioLista;
 
 }
 
   //FUNCION PARA COMPARAR ELEMENTOS Y ACOMODAR UN ARREGLO DE NUMEROS
  function comparar(a, b){
      return a - b;
  }
  
   //FUNCION PARA SACAR LA MEDIANA
   function calcularMediana(lista){
     
     lista.sort(comparar);
 
     const mitadlLista =  parseInt(lista.length / 2);
     
    if (esPar(lista.length)){
        const elemento1 = lista[mitadlLista - 1];
        const elemento2 = lista[mitadlLista];
        const promedioElem1y2 = calcularPromedio( [elemento1,elemento2,] );
        return promedioElem1y2;
    }else{
        return lista[mitadlLista];
   }
 }

//CALCULANDO LA MEDIANA GENERAL
const salarysPais = personasPais.map(
    function(persona){
        return persona.salary;
    }
);

const medianaGeneral = calcularMediana(salarysPais);

//CALCULANDO LA MEDIANA DEL 10%

const spliceStart =  parseInt( (salarysPais.length * 90)  / 100 );
const spliceCount = salarysPais.length - spliceStart;

const Top10 = salarysPais.splice(
    spliceStart, 
    spliceCount,
    );

const medianaTop10 = calcularMediana(Top10);

console.log({
    medianaGeneral,
    medianaTop10,
  });

