function mostrar()
{//Genero el número RANDOM entre 1 y 10 
	var random=Math.floor(Math.random() * 10) + 1;

	if(random>8)
	{
		alert(random+", Excelente");
	}else
	{
		if(random<9 && random>3)
		{
			alert(random+", Aprobado");
		}else
		{
			alert(random+", Suerte para la próxima");
		}
	}
}//FIN DE LA FUNCIÓN