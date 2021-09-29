import React, { } from 'react';
import { useHistory } from 'react-router-dom';


const Signin = () => {
             
const history = useHistory();
const home = useHistory();
    return (
        <div>
           
                <div className='d-flex flex-center'>
                    <div className='containerlg'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                            <div className='headText'>
                                <h1>LOG IN</h1>
                            </div>

                            <b /><br />
                            <div className='signUpInputs'>
                                <h3>User Name</h3>
                                <input type='text' className='signupInput' placeholder='USER ID' />
                                <h3>Enter Password</h3>
                                <input type='password' className='signupInput' placeholder='Enter Password' />
                                <br />
                                <button className='specialbtn' onClick={()=>{home.push("/wonder-shop")}}>LOG IN</button>
                            </div>
                        </div>
                        <hr />

                        <div className='d-flex space-between'>
                            <h6>Don't Have Acount ?</h6>
                            <h6 onClick={()=>{history.push('/signup')}}> Create Account</h6>
                            
                        </div>
                    </div>
                </div>
           
        </div>
    )
}

export default Signin
