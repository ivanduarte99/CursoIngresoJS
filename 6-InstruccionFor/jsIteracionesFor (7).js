function mostrar()
{
    cantidadDivisores=0;
    numero=prompt("Ingrese un número");
    numero=parseInt(numero);

    for (i = 1; i < numero; i++)
    {
        if (numero % i === 0) 
        {
            console.log(i);
            cantidadDivisores++;
        }
    }
    console.log("Cantidad de números divisores: "+cantidadDivisores)
    
}//FIN DE LA FUNCIÓN