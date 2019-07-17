function mostrar()
{
	var contador=0;
	var acumulador=0;

	while(contador<5)
	{
		contador++
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("Ingrese un número");
		}
		acumulador+=numero;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN