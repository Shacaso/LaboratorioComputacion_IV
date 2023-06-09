import { Form, Field, Formik } from "formik";
import { useParams } from "react-router-dom";

const Save = () => {

    const { id } = useParams();

    const saveInstrument = (data: any) => {
        console.log(data)
        if (Number(id) > 0) {
            fetch(`http://168.194.207.98:8081/api_localidad/put_localidad.php`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            .then(() => window.location.href = 'http://localhost:5173/');
        } else {
            fetch(`http://168.194.207.98:8081/api_localidad/post_localidad.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
                .then(() => window.location.href = 'http://localhost:5173/');
        }
    }

    return (
        <div className="w-full pt-10 flex justify-center">

        {+id > 0 ? <h1 className="text-center mb-10"> Update location</h1> : <h1 className="text-center mb-10"> Save location</h1>}

            <Formik
                initialValues={{
                    id: id,
                    localidad: "",
                    id_provincia: "",
                    nuevo:"N"
                }}
                onSubmit={saveInstrument}
            >

                <Form className="pt-10 flex flex-col">
                    <label htmlFor="modelo">localidad</label>
                    <Field className=" my-1 border border-gray-2" name="localidad" id="localidad" type="text" />

                    <label htmlFor="imagen">id_provincia</label>
                    <Field className=" my-1 border border-gray-2" name="id_provincia" id="id_provincia" type="text" />

                    <button className=" bg-gray-400 py-3 mt-5" type="submit">Save!</button>
                </Form>

            </Formik>

        </div>
    )
}

export default Save
