var marca = document.getElementById("marca") as HTMLInputElement;
var modelo = document.getElementById("modelo") as HTMLInputElement;
var patente = document.getElementById("patente") as HTMLInputElement;
var listadoVehiculos = document.getElementById("listadoVehiculos") as HTMLInputElement;

class Car {
    _marca: string
    _modelo: string
    _patente: string

    constructor(_marca: string, _modelo: string, _patente: string) {
        this._marca = _marca;
        this._modelo = _modelo;
        this._patente = _patente;
    }

    public marca() {
        return this._marca;
    }
    public modelo() {
        return this._modelo;
    }
    public patente() {
        return this._patente;
    }
}

var guardarVehiculo = () => {

    let car = new Car(marca.value, modelo.value, patente.value)
    let text = document.createElement("li")
    text.innerHTML = `[Marca: ${car.marca()},   Modelo: ${car.modelo()},   Patente: ${car.patente()}]`
    listadoVehiculos.appendChild(text)


}