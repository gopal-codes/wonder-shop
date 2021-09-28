import React, { } from 'react';



const Signin = () => {



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
                                <button className='specialbtn'>LOG IN</button>
                            </div>
                        </div>
                        <hr />

                        <div className='d-flex space-between'>
                            <h6>Don't Have Acount ?</h6>
                            <h6><a href='/Signup'> Create Account</a> </h6>
                            
                        </div>
                    </div>
                </div>
           
        </div>
    )
}

export default Signin
