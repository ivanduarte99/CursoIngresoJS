function mostrar()
{
    var contador = 0;
    var cantidadPositivos = 0;
    var cantidadPares = 0;
    var cantidadImpares = 0;
    var cantidadCeros = 0;
    var sumaPositivos = 0;
    var sumaNegativos = 0;
    var respuesta = "si";
    var numeroMenor;
    var numeroMayor;
    var letraMenor;
    var letraMayor;
    var informeMinimo;
    var informeMaximo;

    while(respuesta == "si")
    {
        contador++;

        letra = prompt("Ingrese una letra");

        numero = parseInt(prompt("Ingrese un número entre -100 y 100"));

        while (isNaN(numero) || numero < -100 || numero > 100)
		{
			numero = prompt("Número inválido, intente nuevamente");
        }
        
        if (numero % 2 == 0 && numero != 0)
        {
            cantidadPares++;
        }

        if (numero % 2 == 1)
        {
            cantidadImpares++;
        }

        if (numero == 0)
        {
            cantidadCeros++;
        }

        if (numero > 0)
        {
            cantidadPositivos++;
        }

        if (numero > 0)
        {
            sumaPositivos += numero;
        }

        if (numero < 0)
        {
            sumaNegativos =+ numero;
        }

        if (contador == 1)
		{
            numeroMenor = numero;
            letraMenor = letra;
            numeroMayor = numero;
            letraMenor = letra;
        }

        if (numero < numeroMenor)
        {
            numeroMenor = numero;
            letraMenor = letra;
        }

        if (numero > numeroMayor)
        {
            numeroMayor = numero;
            letraMayor = letra;
        }

        respuesta = prompt("Desea ingresar un número?");
    }

    promedioPositivos = sumaPositivos / cantidadPositivos;

    console.log("Cantidad de números pares: " + cantidadPares);
    console.log("Cantidad de números impares: " + cantidadImpares);
    console.log("Cantidad de ceros: " + cantidadCeros);
    console.log("Promedio de los números positivos: " + promedioPositivos);
    console.log("Suma de todos los números negativos: " + sumaNegativos);
    console.log("Número menor: " + numeroMenor + " de letra: " + letraMenor);
    console.log("Número mayor: " + numeroMayor + " de letra: " +letraMayor);
}