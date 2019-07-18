function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("Ese no es un número, ingrese uno");
		}
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}
		if(numero>maximo)
		{
			maximo=numero;
		}
		respuesta=prompt("Desea ingresar un número?");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN