/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var contador=0;
    var edad;
    var sexo;
    var estadoCivil=0;
    var sueldo;
    var legajo;
    var nacionalidad;

    while(contador == 0)//Edad
    {
        edad=prompt("Ingrese su edad (entre 18 y 80 inclusivo)");
        edad=parseInt(edad);

        while(isNaN(edad))
        {
            edad=prompt("La edad ingresada no es correcta, vuelva a ingresarla");
        }

        if(edad <= 80 && edad >= 18)
        {
            contador++;
        }
    }

    while(sexo != "F" && sexo != "M")//Sexo
    {
        sexo=prompt("Ingrese su sexo (F para femenino y M para masculino)");
        sexo=sexo.toUpperCase();
    }

    while(contador == 1)//EstadoCivil
    {
        estadoCivil=prompt("Ingrese su estado civil (1-soltero/a, 2-casado/a, 3-divorciado/a y 4-viudo/a)");

        switch(estadoCivil)
        {
            case '1':
                contador--;
                estadoCivil="Soltero/a";
                break;
            case '2':
                contador--;
                estadoCivil="Casado/a";
                break;
            case '3':
                contador--;
                estadoCivil="Divorciado/a";
                break;
            case '4':
                contador--;
                estadoCivil="Viudo/a";
                break;
            default:
                alert("Estado civil inválido, inténtelo de nuevo");
        }
    }

    while(contador == 0)//Sueldo
    {
        sueldo=prompt("Ingrese su sueldo (No menor a 8000)");
        sueldo=parseInt(sueldo);

        while(isNaN(sueldo))
        {
            sueldo=prompt("El sueldo ingresado no es correcto, vuelva a ingresarlo");
        }

        if(sueldo >= 8000)
        {
            contador++;
        }else
        {
            alert("Sueldo no válido, intentelo de nuevo");
        }
    }

    while(contador == 1)//Legajo
    {
        legajo=prompt("Ingrese un número de 4 digitos sin ceros en la izquierda");
        legajo=parseInt(legajo);
        digitos=legajo.toString().length;

        if(digitos == 4)
        {
            contador--;
        }else
        {
            alert("Número inválido, intentelo de nuevo");
        }

    }

    while(contador == 0)//Nacionalidad
    {
        nacionalidad=prompt("Ingrese su nacionalidad (A-Argentino/a, E-Extranjero/a o N-Nacionalizado/a)");
        nacionalidad=nacionalidad.toUpperCase();

        switch(nacionalidad)
        {
            case 'A':
                contador++;
                nacionalidad="Argentino/a";
                break;

            case 'E':
                contador++;
                nacionalidad="Extranjero/a";
                break;

            case 'N':
                contador++;
                nacionalidad="Nacionalizado/a";
                break;
                
            default:
                alert("Nacionalidad inválida, inténtelo de nuevo");
        }
    }

    document.getElementById('Edad').value=edad;
    document.getElementById('Sexo').value=sexo;
    document.getElementById('EstadoCivil').value=estadoCivil;
    document.getElementById('Sueldo').value=sueldo;
    document.getElementById('Legajo').value=legajo;
    document.getElementById('Nacionalidad').value=nacionalidad;

}
