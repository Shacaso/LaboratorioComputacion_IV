import { useState } from 'react';
import data from '../assets/db/instrumentos.json';
import Nav from '../component/Nav';
import { useParams } from 'react-router-dom';

interface Instrument {
  "id": string
  "instrumento": string,
  "marca": string,
  "modelo": string,
  "imagen": string,
  "precio": string,
  "costoEnvio": string,
  "cantidadVendida": string,
  "descripcion": string
}

const send = (instrument: Instrument) => {
  if (instrument.costoEnvio === "G") {
    return (<div className="h-5 bg-no-repeat bg-[url('./assets/media/img/camion.svg')]"><p className='px-7 font-[15px] mt-1 text-[#0FB478]'> Envió gratis a todo el país</p></div>)
  } else {
    return (<p className=' font-[15px] mt-1 text-orange-500'>Costo de envio Interior de Argentina ${instrument.costoEnvio}</p>)
  }
}

function Contador() {
  let { id } = useParams();
  let id_number: number = Number(id) - 1;

  const [instruments, setInstrument] = useState<Array<Instrument>>(data.instrumentos)

  return (
    <div className="Contador">
      <div className='flex flex-row  items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br'>
        <Nav></Nav>
        <div className='mx-8 w-full h-[90vh] bg-white rounded-3xl shadow-xl overflow-hidden' key={instruments[id_number].id} >
          <div className='flex mx-auto h-auto '>
            <div className="w-[900px] h-[600px] bg-cover bg-center bg-[url('https://cdn.hashnode.com/res/hashnode/image/upload/v1678352679570/88aebfe3-3bfc-4aca-a068-cf97991d13df.svg')] "></div>
            <div className=' sm:p-6 w-[500px]'>
              <div className='text-left'>
                <p className='text-[#7C7C80] font-[15px] mt-1 '>{instruments[id_number].cantidadVendida} vendidos</p>
                <p className='font-bold py-4 text-[40px] leading-7 mb-1'>{instruments[id_number].modelo}</p><hr />
                <p className='py-2 text-[36px] mb-1 text-gray-900'>$ {instruments[id_number].precio}</p>
                <p className='font-[15px] mt-1 text-[#7C7C80]'>Marca: {instruments[id_number].marca}</p>
                <p className='font-[15px] mt-1 text-[#7C7C80]'>Modelo: {instruments[id_number].modelo}</p>
                <p className='pt-5 font-[15px] mt-1 text-[#7C7C80]'>{(instruments[id_number].descripcion).substring(0, 350)}</p>
                <p className='pt-2 font-[15px] mt-1 text-[#7C7C80]'>Costo de envio:</p>
                {send(instruments[id_number])}

                <button className=" my-5 w-[100%] rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-100 hover:shadow-lg hover:shadow-[#6025F5]/50">
                  Agregar al carrito
                </button>






              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contador;
