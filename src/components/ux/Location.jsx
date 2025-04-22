import React from 'react'

const Location = ({ data }) => {

    const { name, type, dimension} = data;

    return (
        <div className="p-3 col-6 col-md-5 col-lg-4 col-xl-3">
            <div className="card shadow p-0">
                <div className="card-header card-title bg-dark text-light">
                    {name}
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text fst-italic">{type}</p>
                    <p className="card-text fw-bold" id="status">{dimension}</p>
                </div>
            </div>
        </div>
    )
}

export default Location