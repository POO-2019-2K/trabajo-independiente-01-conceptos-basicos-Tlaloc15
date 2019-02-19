export default class Paciente {
    constructor(nombre, apellido, edad, sexo, direccion, telefono, email){
        this._nombre = nombre.toUpperCase();
        this._apellido = apellido.toUpperCase();
        this._edad = edad;
        this.sexo = sexo;
        this._direccion = direccion;
        this._telefono = telefono;
        this._email = email;
        this._fechaCita = _fechaCita;
    }

    _informacion(){
        console.log(`Cita Paciente:
        Nombre: ${this._nombre},
        Apellido: ${this._apellido},
        Edad: ${this._edad},
        Sexo: ${this._sexo},
        Direccion: ${this._direccion},
        Telefono: ${this._telefono},
        Email: ${this._email},`);
    }

    getCita(){
        return this. _fechaCita;
    }
    setCita(){
        this._fechaCita = _fechaCita;
    }
}