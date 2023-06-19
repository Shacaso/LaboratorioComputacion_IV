import { useState, useEffect} from 'react';
import Nav from '../component/Nav';
import { useParams } from 'react-router-dom';
import { Instrument } from '../model/Instruments';
import { ActivatedRoute } from '@angular/router';

const send = (instrument: Instrument) => {
  if (instrument?.costoEnvio === "G") {
    return (<div className="h-5 bg-no-repeat bg-[url('./assets/media/img/camion.svg')]"><p className='px-7 font-[15px] mt-1 text-[#0FB478]'> Envió gratis a todo el país</p></div>)
  } else {
    return (<p className=' font-[15px] mt-1 text-orange-500'>Costo de envio Interior de Argentina ${instrument?.costoEnvio}</p>)
  }
}


function Contador() {
  const { id } = useParams();

  const [instrument, setInstrument] = useState<Instrument>();

    useEffect(() => {
    fetch(`http://localhost:3001/api/instruments/get/${id}`)
        .then(response => response.json())
        .then(data => {console.log(data);setInstrument(data)})
        .catch(err => console.log(err))
    }, []);

  return (
    <div className="Contador">
       <div className='flex flex-row  items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br'>
        <Nav></Nav>
        <div className='mx-8 w-full h-[90vh] bg-white rounded-3xl shadow-xl overflow-hidden' key={instrument?.id} >
          <div className='flex mx-auto h-auto '>
            <div className="w-[900px] h-[600px] bg-cover bg-center bg-[url('https://cdn.hashnode.com/res/hashnode/image/upload/v1678352679570/88aebfe3-3bfc-4aca-a068-cf97991d13df.svg')] "></div>
            <div className=' sm:p-6 w-[500px]'>
              <div className='text-left'>
                 <p className='text-[#7C7C80] font-[15px] mt-1 '>{instrument?.cantidadVendida} vendidos</p>
                <p className='font-bold py-4 text-[20px] leading-7 mb-1'>{instrument?.instrumento}</p><hr />
                <p className='py-2 text-[36px] mb-1 text-gray-900'>$ {instrument?.precio}</p>
                <p className='font-[15px] mt-1 text-[#7C7C80]'>Marca: {instrument?.marca}</p>
                <p className='font-[15px] mt-1 text-[#7C7C80]'>Modelo: {instrument?.modelo}</p>
                <p className='pt-5 font-[15px] mt-1 text-[#7C7C80]'>{(instrument?.descripcion)}</p>
                <p className='pt-2 font-[15px] mt-1 text-[#7C7C80]'>Costo de envio:</p>
                {send(instrument)}
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
