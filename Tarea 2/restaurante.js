export default class Restaurante {
    constructor(nombre, apellido, telefono, sexo, hora) {
        this._nombre = nombre.toUpperCase();
        this._apellido = apellido.toUpperCase();
        this._telefono = telefono;
        this._sexo = sexo;
        this._fecha = "0";
        this._dias = Date;
        this.hora = hora;

    }
    getfecha(){
        return this._fecha;
    }
    setfecha(){
        this._fecha = fecha;
    }

    gethora(){
        return this._hora;
    }
    sethora(){
        this._hora = hora;
    }

    setDiasFaltantes(){
        let dif = this._fecha - this._dias;
        let dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        console.log(`${this.dias}`);
    }
    informacion(){
        console.log(`Reservacion:
        Nombre: ${this._nombre},
        Apellido: ${this._apellido},
        Telefono: ${this._telefono},
        Sexo: ${this._sexo},
        Fecha: ${this._fecha},
        Hora: ${this._hora}`)
    }

}