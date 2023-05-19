import { useEffect, useState } from 'react';
import Nav from '../component/Nav';
import Card from '../component/Card';

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

async function getJSON() {
    try {
        const URL = 'http://localhost:6757/api/instruments/getAlls'

        const res = await fetch( URL );
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}

function jsonToArray(): Array<Instrument> {
    getJSON().then(e => {
        let instruments = e.slice();
        instruments.map(e => console.log(e))
        return instruments;
    }).catch(err => console.log(`>>> ${err}`))
    return [];
}

function Productos() {

    const [instruments, setInstrument] = useState<Instrument[]>([]);

    const getInstrumentos = async () => {
        let data: Instrument[] = await getJSON();
        setInstrument(data);
    }

    useEffect(() => {
        getInstrumentos();
    }, []);

    return (
        <div className="Productos">

            <div className="h-screen w-full bg-white relative flex overflow-hidden">
                <Nav></Nav>

                <div className="w-full h-full flex flex-col justify-between">
                    <main className="max-w-full h-full flex relative overflow-y-hidden">
                        <div className="h-[100vh] scrollbar-corner-black scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-300 overflow-y-scroll">
                            <div className='flex flex-wrap  items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
                                {
                                    instruments.map(instrument => Card(instrument))
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




