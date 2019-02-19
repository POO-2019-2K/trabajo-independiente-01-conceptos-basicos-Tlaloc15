export default class empleados {
    constructor(numTrabajador, nombre, apellido, puesto, edad, genero, dTrabajando) {
        this._numTrabajador = numTrabajador;
        this._nombre = nombre.toUpperCase();
        this._apellido = apellido.toUpperCase();
        this._puesto = puesto.toUpperCase();
        this._edad = edad;
        this._genero = genero;
        this._dTrabajando = dTrabajando;
        this._fechaInicio = "0";
        this._hoy = "0";
    }

    _informacion(){
        console.log(`Empleado:
        N°: ${this._numTrabajador},
        Nombre: ${this._nombre},
        Apellido: ${this._apellido},
        Puesto: ${this._puesto},
        Edad: ${this._edad},
        Genero: ${this._genero}`);
    }

        setDiasTrabajando(){
            let dif = this._fechaInicio - this._hoy;
            let dias = Math.floor(dif / (1000 * 60 * 60 * 24));
            console.log(`${this.dias}`);
        }
    }
