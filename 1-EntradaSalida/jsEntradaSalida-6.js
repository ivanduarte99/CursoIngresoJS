/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1=document.getElementById('numeroUno').value;
    var numero2=document.getElementById('numeroDos').value;

    alert(parseInt(numero1)+parseInt(numero2));
}

