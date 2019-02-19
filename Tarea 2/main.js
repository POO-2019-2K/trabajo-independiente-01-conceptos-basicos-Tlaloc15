import empleados from "./empleados.js";
import reservacion from "./restaurante.js";
import Movimiento from "./banco.js";
import Paciente from "./medico.js";
import Viaticos from "./viaticos.js";



//Empleados

let empleado1 = new empleados("17353", "Carlos", "Garcia", "Jefe", "18", "Masculino", "0");
empleado1.informacion();
empleado1._hoy = "Feb 19 2019";
empleado1._fechaInicio = "febrero 16 2017";
empleado1.setDiasTrabajando();

//Restaurante

let reservacion1 = new reservacion("Carlos", "Garcia", "312-194-13-76", "Maculino", "");
reservacion1._fecha = "Feb 22 2019";
reservacion1._hora = "19:00";
reservacion1.setDiasFaltantes();
reservacion1.informacion();

//Cuenta bancaria

let cuenta1 = new Movimiento("Carlos", "Garcia", "19867", "Premier", "Carlos de la Madrid Brizuela #19", "3312-194-13-76", "cgarcia47@ucol.mx");
cuenta1.informacion();
cuenta1._saldoTotal = 2900;
cuenta1._deposito = 1200;

cuenta1.Movimiento1();
console.log(`Tu saldo total es de ${cuenta1._saldoTotal} pesos`);
cuenta1._retiro = 1270;
cuenta1.Movimiento1();
console.log(`Tu saldo total es de ${cuenta1._saldoTotal} pesos`);

//Medico

let paciente1 = new Paciente("Carlos", "Garcia", "18", "Masculino", "Carlos de la Madrid Brizuela #19", "312-194-13-76", "cgarcia47@ucol.mx", "Feb 20 2019");
paciente1.informacion();


//viatico

let viaticos1 = new Viaticos("Carlos", "Garcia", "Rapero", "18", "Carlos de la Madrid Brizuela #19", "312-194-13-76", "cgarcia47@ucol.mx")
viaticos1.informacion();
viaticos1._gastoParcial = 7900;
viaticos1.gastoTotal = 17000;

viaticos1.Viatico();
console.log(`El gasto total es de ${viaticos1.gastoTotal} pesos`);