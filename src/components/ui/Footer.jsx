import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5 text-center">
            <div className="row">
                <div className="col">
                    <p className=" mb-1">
                        Created by <br /><strong>Manuel Paredes</strong>
                    </p>
                </div>
                <div className="col">
                    <p className="mb-0">
                        This project was developed as part of the Full-Stack Developer course at <a href="https://devschool.com.ar/" className="text-decoration-none fw-bold text-light">DevSchool Academia</a>.
                    </p>
                </div>
                <div className="col">
                    <p className="mb-1">
                        <a href="https://github.com/manuelparedess" className="text-decoration-none fw-bold text-light">GitHub</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;