import React from 'react'

const Character = ({ data }) => {

    const { name, image, status, species } = data;

    return (
        <div className="p-3 col-6 col-md-5 col-lg-4 col-xl-3">
            <div className="card shadow p-0">
                <img src={image} className="card-img-top object-fit-cover" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-1">{name}</h5>
                    <div className="d-flex flex-column justify-content-between flex-grow-1">
                        <p className="card-text fst-italic">{species}</p>
                        <p className="card-text fw-bold" id="status">{status}</p>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Character