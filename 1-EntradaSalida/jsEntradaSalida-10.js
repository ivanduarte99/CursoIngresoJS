/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe=document.getElementById('importe').value;
    
    importe=parseInt(importe);
    descuento=importe/100*25;
    document.getElementById('resultado').value=importe-descuento;
}
