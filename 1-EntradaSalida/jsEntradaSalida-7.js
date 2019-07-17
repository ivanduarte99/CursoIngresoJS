/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1=document.getElementById('numeroUno').value;
    var numero2=document.getElementById('numeroDos').value;

    alert(parseInt(numero1)+parseInt(numero2));
}

function restar()
{
    var numero1=document.getElementById('numeroUno').value;
    var numero2=document.getElementById('numeroDos').value;

    alert(parseInt(numero1)-parseInt(numero2));
}

function multiplicar()
{ 
    var numero1=document.getElementById('numeroUno').value;
    var numero2=document.getElementById('numeroDos').value;

    alert(parseInt(numero1)*parseInt(numero2));
}

function dividir()
{
	var numero1=document.getElementById('numeroUno').value;
    var numero2=document.getElementById('numeroDos').value;

    alert(parseInt(numero1)/parseInt(numero2));
}