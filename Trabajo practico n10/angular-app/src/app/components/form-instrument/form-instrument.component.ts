import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/model/Instrument';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-instrument',
  templateUrl: './form-instrument.component.html',
  styleUrls: ['./form-instrument.component.css']
})
export class FormInstrumentComponent implements OnInit {
  instrumentForm: FormGroup;
  instrument: Instrument = {} as Instrument;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.instrumentForm = this.formBuilder.group({
      id: [this.id, Validators.required],
      instrumento: [this.instrument.instrumento ?? '', Validators.required],
      marca: [this.instrument.marca ?? '', Validators.required],
      modelo: [this.instrument.modelo ??'', Validators.required],
      imagen: [this.instrument.imagen ??'', Validators.required],
      precio: [this.instrument.precio ??'', Validators.required],
      costoEnvio: [this.instrument.costoEnvio ??'', Validators.required],
      cantidadVendida: [this.instrument.cantidadVendida ??'', Validators.required],
      descripcion: [this.instrument.descripcion ??'', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getInstrument();
  }

  getInstrument() {
    fetch(`http://localhost:3001/api/instruments/get/${this.id}`)
      .then(res => res.json())
      .then(data => this.instrument = (data));
  }

  sendCost(costoEnvio: string): string {
    return (costoEnvio === 'G') ? '<h6 class="text-success">Envio gratis a todo el pais</h6>' : `<h6 class="text-warning">Costo de envio interior de Argentina: ${costoEnvio}</h6>`;
  }

  onSubmit(event: any) {
    event.preventDefault()
    const formData = this.instrumentForm.value;
    fetch(`http://localhost:3001/api/instruments/save/${this.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData) //PASS
    })
      .then(() => (window.location.href = 'http://localhost:4200/'))
  }
}

// const url = Number(this.id) > 0
//   ? 'http://168.194.207.98:8081/api_localidad/put_localidad.php'
//   : 'http://168.194.207.98:8081/api_localidad/post_localidad.php'

// const methodURL = Number(this.id) > 0
//   ? 'PUT'
//   : 'POST'

