function mostrar()
{
    do{
        sexo=prompt("Ingrese f o m");
        sexo=sexo.toLowerCase();
    }while(sexo != "f" && sexo != "m");
    document.getElementById('Sexo').value=sexo;
    /*var sexo = prompt("ingrese f ó m .");

    sexo=sexo.toLowerCase();

    while(sexo!="f"&&sexo!="m")
    {
        sexo=prompt("Ingrese f o m");
    }
    document.getElementById('Sexo').value=sexo;*/
}//FIN DE LA FUNCIÓN