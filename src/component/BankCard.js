import React, { useState } from 'react'

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const BankCard = () => {

    const [number, setnumber] = useState('');
    const [name, setname] = useState('');
    const [expiry, setexpiry] = useState('');
    const [cvc, setcvc] = useState('');
    const [focus, setfocus] = useState('');

    return (
        <div>
            <form>

                <Cards
                    style={{ width: "200px" }}
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focus}
                />

                <input type='text'
                    name='name'
                    placeholder='Name of Holder'
                    value={name}
                    onChange={e => setname(e.target.value)}
                    onFocus={e => setfocus(e.target.name)}
                ></input>

                <input type='tel'
                    name='number'
                    placeholder='Card Number'
                    value={number}
                    onChange={e => setnumber(e.target.value)}
                    onFocus={e => setfocus(e.target.name)}
                ></input>

                <input type='text'
                    name='expiry'
                    placeholder='MM/YY'
                    value={expiry}
                    onChange={e => setexpiry(e.target.value)}
                    onFocus={e => setfocus(e.target.name)}
                ></input>

                <input type='tel'
                    name='cvc'
                    placeholder='Card CVC'
                    value={cvc}
                    onChange={e => setcvc(e.target.value)}
                    onFocus={e => setfocus(e.target.name)}
                ></input>
            </form>
        </div>
    )
}

export default BankCard
