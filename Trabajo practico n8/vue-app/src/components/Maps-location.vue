<template>
  <div class="maps">
    <iframe class="size-maps" src="https://www.google.com/maps/embed/v1/place?q=Av.%20Las%20Heras%20y%20Av.%20San%20Martin%2C%20Ciudad%20de%20Mendoza&key=AIzaSyBEq7nhkPKV-rRkGcFmEWeAtICCTWf7pxs"></iframe> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MapsLocation'
});
</script>

<style>
.size-maps{
  height: 89.8vh;
  width: 100%;
}
</style>
