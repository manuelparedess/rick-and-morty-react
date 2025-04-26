import React, { useState } from 'react'
import LOGO from '../../assets/logo.png';
import HOME from '../../assets/home.png';
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap';

const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="row d-flex bg-dark height-25 w-100">
            <div className='col-3 d-none d-lg-flex justify-content-center align-items-center gap-3 gap-xl-4 height-25 p-0'>
                <Link to={'/'} className='d-flex justify-content-center align-items-center height-25'><img className='object-fit-contain w-max f-invert h-25' src={HOME} /></Link>
                <div className="list-group list-group-flush me-xl-4">
                    <Link to={'/characters/1'} className="list-group-item bg-dark text-light">Characters</Link>
                    <Link to={'/locations/1'} className="list-group-item bg-dark text-light">Locations</Link>
                    <Link to={'/episodes/1'} className="list-group-item bg-dark text-light">Episodes</Link>
                </div>
            </div>
            <div className='col-3 col-sm-2 d-flex d-lg-none justify-content-center align-items-center height-25 ps-4 ps-md-0'>
                <button className='btn btn-outline-light d-block d-lg-none' onClick={handleShow}>☰</button>  
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link to={'/'} className='d-flex align-items-center mb-3'><img className='object-fit-contain offcanvas-img' src={HOME} /></Link>
                    <div className="list-group list-group-flush me-xl-4">
                        <Link to={'/characters/1'} className="list-group-item bg-dark text-light">Characters</Link>
                        <Link to={'/locations/1'} className="list-group-item bg-dark text-light">Locations</Link>
                        <Link to={'/episodes/1'} className="list-group-item bg-dark text-light">Episodes</Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* terminar responsive navbar 
@media (min-width: 768px) */}
            <div className='col-9 col-sm-10 col-md-9 d-flex align-items-center gap-2 gap-md-4 height-25 mx-0 p-lg-0'>
                <img className='object-fit-contain w-max f-invert image-size' src={LOGO} />
                <h1 className="ff-anton text-light">Rick and Morty</h1>
            </div>
        </div>
    )
}

export default NavBar