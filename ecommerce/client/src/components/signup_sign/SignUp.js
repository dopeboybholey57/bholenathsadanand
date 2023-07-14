import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
<>
<section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/blacklogoamazon.png?raw=true" alt="amazonlogo" />
            </div>
            <div className='sign_form'>
                <form>
                    <h1>Sign Up</h1>
                    <div className='form_data'>
                        <label htmlFor='fname'>Your Name</label>
                        <input type="text" name="fname" id="fname"/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                        <input type="text" name="email" id="email"/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='number'>Mobile</label>
                        <input type="text" name="mobile" id="mobile"/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id="password" placeholder='At least 6 characters' />
                    </div>
                    <div className='form_data'>
                        <label htmlFor='password'>Confirm Password</label>
                        <input type="password" name="password" id="password" placeholder='At least 6 characters' />
                    </div>
                    <button className='signin_btn'>Continue</button>
                    <div className='signin_info'>
                        <p>Already have an account ?</p>
                        <NavLink to="/login">
                            Signin
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    </section>
</>
  )
}

export default SignUp