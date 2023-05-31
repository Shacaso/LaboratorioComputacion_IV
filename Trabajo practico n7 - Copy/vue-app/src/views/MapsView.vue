<template>
  <div class="maps">
    <MapsLocation/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MapsLocation from '../components/Maps-location.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'MapsView',
  components: {
    MapsLocation,
  },
});
</script>
