function mostrar()
{//tomo la edad  
    var edad=document.getElementById('edad').value;

    if(edad<13)
    {
        alert("Menor de edad");
    }else
    {
        if(edad>17)
        {
            alert("Mayor de edad");
        }
    }
}//FIN DE LA FUNCIÓN