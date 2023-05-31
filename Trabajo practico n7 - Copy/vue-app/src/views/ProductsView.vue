<template>
  <div class="product-view">
    <div v-for="instrument in listInstrument" :key="instrument.id">
      <div class="card mt-3 mb-3 rounded-5" style="max-height: 170px;">
        <div class="row g-0">
          <div class="col">
            <img class="size-img rounded-5"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1678352679570/88aebfe3-3bfc-4aca-a068-cf97991d13df.svg"
              alt="react img">
          </div>
          <div class="col-9">
            <div class="card-body">
              <h5 class="card-title">{{ instrument.instrumento }}</h5>
              <p>$ {{ instrument.precio }}</p>
              <p>Costo de envio Interior de Argentina $ {{ instrument.costoEnvio }}</p>
              <p>{{ instrument.cantidadVendida }} vendidos</p>
            </div>
          </div>
          <div class="col actions">
            <a v-bind:href="'http://localhost:8080/detailProduct/'+(instrument.id)">
              <button class="btn btn-light">View</button>
            </a>

            <a class="btn btn-light">Edit</a>
            <a @click="deleteInstrument(instrument.id)" class="btn btn-light">Delete</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductsView',
  components: {
  },
  data() {
    return {
      listInstrument: [],
      link: 'http://localhost:8080/detailProduct/1'
    }
  },
  created() {
    this.fetchData()

  },
  methods: {
    fetchData() {
      fetch('http://localhost:3001/api/instruments/getAll')
        .then(res => res.json())
        .then(data => this.listInstrument = data)
    },
    deleteInstrument(id:number){
      fetch('http://localhost:3001/api/instruments/delete/' + id)
      alert('Delete successfully')
    }
  },
});
</script>

<style scoped>
.size-img {
  height: 170px;
  width: 100%;
  object-fit: cover;
}

.actions {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.actions button {
  margin: 4px;
}
</style>