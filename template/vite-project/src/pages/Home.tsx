import { useEffect, useState } from "react"
import { Province } from "../entities/Province"

const Home = () => {

  const [province, setProvince] = useState([])
  const [location, setLocation] = useState([])

  useEffect(() => {
    fetch('http://168.194.207.98:8081/api_localidad/get_provincias.php')
      .then(res => res.json())
      .then(data => { setProvince(data) })

      fetch(`http://168.194.207.98:8081/api_localidad/get_localidades_por_provincia.php?idprovincia=${1}`)
      .then(res => res.json())
      .then(data => { setLocation(data) })

  }, [])


  const handleChange = (id: any) => {
    console.log(id)
    fetch(`http://168.194.207.98:8081/api_localidad/get_localidades_por_provincia.php?idprovincia=${id}`)
      .then(res => res.json())
      .then(data => { setLocation(data); console.log(data) })
  }

  return (
    <div className="flex flex-col pl-10 pt-10">
      <h3>Provincia</h3>
      <select className="w-[600px] border border-gray-800" onChange={e => handleChange(e.target.value)} name="province" id="province">
        {province.map((e, i) => (<option key={i} value={e.id}>{e.provincia}</option>))}
      </select>

      <h3 className="mt-2">Localidad</h3>
      <select className="w-[600px]  border border-gray-800" name="location" id="location">
        {location.map((e, i) => (<option key={i} value={e.id}>{e.localidad}</option>))}
      </select>

      <button className="w-[600px] text-white mt-5 p-2 bg-gray-500" onClick={() => window.location.href = 'http://localhost:5173/crud'} >Grilla</button>

    </div>
  )
}

export default Home
