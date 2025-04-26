import React from 'react'
import { Link } from 'react-router-dom';
import LOGO from '../assets/logo.png';


const NotFound = () => {
    return (
        <div className="container text-center mt-3">
            <img className='w-25' src={LOGO} alt="" />
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3">Oops! Page not found</p>
            <p className="lead mb-4">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-outline-dark">
                Go Back Home
            </Link>
        </div>
    )
}

export default NotFound