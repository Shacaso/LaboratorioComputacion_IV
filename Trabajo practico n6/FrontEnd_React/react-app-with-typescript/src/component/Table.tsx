import swal from 'sweetalert';

const Table = ({ instruments }) => {

    const verify = (e) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: ["Safe!", "Delete!"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch('http://localhost:3001/api/instruments/delete/' + e.id)
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });

                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <div className="flex flex-col w-full px-6">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <button onClick={event => window.location.href = ('http://localhost:3000/save/0')} className='p-2 border border-gray-200'>Add Instrument</button>
                        <table className="min-w-full h-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Instrument</th>
                                    <th scope="col" className="px-6 py-4">Brand</th>
                                    <th scope="col" className="px-6 py-4">Modale</th>
                                    <th scope="col" className="px-6 py-4">Price</th>
                                    <th scope="col" className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    instruments.map((e, i) => (
                                        <tr key={i} className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4">{e.id}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{e.instrumento}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{e.marca}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{e.modelo}</td>
                                            <td className="whitespace-nowrap px-6 py-4">${e.precio}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <button onClick={event => window.location.href = 'http://localhost:3000/contador/' + e.id} className="px-2">View</button>
                                                <button onClick={event => window.location.href = ('http://localhost:3000/save/'+e.id)} className="px-2">Edit</button>
                                                <button onClick={() => verify(e)} className="px-2">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;