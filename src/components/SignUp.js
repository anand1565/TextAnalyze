import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <>
            <section className="vh-100">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100 mt-5">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: '15px' }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control" placeholder='Full Name' />
                                                <label className="form-label fw-bold" htmlFor="form3Example1cg">Your Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control" placeholder='xyz@gmail.com' />
                                                <label className="form-label fw-bold" htmlFor="form3Example3cg">Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" className="form-control" placeholder='Password' />
                                                <label className="form-label fw-bold" htmlFor="form3Example4cg">Password</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control" placeholder='Re-enter password' />
                                                <label className="form-label fw-bold" htmlFor="form3Example4cdg">Re-Enter your password</label>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label className="form-check-label fw-bold" htmlFor="form2Example3cg">
                                                    I agree all statements in <u><Link to='/conditions'>Terms of service</Link></u>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="submit"
                                                    className="form-control btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to='/Login'
                                                className="fw-bold text-body"><u>Login here</u></Link></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
