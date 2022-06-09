//CUADRADO
console.group("Cuadrados");
//Funcion del perimetro del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}
//Funcion del Area del cuadrado
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();


//TRIANGULO 
console.group("Triangulos");
//Funcion perimetro del triangulo
function perimetroTriangulo(lado1, lado2, base){
    const respuesta =  Number(lado1) + Number(lado2) + Number(base);
    alturaTriangulo(lado1, lado2, base);
    return respuesta;
}
//Funcion del Area del Triangulo
function areaTriangulo(base, altura){
    return (base * altura)  /  2;
}
//Conocer  si es o no isoceles
function alturaTriangulo(lado1,lado2, base){
    if (lado1  == lado2 && lado1 != base){
        alert("Isoceles");
        const altura= Math.sqrt(  ((lado1**2) - (base**2)  /  4)  );
        console.log("altura");
    }
}
console.groupEnd();

f
//CIRCULO
console.group("Circulos");
//Funcion para lel diametro del circulo
function diametroCirculo(radio){
    return radio * 2;
}
//Funcion para el perimetro del circulo
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro *  Math.PI;
}
//Funcion para el area del circulo
function areaCirculo(radio){
    return (radio * radio) * Math.PI;

}
console.groupEnd();





//En esta seccion interactuamos con el HTML


//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro); 
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }


//Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo");
    const value1= input1.value;
  
    const input2 = document.getElementById("InputTriangulo2");
    const value2= input2.value;
    
    const input3= document.getElementById("InputTriangulo3");
    const value3= input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

    
  function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const input4 = document.getElementById("InputTriangulo4");
    const value4= input4.value;

    const area = areaTriangulo(value3, value4);
    alert(area);
  }


  //Circulos
  function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
  
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
  }
  function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
  
    const area = areaCirculo(value);
    alert(area);
  }
