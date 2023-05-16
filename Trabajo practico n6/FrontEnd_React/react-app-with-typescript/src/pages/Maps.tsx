import Nav from '../component/Nav';


function Maps() {

    return (
        <div className="Maps">
            <div className='h-screen w-full bg-white relative flex overflow-hidden'>
                <Nav></Nav>
                <div>
                    <iframe className=' h-[100vh]' width={1400} style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=Av.%20Las%20Heras%20y%20Av.%20San%20Martin%2C%20Ciudad%20de%20Mendoza&key=AIzaSyBEq7nhkPKV-rRkGcFmEWeAtICCTWf7pxs"></iframe> 

                </div>
            </div>
        </div>
    );
}

export default Maps;

