import React, { useState } from 'react';
import Itemcontainer from './Itemcontainer';


import { CartProvider } from 'react-use-cart';
import Cart from './Cart';
import useFetchhook from './useFetchhook';
import FetchSkeleton from '../Skeleton/FetchSkeleton';



const Search = () => {


    const [items, error, loading] = useFetchhook();

    const [search, setSearch] = useState("");





    const filteredcompo = items.filter(item =>
        item.description.toLowerCase().includes(search.toLowerCase())
    )


    if (loading === true && error === null) {
        return (
            <div>
                <div className='SearchContainer'>
                    <h1 style={{ textAlign: 'center' }}> Search your Products </h1>
                    <form>
                        <input type="text" placeholder="Search"
                            onChange={(e) => { setSearch(e.target.value); }} />
                    </form>
                </div>
                <FetchSkeleton />
            </div>
        )
    }
    else if (error !== null) {
        return (<div className=''>
            <div className='SearchContainer'>
                <h1 style={{ textAlign: 'center' }}> Search your Products </h1>
                <form>
                    <input type="text" placeholder="Search"
                        onChange={(e) => { setSearch(e.target.value); }} />
                </form>
            </div>

            <h1>Error fetching data....... you need to check your internet connection.</h1>

        </div>)
    }

    return (
        <div>
            <CartProvider>
                <div className="mycontainer">
                    <div className='SearchContainer'>
                        <h1 style={{ textAlign: 'center' }}> Search your Products </h1>
                        <form>
                            <input type="text" placeholder="Search"
                                onChange={(e) => { setSearch(e.target.value); }} />
                        </form>
                    </div>


                    <div className='itemsfield'>
                        {filteredcompo.map(goods => (
                            <Itemcontainer
                                key={goods.id}
                                description={goods.description}
                                category={goods.category}
                                title={goods.title}
                                price={goods.price}
                                image={goods.image}
                                goods={goods} />
                        ))}
                    </div>
                    <div className='Cartfield'>
                        <Cart />
                    </div>

                </div>

            </CartProvider>
        </div>
    )
}



export default Search
