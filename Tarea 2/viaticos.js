 export default class Viaticos {
    constructor(nombre, apellido, trabajo, edad, direccion, telefono, email){
        this._nombre = nombre;
        this._apellido = apellido;
        this._trabajo = trabajo;
        this._edad = edad;
        this._direccion = direccion;
        this._telefono = telefono;
        this._email = email;
        this._gastoParcial = 0;
        this._gastoTotal = 0;
        this._retiro = 0;
 }


 _informacion(){
    console.log(`Cuenta bancaria:
    Nombre: ${this._nombre},
    Apellido: ${this._apellido},
    Trabajo: ${this._trabajo},
    Edad: ${this._edad},
    Direccion: ${this._direccion},
    Telefono: ${this._telefono},
    Email: ${this._email}`);
}

getGasto1(){
    return this._gastoParcial;
}
setGasto1(){
    this._gastoParcial = gastoParcial;
}

getGastos(){
    return this._gastoTotal;

}
setGasto(){
    this._gastoTotal = gastoTotal;
}

viatico(){
    this.gastoTotal = this._gastoParcial + this._gastoTotal
}
}