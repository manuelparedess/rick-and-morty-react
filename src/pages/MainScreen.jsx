import React from 'react';
import { Link } from 'react-router-dom';
import BACKGROUND from '../assets/background.png';


const MainScreen = () => {
    return (
        <div className="container my-3 text-center">
            <img className='mb-3' src={BACKGROUND} alt="" />

            <h1 className="mb-4">Welcome to the Rick and Morty Universe</h1>
            <p className="lead mb-5">
            This app lets you explore characters, episodes, and locations from the Rick and Morty universe.
            <br /> 
            All data is powered by the <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">Rick and Morty API</a>
            </p>

            <div className="row justify-content-center gap-4">
                <Link to="/characters/1" className="btn btn-outline-dark col-10 col-md-3">
                    Browse Characters
                </Link>
                <Link to="/locations/1" className="btn btn-outline-dark col-10 col-md-3">
                    Browse Locations
                </Link>
                <Link to="/episodes/1" className="btn btn-outline-dark col-10 col-md-3">
                    Browse Episodes
                </Link>
            </div>
        </div>
    );
};

export default MainScreen;