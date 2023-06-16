<template>
    <div class="save">
        <h1>Formulario</h1>
        <form @submit="handleSubmit" id="myForm">
            <div class="input-size">
                <label for="localidad">ID: {{ id }}</label>
            </div>
            <div class="input-size">
                <label class="input-label" for="localidad">Localidad: {{ location?.localidad }}</label>
                <input type="text" id="localidad" name="localidad" v-model="form.localidad" required>
            </div>

            <div class="input-size">
                <label class="input-label" for="id_provincia">Provincia: {{ location?.id_provincia }} </label>
                <select class="cbox" v-model="selectedProvince" @change="handleChangeProvince">
                    <option v-for="province in provinces" :key="province.id" :value="province.id">{{ province.id +' - '+ province.provincia }}
                    </option>
                </select>
            </div>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Location } from '@/model/Location'
import { Province } from '@/model/Province'

export default {
  name: 'SaveView',
  setup () {
    const route = useRoute()
    const id = ref(route.params.id)
    const location = ref<Location>()
    const provinces = ref<Province[]>([])
    const selectedProvince = ref(null)
    const form = ref({
      id: id,
      localidad: '',
      id_provincia: ''
    })

    const fetchData = async () => {
      try {
        const responseProvince = await fetch('http://168.194.207.98:8081/api_localidad/get_provincias.php')
        provinces.value = await responseProvince.json()

        const responseLocation = await fetch(`http://168.194.207.98:8081/api_localidad/get_localidad.php?id=${id.value}`)
        location.value = await responseLocation.json()
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
        body: JSON.stringify(form.value)
      })
        .then(() => (window.location.href = 'http://localhost:8080/'))
    }
    const handleChangeProvince = (event: any) => {
      form.value.id_provincia = event.target.value
    }
    onMounted(() => {
      fetchData()
    })
    return {
      id,
      location,
      provinces,
      form,
      selectedProvince,
      handleChangeProvince,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.input-size {
    margin-bottom: 20px;
}

.input-label{
    margin-right: 10px;
}
</style>
