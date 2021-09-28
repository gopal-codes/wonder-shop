import React, { useState } from 'react';
import Modal from 'react-modal';
import img1 from '../image/wondershop1.jpg';


Modal.setAppElement('#root')

const Brands = () => {

   
    const [modalisopen, setmodalisopen] = useState(false);

    return (
        <div>
                <button onClick={() => setmodalisopen(true)}> modal open</button>
                <Modal isOpen={modalisopen} onRequestClose={() => setmodalisopen(false)} >
                    <h2>hello this is modal</h2>

                    <img src={img1} alt="nothng" width='200px'/>

                    <button onClick={() => setmodalisopen(false)}>close</button>
                </Modal>

                <div className='mycontainer'>

                    <h2>we brings you the best with exclusive discount at your doorstep.</h2>
                    <h3>Get the best items from the market for you and your family .</h3>


                    <h1> i dont know what to write next it just a page not thing special
                        ...........................................................jpg..............
                        ............................................
                        ..........................................
                        i could have written about brands avialiable in marker but ............
                        ................................
                        ..........................................
                    </h1>
                </div>

        </div>
    )
}

export default Brands
