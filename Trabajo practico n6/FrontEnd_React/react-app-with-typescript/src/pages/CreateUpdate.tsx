import { Formik, Form, Field } from "formik";
import Nav from "../component/Nav";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const CreateUpdate = () => {

    const { id } = useParams();

    const saveInstrument = (data) => {
            console.log(data)
            fetch(`http://localhost:3001/api/instruments/save/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              })
              .then(item => {
                (item.ok && swal({icon: "success",text: 'Done!'}))
                ;});

    }

    return (
        <>
            <div className="h-screen w-full bg-white relative flex overflow-hidden">
                <Nav></Nav>

                <div className="w-full h-full flex justify-center items-center py-10 flex-col justify-between">
                {+id > 0 ? <h1>UPDATE A INSTRUMENT!</h1> : <h1>SAVE A INSTRUMENT!</h1> }

                    <main className=" justify-center items-center max-w-full h-full flex relative overflow-y-hidden">
                        
                        <Formik
                            initialValues={{
                                id: id,
                                instrumento: "",
                                modelo: "",
                                imagen: "",
                                marca: "",
                                precio: "",
                                costoEnvio: "",
                                cantidadVendida: "",
                                descripcion: ""
                            }}
                            onSubmit={saveInstrument}
                        >

                            <Form className="flex flex-col">
                                <label htmlFor="instrument">instrument</label>
                                <Field className=" my-1 border border-gray-2" name="instrumento" id="instrumento" type="text"/>

                                <label htmlFor="modelo">modelo</label>
                                <Field className=" my-1 border border-gray-2" name="modelo" id="modelo" type="text" />

                                <label htmlFor="imagen">imagen</label>
                                <Field className=" my-1 border border-gray-2" name="imagen" id="imagen" type="text" />

                                <label htmlFor="marca">marca</label>
                                <Field className=" my-1 border border-gray-2" name="marca" id="marca" type="text" />

                                <label htmlFor="precio">precio</label>
                                <Field className=" my-1 border border-gray-2" name="precio" id="precio" type="text" />

                                <label htmlFor="costoEnvio">costoEnvio</label>
                                <Field className=" my-1 border border-gray-2" name="costoEnvio" id="costoEnvio" type="text" />

                                <label htmlFor="cantidadVendida">cantidadVendida</label>
                                <Field className=" my-1 border border-gray-2" name="cantidadVendida" id="cantidadVendida" type="text" />

                                <label htmlFor="descripcion">descripcion</label>
                                <Field className=" my-1 border border-gray-2" name="descripcion" id="descripcion" type="text" />

                                <button type="submit">Save!</button>
                            </Form>

                        </Formik>

                    </main>
                </div>
            </div >
        </>
    );
}

export default CreateUpdate;