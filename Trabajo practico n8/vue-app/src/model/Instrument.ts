export class Instrument {
    id: string;    
    instrumento: string;
    marca: string;
    modelo: string;
    imagen: string;
    precio: string;
    costoEnvio: string;
    cantidadVendida: string;
    descripcion: string;

    constructor(id = "0", instrumento = "", marca = "", modelo = "", imagen = "", precio = "", costoEnvio = "", cantidadVendida = "", descripcion = ""){
        this.id = id;
        this.instrumento = instrumento;
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
        this.precio = precio;
        this.costoEnvio = costoEnvio;
        this.cantidadVendida = cantidadVendida;
        this.descripcion = descripcion;
    }


    
}