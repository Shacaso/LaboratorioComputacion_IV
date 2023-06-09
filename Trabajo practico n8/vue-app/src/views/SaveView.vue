<template>
  <div class="save-product">

    <form class="size-form">

      <label class="form-label" for="instrumento">Instrumento</label>
      <input class="form-control" name="instrumento" id="instrumento" v-model="instrumentSelected.instrumento" type="text">

      <label class="form-label" for="marca">Marca</label>
      <input class="form-control" name="marca" id="marca" v-model="instrumentSelected.marca" type="text">

      <label class="form-label" for="modelo">Modelo</label>
      <input class="form-control" name="modelo" id="modelo" v-model="instrumentSelected.modelo" type="text">

      <label class="form-label" for="imagen">Imagen</label>
      <input class="form-control" name="imagen" id="imagen" v-model="instrumentSelected.imagen" type="text">

      <label class="form-label" for="precio">Precio</label>
      <input class="form-control" name="precio" id="precio" v-model="instrumentSelected.precio" type="text">

      <label class="form-label" for="costoEnvio">Costo Envio</label>
      <input class="form-control" name="costoEnvio" id="costoEnvio" v-model="instrumentSelected.costoEnvio" type="text">

      <label class="form-label" for="cantidadVendida">Cantidad Vendida</label>
      <input class="form-control" name="cantidadVendida" id="cantidadVendida" v-model="instrumentSelected.cantidadVendida"
        type="text">

      <label class="form-label" for="descripcion">descripcion</label>
      <input class="form-control" name="descripcion" id="descripcion" v-model="instrumentSelected.descripcion" type="text">

      <button type="button" @click="onSubmit(instrumentSelected)" class="btn btn-lg btn-primary mt-3">Send</button>
    </form>



  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Instrument } from '@/model/Instrument';
import { ref } from 'vue';

export default defineComponent({
  name: 'SaveView',
  components: {
  },
  data() {
    return {
      id: +this.$route.params.id,
      Instrument: Object
    }
  },
  setup() {
    const instrumentSelected = ref<Instrument>(new Instrument())
    return {
      instrumentSelected
    }
  },
  created() {

    (this.id > 0 && this.fetchData())

  },
  methods: {
    fetchData() {
      fetch('http://localhost:3001/api/instruments/get/' + this.$route.params.id)
        .then(res => res.json())
        .then(data => this.instrumentSelected = data)
    },
    saveText() {
      (this.id > 0 ? `<h1 className="text-center mb-10"> Update location</h1>` : `<h1 className="text-center mb-10"> Save
        location</h1>`)
    },
    onSubmit(data:any) {
      console.log(data)
                  fetch(`http://localhost:3001/api/instruments/save/${data.id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
                .then(() => window.location.href = 'http://localhost:8080/products');
        }
    
  },
});
</script>

<style>
.size-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
}

.save-product {
  display: flex;
  justify-content: center;
}
</style>
