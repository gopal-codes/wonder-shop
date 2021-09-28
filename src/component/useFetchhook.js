import  { useState, useEffect } from 'react'

function useFetchhook() {

    const [items, setItems] = useState([]);
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(true);


    useEffect(
        () => {
            fetchData();
        }
        , []
    )

    const fetchData = async () => {
        await fetch('https://fakestoreapi.com/products?limit=20')
            .then(res =>  res.json())
            .then(data => {
                setloading(false);
                console.log(data);
                setItems(data);
            }).catch(error=> seterror(error.massage))
    }
    return  [items,error,loading]
    
}

export default useFetchhook
