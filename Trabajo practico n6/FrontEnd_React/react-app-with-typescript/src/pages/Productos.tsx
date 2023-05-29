import { useEffect, useState } from 'react';
import Nav from '../component/Nav';
import Card from '../component/Card';
import { Instrument } from '../model/Instruments';
import SearcherBox from '../component/SearcherBox/SearcherBox';
import Empty from '../component/Empty/Empty';

const URL_BACKEND = 'http://localhost:3001/api/instruments/getAll'

function Productos() {

    const [instruments, setInstrument] = useState<Instrument[]>([]);
    const [filterInstruments, setFilterInstruments] = useState(Array<any>);


    useEffect(() => {
        fetch(URL_BACKEND)
            .then(response => response.json())
            .then(data => { setInstrument(data); setFilterInstruments(data) })
            .catch(err => console.log(err))
    }, []);

    const InstrumentFilter = (searcher: string) => {
        const filtered = filterInstruments.filter(instrument => ((instrument.modelo).toLowerCase()).includes((searcher).toLowerCase()));
        (filterInstruments.length === 0 && setFilterInstruments(instruments))
        setFilterInstruments(filtered)
    }

    return (
        <div className="Productos">

            <div className="h-screen w-full bg-white relative flex overflow-hidden">
                <Nav></Nav>

                <div className="w-full h-full flex flex-col justify-between">
                    <main className="max-w-full h-full flex relative overflow-y-hidden">
                        <div className="h-[100vh] w-full scrollbar-corner-black scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-300 overflow-y-scroll">
                            <div className='flex flex-wrap  items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>

                                {
                                filterInstruments.length === 0 ? <Empty msg="No Match!" /> : filterInstruments.map(instrument =>
                                    (instrument && Card(instrument)))
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




