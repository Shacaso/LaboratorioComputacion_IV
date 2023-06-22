<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Location } from '@/model/Location'
import { Province } from '@/model/Province'

const route = useRoute()
const id = ref(route.params.id)
const location = ref<Location>(new Location())
const provinces = ref<Province[]>([])

const fetchData = async () => {
  try {
    const responseProvince = await fetch('http://168.194.207.98:8081/api_localidad/get_provincias.php')
    provinces.value = await responseProvince.json()

    if (+id.value > 0) {
      const responseLocation = await fetch(`http://168.194.207.98:8081/api_localidad/get_localidad.php?id=${id.value}`)
      location.value = await responseLocation.json()
    }
  } catch (error) {
    console.error(error)
  }
}
const handleSubmit = (event: any) => {
  event.preventDefault()
  const url = Number(id.value) > 0
    ? 'http://168.194.207.98:8081/api_localidad/put_localidad.php'
    : 'http://168.194.207.98:8081/api_localidad/post_localidad.php'

  const methodURL = Number(id.value) > 0
    ? 'PUT'
    : 'POST'

  fetch(url, {
    method: methodURL,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(location.value)
  })
    .then(() => (window.location.href = 'http://localhost:8080/'))
}

onMounted(() => {
  fetchData()
})

</script>

<template>
  <div class="form">
    <h1>Formulario para {{ +id > 0 ? 'modificar' : 'agregar' }}</h1>
    <form @submit="handleSubmit" class="form-size">
      <div class="input-size">
        <label for="id">ID:</label>
        <input class="input" type="number" id="id" name="id" v-modal="location.id" :placeholder="String(location.id)"  disabled />
      </div>
      <div class="input-size">
        <label class="input-label" for="localidad">Localidad:</label>
        <input class="input" type="text" id="localidad" name="localidad" v-model="location.localidad" required>
      </div>
      <div class="input-size">
        <label class="input-label" for="id_provincia">Provincia:</label>
        <select class="cbox" v-model="location.id_provincia" >
          <option v-for="province in provinces" :key="province.id" :value="province.id">{{ province.provincia }}</option>
        </select>
      </div>

      <button class="btn" type="submit">{{+id > 0 ? 'Guardar cambios' : 'Enviar'}}</button>
    </form>
  </div>
</template>

<style scoped>
.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-size{
width: 400px;
display: grid;
grid-template-rows: auto auto auto auto;
gap: 40px;
}
.input{
  width: 96%;
  text-align: center;
  padding: 4px;
}
.cbox{
  width: 100%;
  padding: 4px;
  text-align: center;
}
.btn{
  padding: 6px 8px;
  color: white;
  border: none;
  background-color: #42b983;
}
</style>
