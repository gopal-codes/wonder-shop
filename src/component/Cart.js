import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from 'react-use-cart';



const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
   
    if (isEmpty) {
        return <h1 className='text-center'>Your Cart is Empty.</h1>
    }

    return ( 
        <div style={{background:"linear-gradient(to right top, red , green , blue, orange )"}}>
            <h1 className='align-center'> Your Cart Section</h1>
            <hr/>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <h4>Cart ({totalUniqueItems}) </h4>
                        <h4>Total Items: ({totalItems}) </h4>

                        <table className='table table-light table-hover m-0'>
                            <tbody>
                                {items.map((item) =>{
                                    return(
                                        <tr key={item.id}>
                                            <td>
                                                <img src={item.image} alt="cartimg" style={{height:"15rem"}} />
                                            </td>
                                            <td>                                              
                                                {item.title}
                                                <br/> <br/>
                                               {item.description}
                                            </td>
                                            <td>
                                               <h4>Price {item.price} </h4>
                                            </td>
                                            <td>
                                            <h4>Qty:{item.quantity} </h4>
                                            </td>
                                            <td>
                                                <button className='btn btn-info ms-2' onClick={()=>{updateItemQuantity(item.id, item.quantity-1)}}> - </button>
                                                <button className='btn btn-info ms-2'  onClick={()=>{updateItemQuantity(item.id, item.quantity+1)}}> + </button>
                                                <button className='btn btn-danger ms-2' onClick={ ()=>{removeItem(item.id)}}>Remove Item</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                    
                    <div className='col-auto ms-auto'>
                        <h2>Total Price: ${cartTotal}</h2>
                    </div>
                    <div className='col-auto'>
                       <button className='btn btn-danger m-2' onClick={()=>emptyCart()}>Clear Cart</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Cart
