function mostrar()
{
    var cantidadPares=0;

    numero=prompt("Ingrese un número");
    numero=parseInt(numero);

    for (i = 1 ; i <= numero ; i++)
    {
        if(i % 2 == 0)
        {
            console.log(i);
            cantidadPares++;
        }
    }
    console.log("La cantida de números pares es "+cantidadPares)

}//FIN DE LA FUNCIÓN