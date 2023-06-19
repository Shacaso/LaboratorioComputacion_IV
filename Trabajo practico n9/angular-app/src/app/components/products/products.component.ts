import { Component } from '@angular/core';
import { Instrument } from '../../model/Instrument';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Instruments:Instrument[] = [] as Instrument[]; 

  ngOnInit():void{
    this.getInstrument();
  }

  getInstrument(){
    fetch('http://localhost:3001/api/instruments/getAll')
    .then(res => res.json())
    .then(data => this.Instruments = (data));
  }

  sendCost(costoEnvio:string):string{
    return (costoEnvio === 'G') ? '<h6 class="text-success">Envio gratis a todo el pais</h6>' : `<h6 class="text-warning">Costo de envio interior de Argentina: ${costoEnvio}</h6>`;
  }
}
