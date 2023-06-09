<template>
  <div class="home-view">
    <Main msg='Hello Vue!'/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from '../components/Main-app.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'MainView',
  components: {
    Main,
  },
});
</script>
