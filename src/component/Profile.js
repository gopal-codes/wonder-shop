import React, { useState } from 'react'
import brothers from '../image/brothers.jpg';
import Modal from 'react-modal'
import BankCard from './BankCard';
import { CartProvider } from 'react-use-cart';
import Cart from './Cart';

const Profile = () => {

    const [name, setName] = useState("Gopal Raut");
    const [email, setEmail] = useState("gopalraut9840285859@gmail.com");
    const [img, setimg] = useState(brothers);

    const [Cartisopen, setCartisopen] = useState(false);
    const [BankCardisopen, setBankCardisopen] = useState(false);

    const changeprofie = (e) => {
        if (e.target.files && e.target.files[0]) {
            setimg(URL.createObjectURL(e.target.files[0]));
        }
    }

    console.log(img);

    return (
        <div>

            <div className='profile'>
                <div className='profileCard'>
                    <div className='profileimagecontainer'>
                        <img src={img} alt="Pofile" ></img>
                    </div>
                    <div className='profiletext'>
                        <input type='file' accept='image/png, image/jpeg' onChange={changeprofie} className='profileinput' />
                        <h2 onClick={() => { setName(prompt('enter Name')) }}>Name: {name}</h2>
                        <h4 onClick={() => { setEmail(prompt('enter Email')) }}>Email: {email}</h4>
                    </div>
                    <hr />
                    <div className='space-between d-flex'>
                        <button className='profilebtn' onClick={() => setCartisopen(true)}>My Cart</button>
                        <Modal isOpen={Cartisopen} onRequestClose={() => setCartisopen(false)} >
                            <CartProvider>
                                <Cart />
                            </CartProvider>
                            <button onClick={() => setCartisopen(false)}> close</button>
                        </Modal>
                        <button className='profilebtn' onClick={() => setBankCardisopen(true)} >Payment</button>

                        <Modal isOpen={BankCardisopen} onRequestClose={() => setBankCardisopen(false)} >
                            <BankCard />
                            <button onClick={() => setBankCardisopen(false)}> close</button>
                        </Modal>
                    </div>
                    <hr />
                </div>

            </div>


        </div>
    )
}

export default React.memo(Profile);
