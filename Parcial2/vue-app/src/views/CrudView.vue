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
              <th scope="col" class="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="location in locations" :key="location.id" class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">{{ location.id }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ location.localidad }}</td>
              <td class="whitespace-nowrap py-4">
                <button @click="goToEdit(location.id)" class="px-2">Edit</button>
                <button @click="deleteLocation(location.id)" class="px-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Location } from '@/model/Location'

export default {
  name: 'CrudView',
  setup () {
    const locations = ref<Location[]>([])
    const searchValue = ref('')

    const fetchData = async () => {
      try {
        const response = await fetch('http://168.194.207.98:8081/api_localidad/get_localidades_por_nombre.php?nombre=')
        const data = await response.json()
        locations.value = data
      } catch (error) {
        console.error(error)
      }
    }

    const handleSubmit = () => {
      fetch(`http://168.194.207.98:8081/api_localidad/get_localidades_por_nombre.php?nombre=${searchValue.value}`)
        .then(res => res.json())
        .then(data => { locations.value = data })
    }

    const goToAddLocation = () => {
      window.location.href = 'http://localhost:8080/save/0'
    }

    const goToEdit = (id:string) => {
      window.location.href = `http://localhost:8080/save/${id}`
    }

    const deleteLocation = (id:string) => {
      alert('Delete successfully')
      fetch(`http://168.194.207.98:8081/api_localidad/delete_localidad.php?id=${id}`)
        .then(() => {
          // Actualizar la lista de ubicaciones después de eliminar una
          locations.value = locations.value.filter(location => location.id !== id)
        })
        .catch(error => {
          console.error(error)
        })
    }

    onMounted(() => {
      fetchData()
    })

    return {
      locations,
      searchValue,
      handleSubmit,
      goToAddLocation,
      goToEdit,
      deleteLocation
    }
  }
}
</script>

<style scoped>
.crud{
  display: grid;
  grid-template-rows: auto auto ;
  width: 100%;
}
.nav-crud{
  padding: 5px;
  display: flex;
  flex-direction: row;
}
.btn-size{
  width: 150px;
  height: 45px;
}
.input-size{
  width: 800px;
  height: 40px;
  padding-left: 4px;
  padding-right: 4px;
  margin-left: 10px;
}
.table-size{
  display: inline-block;
  width: 100%;
  padding: 2px 8px
}
</style>
