var marca = document.getElementById("marca");
var modelo = document.getElementById("modelo");
var patente = document.getElementById("patente");
var listadoVehiculos = document.getElementById("listadoVehiculos");
var Car = /** @class */ (function () {
    function Car(_marca, _modelo, _patente) {
        this._marca = _marca;
        this._modelo = _modelo;
        this._patente = _patente;
    }
    Car.prototype.marca = function () {
        return this._marca;
    };
    Car.prototype.modelo = function () {
        return this._modelo;
    };
    Car.prototype.patente = function () {
        return this._patente;
    };
    return Car;
}());
var guardarVehiculo = function () {
    var car = new Car(marca.value, modelo.value, patente.value);
    var text = document.createElement("li");
    text.innerHTML = "[Marca: ".concat(car.marca(), ",   Modelo: ").concat(car.modelo(), ",   Patente: ").concat(car.patente(), "]");
    listadoVehiculos.appendChild(text);
};
