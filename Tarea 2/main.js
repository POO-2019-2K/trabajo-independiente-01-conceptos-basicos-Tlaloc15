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
empelado1._setDiasTrabajando();

//Restaurante

let reservacion1 = new reservacion("0", "0", "Carlos", "Garcia", "312-194-13-76", "Maculino", "");
reservacion1._fecha = "Feb 22 2019";
reservacion1._hora = "19:00";
reservacion1._setDiasFaltantes();
reservacion1.informacion();

//Cuenta bancaria:
let cuenta1 = new Movimiento("Carlos", "Garcia", "19867", "Premier", "Carlos de la Madrid Brizuela #19", "3312-194-13-76", "cgarcia47@ucol.mx");
cuenta1._informacion();
cuenta1._saldoTotal = 2900;
cuenta1._deposito = 1200;

cuenta1.move1();
console.log(`Tu saldo total es de ${cuenta1._saldoTotal} pesos`);
cuenta1._retiro = 1270;
cuenta1.move2();
console.log(`Tu saldo total es de ${cuenta1._saldoTotal} pesos`);

//Medico
let paciente1 = new Paciente("Carlos", "Garcia", "18", "Masculino", "Carlos de la Madrid Brizuela #19", "312-194-13-76", "cgarcia47@ucol.mx", "0");
paciente1.informacion();
paciente1._fechaCita = "Feb 20 2019";


//viatico
