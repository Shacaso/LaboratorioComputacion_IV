<template>
  <div class="home">
    <h3>Provincia</h3>
    <select class="cbox" v-model="selectedProvince" @change="handleChangeProvince">
      <option value="null">Seleccione una provincia</option>
      <option v-for="province in provinces" :key="province.id" :value="province.id">{{ province.provincia }}</option>
    </select>

    <h3 >Localidad</h3>
    <select class="cbox" v-model="selectedLocation">
      <option value="null">Seleccione una localidad</option>
      <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.localidad }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { Province } from '@/model/Province'
import { Location } from '@/model/Location'

export default {
  name: 'HomeView',
  setup () {
    const provinces = ref<Province[]>([])
    const locations = ref<Location[]>([])
    const selectedProvince = ref(null)
    const selectedLocation = ref(null)

    const fetchData = async () => {
      try {
        const response = await fetch('http://168.194.207.98:8081/api_localidad/get_provincias.php')
        const data = await response.json()
        provinces.value = data
      } catch (error) {
        console.error(error)
      }
    }

    const fetchLocationsByProvince = async (id:string) => {
      try {
        const response = await fetch(`http://168.194.207.98:8081/api_localidad/get_localidades_por_provincia.php?idprovincia=${id}`)
        const data = await response.json()
        locations.value = data
      } catch (error) {
        console.error(error)
      }
    }

    const handleChangeProvince = (event:any) => {
      const id = event.target.value
      fetchLocationsByProvince(id)
    }

    onMounted(() => {
      fetchData()
    })

    return {
      provinces,
      locations,
      selectedProvince,
      selectedLocation,
      handleChangeProvince
    }
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cbox {
  margin-top: 20px;
  width: 500px;
}
</style>
