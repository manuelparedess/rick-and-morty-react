import React from 'react'
import LOGO from '../../assets/logo.png';
import HOME from '../../assets/home.png';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="row d-flex bg-dark height-25 w-100">
            <div className='col-3 d-flex justify-content-center align-items-center gap-3 gap-xl-4 height-25 p-0'>
                <Link to={'/'} className='d-flex justify-content-center align-items-center height-25'><img className='object-fit-contain w-max f-invert h-25' src={HOME} /></Link>
                <div className="list-group list-group-flush me-xl-4">
                    <Link to={'/characters/1'} className="list-group-item bg-dark text-light">Characters</Link>
                    <Link to={'/locations'} className="list-group-item bg-dark text-light">Locations</Link>
                    <Link to={'/episodes'} className="list-group-item bg-dark text-light">Episodes</Link>
                </div>
            </div>
            <div className='col-9 d-flex align-items-center gap-3 height-25 p-0'>
                <img className='object-fit-contain w-max f-invert h-100' src={LOGO} />
                <h1 className="ff-anton text-light">Rick and Morty</h1>
            </div>
        </div>
    )
}

export default NavBar