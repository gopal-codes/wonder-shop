import React, { useState } from 'react';
import Modal from 'react-modal';

import { CartProvider } from 'react-use-cart';

import {useCart} from 'react-use-cart';
import BankCard from './BankCard';

Modal.setAppElement('#root')

const Itemcontainer = ({ price, image, title, category, description , goods}) => {

    const [modalisopen, setmodalisopen] = useState(false);



    const {addItem} = useCart();

    return (
        <div>
        
            <div className="itemContainer">
                <div className='singleCard'>
                    <div className='imgContainer'>
                        <img src={image} alt='itemimage' />
                    </div>
                    <div>
                        <div className='cardText'>
                            <h1>Price: Rs.{price}</h1>
                            <h2>Category: {category}</h2>
                            <h3 className='cardTitle'>Title: {title}</h3>
                            <p className='cardDes'>
                                {description}
                            </p>
                        </div>
                        <div className='btnContainer'>
                            <button className='specialbtn' onClick={() => setmodalisopen(true)} >BUY NOW</button>
                            <Modal isOpen={modalisopen} onRequestClose={() => setmodalisopen(false)} >
                                <div className='align-center'> 
                                <h4> OK you want {title}. </h4>
                                <h4> It would cost you ${price}. </h4>
                                <h2> Befor further Processing please set your card details. </h2>
                                </div>
                               <BankCard/>

                               <hr/>
                               <hr/>

                                <button onClick={() => setmodalisopen(false)}> close</button>
                            </Modal>
                            <CartProvider>
                            <button className= 'specialbtn' onClick={() => addItem(goods)}>ADD CART</button>
                            </CartProvider>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    )
}
export default Itemcontainer
