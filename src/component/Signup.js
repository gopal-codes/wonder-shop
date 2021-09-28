import React, { useState } from 'react';
import Modal from 'react-modal';
import {FcGoogle} from 'react-icons/fc'
import {SiFacebook} from 'react-icons/si'
import {ImTwitter} from 'react-icons/im'

const Signup = () => {

    const [name, setname] = useState(null);
    const [modalisopen,setmodalisopen] = useState(false);

    return (
        <div>
            <div className='d-flex flex-center'>
                <div className="containerlg y-center">
                    <br />
                    <br />
                    <br />
                    <div>
                        <div className='headText'>
                            <h1>SIGN UP</h1>
                        </div>

                        <b /><br />
                        <div className='signUpInputs'>
                            <h3>New User Name</h3>
                            <input type='text' className='signupInput' placeholder='New User Name' onChange={(e) => setname(e.target.value)} />
                            <h3>New User Email</h3>
                            <input type='email' className='signupInput' placeholder='New User Email' />
                            <h3>Set User Password</h3>
                            <input type='password' className='signupInput' placeholder='Set Password' />
                            <br />
                            <button className='specialbtn' onClick={() => setmodalisopen(true)}>SIGN UP</button>

                            <Modal isOpen={modalisopen} onRequestClose={() => setmodalisopen(false)} >
                                <h1 style={{ textAlign: 'center' }}> Hi {name} your are most welcome to our website </h1>
                                <br />
                                <br />
            
                                <h3 style={{ textAlign: 'center' }}>SINCE WE DONT HAVE BACKEND SUPPORT YOU CAN DIRECTLY LOG IN OUR WEBSITE.</h3>
                                <button style={{ marginLeft:'42%' }} onClick={() => setmodalisopen(false)}> THANKS FOR INFO </button>
                            </Modal>
                        </div>
                    </div>
                    <hr />
                    <div className='align-center'><h3>OR USE YOUR</h3></div>
                    <hr />
                    <div className='d-flex space-between'>
                        <button className='alternativeBtn'><FcGoogle size='35px'/></button>
                        <button className='alternativeBtn'><SiFacebook size='35px'/>k</button>
                        <button className='alternativeBtn'><ImTwitter size='35px'/></button>
                    </div>
                    <hr />
                    <div className='d-flex space-between'>
                        <h6>Already Have Acount ?</h6>
                        <h6><a href='/signin'>Login your Account</a></h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
