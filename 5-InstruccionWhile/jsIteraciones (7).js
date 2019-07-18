function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("No es un número, ingrese un número");
		}
		acumulador+=numero;
		respuesta=prompt("Desea ingresar un número?");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN