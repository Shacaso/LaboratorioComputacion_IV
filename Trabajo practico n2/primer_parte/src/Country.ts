export class Country  {
    codigoPais: number;
    nombrePais: string;
    capitalPais: string;
    región: string;
    población: number;
    latitud: number;
    longitud: number;

    constructor(codigoPais:number, nombrePais: string,capitalPais: string,región: string,población: number,latitud: number,longitud: number){
        this.codigoPais=codigoPais;
        this.nombrePais=nombrePais;
        this.capitalPais=capitalPais;
        this.región=región;
        this.población=población;
        this.latitud=latitud;
        this.longitud=longitud;
    }
    
  }