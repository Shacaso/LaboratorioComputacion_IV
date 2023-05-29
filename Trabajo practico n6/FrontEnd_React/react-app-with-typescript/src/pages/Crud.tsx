import { useEffect, useState } from "react";
import Nav from "../component/Nav";
import Table from "../component/Table";
import { Instrument } from "../model/Instruments";

const Crud = () => {

    const URL_BACKEND = 'http://localhost:3001/api/instruments/getAll'


    const [instruments, setInstrument] = useState<Instrument[]>([]);


    useEffect(() => {
        fetch(URL_BACKEND)
            .then(response => response.json())
            .then(data => { setInstrument(data) })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <div className="h-screen w-full bg-white relative flex overflow-hidden">
                <Nav></Nav>

                <div className="w-full h-full flex flex-col justify-between">
                    <main className="max-w-full h-full flex relative overflow-y-hidden">
                                <Table instruments={instruments}/>
                    </main>
                </div>
            </div >

        </>
    );
}

export default Crud;
