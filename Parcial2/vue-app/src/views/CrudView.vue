<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Location } from '@/model/Location'
import { Province } from '@/model/Province'

const locations = ref<Location[]>([])
const provinces = ref<Province[]>([])
const searchValue = ref('')

const fetchData = async () => {
  try {
    const responseLocation = await fetch('http://168.194.207.98:8081/api_localidad/get_localidades_por_nombre.php?nombre=')
    const responseProvince = await fetch('http://168.194.207.98:8081/api_localidad/get_provincias.php')
    const dataLocation = await responseLocation.json()
    const dataProvince = await responseProvince.json()
    provinces.value = dataProvince
    locations.value = dataLocation
  } catch (error) {
    console.error(error)
  }
}

const getLocationForProvince = (value: number): string => {
  let aux = ''
  provinces.value.forEach(element => {
    if (element.id === value) { aux = element.provincia }
  })
  return aux
}

const handleSubmit = () => {
  fetch(`http://168.194.207.98:8081/api_localidad/get_localidades_por_nombre.php?nombre=${searchValue.value}`)
    .then(res => res.json())
    .then(data => { locations.value = data })
}

const goToAddLocation = () => {
  window.location.href = 'http://localhost:8080/save/0'
}

const goToEdit = (id: number) => {
  window.location.href = `http://localhost:8080/save/${id}`
}

const deleteLocation = (id: number) => {
  alert('Delete successfully')
  fetch(`http://168.194.207.98:8081/api_localidad/delete_localidad.php?id=${id}`)
    .then(() => {
      locations.value = locations.value.filter(location => location.id !== Number(id))
    })
    .then(() => (window.location.href = 'http://localhost:8080/crud'))
    .catch(error => {
      console.error(error)
    })
}

onMounted(() => {
  fetchData()
})

</script>

<template>
  <div class="crud">
    <div class="nav-crud">
      <button @click="goToAddLocation" class=" btn-size">Add location</button>
      <input v-model="searchValue" @input="handleSubmit" class="input-size" type="text" placeholder="Buscar" />
    </div>
    <div class="table-size">
      <table class="min-w-full text-left text-sm font-light">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" class="px-6 py-4">#</th>
            <th scope="col" class="px-6 py-4">Localidad</th>
            <th scope="col" class="px-6 py-4">Provincia</th>
            <th scope="col" class="px-6 py-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="location in locations" :key="location.id">
            <td class="cols-size">{{ location.id }}</td>
            <td class="cols-size">{{ location.localidad }}</td>
            <td class="cols-size">{{ getLocationForProvince(location.id_provincia) }}</td>
            <td>
              <button @click="goToEdit(location.id)" class="btn">Edit</button>
              <button @click="deleteLocation(location.id)" class="btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.crud {
  display: grid;
  grid-template-rows: auto auto;
  width: 100%;
}

.nav-crud {
  padding: 10px;
}

.btn-size {
  width: 150px;
  height: 45px;
}

.input-size {
  width: 80%;
  height: 40px;
  padding-left: 4px;
  padding-right: 4px;
  margin-left: 10px;
}

.table-size {
  display: grid;
  grid-column: 1fr 1fr 1fr 1fr;
}

.cols-size {
  padding: 6px 4px;
}

.btn {
  margin: 4px 4px;
  padding: 3px 5px;
}</style>
