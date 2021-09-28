import React, { useState } from 'react';
import Modal from 'react-modal';
import BankCard from './BankCard';
import useFetchhook from './useFetchhook';


import FetchSkeleton from '../Skeleton/FetchSkeleton';


const Itemcontainer2 = () => {

    const [modalisopen, setmodalisopen] = useState(false);
    const [items, error ,loading] = useFetchhook();


    if (loading === true && error === null ) {
        return (
            <div>
                <FetchSkeleton />
            </div>
        )
    }

   else if (error !== null) {
        return (<h1 className="itemsfield" style={{ textAlign: "center" }}>
            <h1 style={{ marginLeft: "50%" }}> Error Fetching Data from Server ....
             check your Internet connection</h1> </h1>)
    }

    return (
        <div>
            <div className='mycontainer'>

                <div className="itemsfield">
                    {items.map(goods =>
                    (
                        <div className="itemContainer">
                            <div className='singleCard'>
                                <div className='imgContainer'>
                                    <img src={goods.image} alt='itemimage' />
                                </div>
                                <div>
                                    <div className='cardText'>
                                        <h1>Price $:{goods.price}</h1>
                                        <h2>Category: {goods.category}</h2>
                                        <h3 className='cardTitle'>Title: {goods.title}</h3>
                                        <p className='cardDes'>
                                            {goods.description}
                                        </p>
                                    </div>
                                    <div className='btnContainer'>
                                        <button className='specialbtn' onClick={() => setmodalisopen(true)} >BUY NOW</button>
                                        <Modal isOpen={modalisopen} onRequestClose={() => setmodalisopen(false)} >
                                            <div className='align-center'>
                                                <h4> OK you want {goods.title}. </h4>
                                                <h4> It would cost you ${goods.price}. </h4>
                                                <h2> Befor further Processing please set your card details. </h2>
                                            </div>
                                            <BankCard />

                                            <hr /> <hr />

                                            <button onClick={() => setmodalisopen(false)}> close</button>
                                        </Modal>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}

export default Itemcontainer2
