function mostrar()
{
    numero=prompt("Ingrese un número");
    numero=parseInt(numero);        
    primo=true;

    for(i = 1 ; i < numero ; i++)
    {
        if(numero % i == 0 && i != 1)
        {
            primo=false;
        }
    }

    if(primo == true)
    {
        console.log("El número es primo");
    }else
    {
        console.log("El número no es primo");
    }
}//FIN DE LA FUNCIÓN