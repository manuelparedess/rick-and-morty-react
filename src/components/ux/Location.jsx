import React from 'react'

const Location = ({ data }) => {

    const { name, type, dimension, created } = data;
    const date =  new Date(created).toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, 
    });

    return (
        <div className="p-3 col-6 col-md-5 col-lg-4 col-xl-3">
            <div className="card shadow p-0">
                <div className="card-header bg-dark text-light">
                    {date}
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-1">{name}</h5>
                    <div className="d-flex flex-column justify-content-between flex-grow-1">
                        <p className="card-text fst-italic">{type}</p>
                        <p className="card-text fw-bold" id="status">{dimension}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location