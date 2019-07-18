function mostrar()
{

	var contador=0;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta == "si")
	{
		contador++;
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("Ese no es un número, ingrese uno");
		}

		if(numero < 0)//Suma de negativos
		{
			sumaNegativos+=numero;
			cantidadNegativos++;
		}

		if(numero > 0)//Suma de positivos
		{
			sumaPositivos+=numero;
			cantidadPositivos++;
		}

		if(numero == 0)//Cantidad de ceros
		{
			cantidadCeros++;
		}

		if(numero % 2 == 0 && numero != 0)//Cantidad de pares
		{
			cantidadPares++;
		}

		respuesta=prompt("Desea ingresar un número?");
	}

	
	promedioPositivos=sumaPositivos/cantidadPositivos;//Promedio de positivos
	promedioNegativos=sumaNegativos/cantidadNegativos;//Promedio de negativos
	diferencia=sumaPositivos-sumaNegativos;//Diferencia entre positivos y negativos


	document.write("Suma de números negativos: "+sumaNegativos+"</br>");
	document.write("Suma de números positivos: "+sumaPositivos+"</br>");
	document.write("Cantidad de números positivos: "+cantidadPositivos+"</br>");
	document.write("Cantidad de números negativos: "+cantidadNegativos+"</br>");
	document.write("Cantidad de ceros: "+cantidadCeros+"</br>");
	document.write("Cantidad de números pares: "+cantidadPares+"</br>");
	document.write("Promedio de números positivos: "+promedioPositivos+"</br>");
	document.write("Promedio de números negativos: "+promedioNegativos+"</br>");
	document.write("La diferencia entre positivos y negativos es: "+diferencia+"</br>");


}//FIN DE LA FUNCIÓN