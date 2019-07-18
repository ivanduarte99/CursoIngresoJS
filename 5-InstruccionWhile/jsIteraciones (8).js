function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
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
		if(numero<0)
		{
			negativo*=numero;
		}else
		{
			{
				positivo+=numero;
			}
		}
		}
		respuesta=prompt("Desea ingresar un número?");
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN