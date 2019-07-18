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
    var estadoCivil;
    var sueldo;
    var legajo;
    var nacionalidad;

    while(contador == 0)//Edad
    {
        edad=prompt("Ingrese su edad, por favor");
        edad=parseInt(edad);

        while(isNaN(edad))
        {
            edad=prompt("La edad ingresada no es correcta, vuelva a ingresarla");
        }

        if(edad < 81 && edad > 17)
        {
            contador++;
        }
    }

    while(sexo != "f" && sexo != "m")//Sexo
    {
        sexo=prompt("Ingrese su sexo, por favor (F para femenino y M para masculino)");
    }

    while(contador==0)//EstadoCivil
    {
        estadoCivil=prompt("Ingrese su estado civil (1 para solteros, 2 para casados, 3 para divorciados y 4 para viudos)");
        estadoCivil=parseInt(estadoCivil);

        while(isNaN(estadoCivil))
        {
            estadoCivil=prompt("Estado civil no válido, (1 para solteros, 2 para casados, 3 para divorciados y 4 para viudos)");
        }

        switch(estadoCivil)
        {
            case '1':
                contador++;
                estadoCivil="Soltero/a";
                break;
            case '2':
                contador++;
                estadoCivil="Casado/a";
                break;
            case '3':
                contador++;
                estadoCivil="Divorciado/a";
                break;
            case '4':
                contador++;
                estadoCivil="Viudo/a";
                break;
            default:
                alert("Estado civil inválido, intenténtelo nuevamente");
        }
    }



    document.getElementById('Edad').value=edad;
    document.getElementById('Sexo').value=sexo;
    document.getElementById('EstadoCivil').value=estadoCivil;
    document.getElementById('Sueldo').value=sueldo;
    document.getElementById('Legajo').value=legajo;
    document.getElementById('Nacionalidad').value=nacionalidad;

}
