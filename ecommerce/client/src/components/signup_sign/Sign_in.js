import React from 'react'
import "./signup.css"
import { NavLink } from "react-router-dom";

const Sign_in = () => {
  return (
    <>
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/blacklogoamazon.png?raw=true" alt="amazonlogo" />
            </div>
            <div className='sign_form'>
                <form>
                    <h1>Sign In</h1>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                        <input type="text" name="email" id="email"/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id="password" placeholder='At least 6 characters' />
                    </div>
                    <button className='signin_btn'>Continue</button>
                </form>
            </div>
            <div className='create_accountinfo'>
                <p>New To Amazon ?</p>
                <NavLink to="/register">
                <button>Create Your Amazon account</button>
                </NavLink>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Sign_in