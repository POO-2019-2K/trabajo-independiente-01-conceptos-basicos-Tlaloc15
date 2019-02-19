export default class Cuenta {
    constructor(nombre, apellido, numerocuenta, tipocuenta, direccion, telefono, email){
        this._nombre = nombre.toUpperCase();
        this._apellido = apellido.toUpperCase();
        this._numerocuenta = numerocuenta;
        this._tipocuenta = tipocuenta;
        this._direccion = direccion;
        this._telefono = telefono;
        this._email = email;
        this._SaldoTotal = 0;
        this._deposito = 0;
        this._retiro = 0;

    }

    _informacion(){
        console.log(`Cuenta bancaria:
        Nombre: ${this._nombre},
        Apellido: ${this._apellido},
        No. Cuenta: ${this._numerocuenta},
        Tipo de cuenta: ${this._tipocuenta},
        Direccion: ${this._direccion},
        Telefono: ${this._telefono},
        Email: ${this._email},`);
    }

    getSaldo(){
        return this._SaldoTotal;
    }
    getSaldo(){
        this._SaldoTotal = SaldoTotal;
    }

    getDeposito(){
        return this._deposito;
    }
    getDeposito(){
        this._deposito = deposito;
    }
    getRetiro(){
        return this._retiro;
    }
    setRetiro(){
        this._retiro = retiro;
    }

    Movimiento1(){
        this._SaldoTotal = this._SaldoTotal + this._deposito;
    }
    Movimiento2(){
        this._SaldoTotal = this._SaldoTotal - this._retiro;
    }
}