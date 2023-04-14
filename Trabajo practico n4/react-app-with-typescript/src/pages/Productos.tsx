import { useState } from 'react';
import data from '../assets/db/instrumentos.json';
import Nav from '../component/Nav';

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

const temp = () => {
    alert(":D")
}

function Productos() {
    const [instruments, setInstrument] = useState<Array<Instrument>>(data.instrumentos)

    return (
        <div className="App">

            <div className="h-screen w-full bg-white relative flex overflow-hidden">
                <Nav></Nav>

                <div className="w-full h-full flex flex-col justify-between">
                    <main className="max-w-full h-full flex relative overflow-y-hidden">
                        <div className="h-[100vh] scrollbar-corner-black scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-300 overflow-y-scroll">
                            <div className='flex flex-wrap  items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
                                {
                                    instruments.map(instrument => {
                                        return (
                                            <div className=' m-2 w-full   mx-auto bg-white rounded-3xl transition duration-200 hover:shadow-lg hover:shadow-[#000]/50 overflow-hidden' key={instrument.id} >
                                                <div className='flex mx-auto'>
                                                    <div className="w-[234px] bg-cover bg-center bg-[url('https://cdn.hashnode.com/res/hashnode/image/upload/v1678352679570/88aebfe3-3bfc-4aca-a068-cf97991d13df.svg')] ">
                                                    {/* <div className="w-[234px] bg-cover bg-center bg-[url('')] "> */}
                                                    </div>
                                                    <button onClick={event => window.location.href = 'http://localhost:3000/contador/'+instrument.id} className='p-4 sm:p-6 '>
                                                        <div className='text-left'>
                                                            <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{instrument.modelo}</p>
                                                            <p className='font-[15px] mt-1 text-[#7C7C80]'>$ {instrument.precio}</p>
                                                            {send(instrument)}
                                                            <p className='text-[#7C7C80] font-[15px] mt-1 '>{instrument.cantidadVendida} vendidos</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </main>
                </div>

            </div >



        </div>
    );
}

export default Productos;
