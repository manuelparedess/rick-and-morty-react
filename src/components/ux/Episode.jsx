import React from 'react'

const Episode = ({ data }) => {

    const { name, air_date, episode} = data;

    let dataEpisode = '';
    const match = episode.match(/S(\d+)E(\d+)/);

    if (match) {
        const season = parseInt(match[1], 10);
        const episode = parseInt(match[2], 10);
        dataEpisode = `Temporada ${season}, Episodio ${episode}`;
    }

    return (
        <div className="p-3 col-6 col-md-5 col-lg-4 col-xl-3">
            <div className="card shadow p-0">
                <div className="card-header card-title bg-dark text-light">
                    {name}
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text fst-italic">{dataEpisode}</p>
                    <div className="d-flex flex-column justify-content-end">
                        <p className="card-text m-0">Fecha de emision:</p>
                        <p className="card-text fw-bold" id="status">{air_date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episode