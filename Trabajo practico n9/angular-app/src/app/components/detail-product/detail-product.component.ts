import { Component } from '@angular/core';
import { Instrument } from 'src/app/model/Instrument';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  instrument:Instrument = {} as Instrument; 
  id = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute) { }

  ngOnInit():void{
    this.getInstrument();
  }

  getInstrument(){
    fetch(`http://localhost:3001/api/instruments/get/${this.id}`)
    .then(res => res.json())
    .then(data => this.instrument = (data));
  }
  
  sendCost(costoEnvio:string):string{
    return (costoEnvio === 'G') ? '<h6 class="text-success">Envio gratis a todo el pais</h6>' : `<h6 class="text-warning">Costo de envio interior de Argentina: ${costoEnvio}</h6>`;
  }

}
