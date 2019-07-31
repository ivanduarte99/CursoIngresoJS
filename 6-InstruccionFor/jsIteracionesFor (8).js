function mostrar()
{
    //Conseguir lo datos
    numero = parseInt(prompt("Ingrese un número"));
    contador = 0;

    //Loop hasta que i iguale al número ingresado
    for (i = 1 ; i <= numero ; i++) {
        //Calcular si el numero es divisible por sí mismo y uno
        //El modulo % nos va a dar lo que sobre de la operación
        //Y si es 0 es porque el número es divisible
        if (numero % i == 0) {
            //Incrementamos el contador
            contador ++;
        }
    }

    //Si el valor del contador es 2 entonces el número es primo
    //Porque los números primos son divisibles por 2 números, si mismo y 1
    if (contador == 2) {
        console.log("Número primo");
    }else{
        console.log("Número no primo");
    }
}//FIN DE LA FUNCIÓN