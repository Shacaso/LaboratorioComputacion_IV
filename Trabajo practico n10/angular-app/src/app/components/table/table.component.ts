import { Component } from '@angular/core';
import { Instrument } from 'src/app/model/Instrument';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  instruments:Instrument[] = [] as Instrument[]; 

  ngOnInit():void{
    this.getInstrument();
  }

  getInstrument(){
    fetch('http://localhost:3001/api/instruments/getAll')
    .then(res => res.json())
    .then(data => this.instruments = (data));
  }

  sendCost(costoEnvio:string):string{
    return (costoEnvio === 'G') ? '<h6 class="text-success">Envio gratis a todo el pais</h6>' : `<h6 class="text-warning">Costo de envio interior de Argentina: ${costoEnvio}</h6>`;
  }

  deleteInstrument(e:string){
    fetch('http://localhost:3001/api/instruments/delete/' + e);
    location.reload();
  }

}
