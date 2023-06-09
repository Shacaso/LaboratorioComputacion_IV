import { useEffect, useState } from "react"

const Crud = () => {

  const [location, setLocation] = useState([])

  useEffect(() => {
    fetch(`http://168.194.207.98:8081/api_localidad/get_localidades_por_nombre.php?nombre=`)
      .then(res => res.json())
      .then(data => { setLocation(data) })

  }, [])

  const handleSubmit = (value:String) => {

    fetch(`http://168.194.207.98:8081/api_localidad/get_localidades_por_nombre.php?nombre=${value}`)
      .then(res => res.json())
      .then(data => { setLocation(data) })
  }

  return (
    <div className="flex flex-col  pt-10">
      <div className="p-5 ">
        <button onClick={() => window.location.href = 'http://localhost:5173/save/0'} className="bg-gray-300 w-[150px] h-[40px]">Add location</button>
        <input onChange={e => handleSubmit(e.target.value)} className="w-[800px] ml-[100px] h-[40px] px-2 bg-gray-100 border border-gray-300" type="text" placeholder="Buscar" />
      </div>
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">#</th>
                <th scope="col" className="px-6 py-4">Nombre</th>
              </tr>
            </thead>
            <tbody>

              {location.map((e: Province, i) => (
                <tr key={i} className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{e.id}</td>
                  <td className="whitespace-nowrap px-6 py-4">{e.localidad}</td>

                  <td className="whitespace-nowrap py-4">
                    <button onClick={() => window.location.href = 'http://localhost:5173/save/' + e.id} className="px-2">Edit</button>
                    <button onClick={() => { alert("Delete successfully"); fetch('http://168.194.207.98:8081/api_localidad/delete_localidad.php?id=' + e.id)}} className="px-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Crud
