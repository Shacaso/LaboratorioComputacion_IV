<template>
  <div class="detail-product">
      <div class="card mt-3 rounded-5" style="min-height: 600px;">
        <div class="row g-0">
          <div class="col">
            <img class="size-img rounded-5"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1678352679570/88aebfe3-3bfc-4aca-a068-cf97991d13df.svg"
              alt="react img">
          </div>
          <div class="col-7 actions">
            <div class="card-body">
              <h5 class="card-title">{{ listInstrument.instrumento }}</h5>
              <hr>
              <p>$ {{ listInstrument.precio }}</p>
              <p>Costo de envio Interior de Argentina $ {{ listInstrument.costoEnvio }}</p>
              <p>{{ listInstrument.cantidadVendida }} vendidos</p>
              <button class="btn btn-light">Add to Cart</button>
           
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
      listInstrument: Object
    }
  },
  created() {

    this.fetchData()

  },
  methods: {
    fetchData() {
      fetch('http://localhost:3001/api/instruments/get/'+ this.$route.params.id)
        .then(res => res.json())
        .then(data =>  this.listInstrument = data)
    },
  },
});
</script>

<style scoped>
.size-img {
  height: 600px;
  width: 100%;
  object-fit: cover;
}

.actions {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
</style>