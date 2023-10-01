import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div id='login'>
            <form>
                <h2 className='text-dark mt-3'>Login Form</h2>
                <div className="form-group mt-4">
                    <label htmlFor="email" mt-2><b> Email address </b></label>
                    <input type="email" id='email' className="form-control bg-light my-2" placeholder='xyz@gmail.com' required />
                </div>
                <div className="form-group">
                    <label for="password"><b>Password</b></label>
                    <input type="password" id='password' className="form-control bg-light my-2" placeholder='Password' aria-describedby='passwordHelp' required />
                    <small id='passwordHelp'>Password should be of atleast 8 characters</small>
                </div>
                <div className="form-check">
                    <input type="checkbox" id='check' className="form-check-input my-3 mr-2" />
                    <label htmlFor="check" className="form-check-label mt-2 mx-1">Remember me!</label>
                </div>
                <button type='submit' className='form-control btn btn-primary my-3'> Login </button>
                <div className="container">
                    <p style={{ textAlign: 'left' , fontWeight:'bold' }}><Link to='/forgetPassword' className='text-decoration-none' >Forget Password</Link></p>
                    <p className='text-align-center '>Do not have a account <Link to='/signup' className='fw-bold text-decoration-none'>Sign Up</Link></p>
                </div>

            </form>
        </div>
    )
}
