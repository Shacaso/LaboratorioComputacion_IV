import { Icon } from '@iconify/react';

const send = (instrument) => {
  if (instrument.costoEnvio === "G") {
    return (<div className="h-5 bg-no-repeat bg-[url('./assets/media/img/camion.svg')]"><p className='px-7 font-[15px] mt-1 text-[#0FB478]'> Envió gratis a todo el país</p></div>)
  } else {
    return (<p className=' font-[15px] mt-1 text-orange-500'>Costo de envio Interior de Argentina ${instrument.costoEnvio}</p>)
  }
}

const Card = (instrument) => {

  return (
    <div className="Card w-full" key={instrument.id}>
      <div className=' m-2 w-full mx-auto bg-white rounded-3xl transition duration-200 hover:shadow-lg hover:shadow-[#000]/50 overflow-hidden' key={instrument.id} >
        <div className='flex flex-row justify-between mx-auto'>
          <div className='flex flex-row'>
            <div className="w-[234px] h-[100%] bg-cover bg-center bg-[url('https://cdn.hashnode.com/res/hashnode/image/upload/v1678352679570/88aebfe3-3bfc-4aca-a068-cf97991d13df.svg')] "></div>
            <button onClick={event => window.location.href = 'http://localhost:3000/contador/' + instrument.id} className='p-4 pl-[150%] sm:p-6 '>
              <div className='text-left'>
                <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{instrument.modelo}</p>
                <p className='font-[15px] mt-1 text-[#7C7C80]'>$ {instrument.precio}</p>
                {send(instrument)}
                <p className='text-[#7C7C80] font-[15px] mt-1 '>{instrument.cantidadVendida} vendidos</p>
              </div>
            </button>
          </div>
          <div className='flex flex-row px-4'>
            <button onClick={event => window.location.href = 'http://localhost:3000/contador/' + instrument.id}  className='px-2'><Icon icon="icon-park-outline:eyes" width="36" height="36" /></button>
            <button onClick={event => window.location.href = 'http://localhost:3000/productos/' + '#'} className='px-2'><Icon icon="material-symbols:edit" width="36" height="36" /></button>
            <button onClick={event => window.location.href = 'http://localhost:3000/productos/' + '#'} className='px-2'><Icon icon="material-symbols:delete" width="36" height="36" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
