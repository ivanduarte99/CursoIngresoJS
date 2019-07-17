/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la sumaa de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedioedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var suma;

    numeroUno=document.getElementById('PrecioUno').value;
    numeroDos=document.getElementById('PrecioDos').value;
    numeroTres=document.getElementById('PrecioTres').value;

    suma=parseInt(numeroUno)+parseInt(numeroDos)+parseInt(numeroTres);

    alert("La suma es "+suma);
}
function Promedio () 
{
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var promedio;

    numeroUno=document.getElementById('PrecioUno').value;
    numeroDos=document.getElementById('PrecioDos').value;
    numeroTres=document.getElementById('PrecioTres').value;

    promedio=(parseInt(numeroUno)+parseInt(numeroDos)+parseInt(numeroTres))/3;

    alert("El promedio es "+promedio);
}
function PrecioFinal () 
{

    var numeroUno
    var NumeroDos
    var NumeroTres 
    var resultado
    var iva
    var precioFinal 

    numeroUno=document.getElementById('PrecioUno').value;
    NumeroDos=document.getElementById('PrecioDos').value;
    NumeroTres=document.getElementById('PrecioTres').value;

    numeroUno=parseInt(numeroUno);
    NumeroDos=parseInt(NumeroDos);
    NumeroTres=parseInt(NumeroTres);

    resultado= (numeroUno + NumeroDos + NumeroTres);

    iva= (resultado * 21 / 100);

    precioFinal= (resultado + iva);

    alert("El precio final es: "+precioFinal);
}