import React from 'react';
import ClientSays from '../ClientSays/ClientSays';
import Experience from '../Experience/Experience';
import './ArgumnetHome.css';
const ArgumnetHome = () => {
    return (
        <>
            <div className="section__margin">
                    <div className="argument__review-container">
                        <div className="argument-heading">
                            <h1>Clients Reviews and Expericences</h1>
                            <div className="border"></div>
                        </div>
                        <div className="row align-item">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <ClientSays/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <Experience/>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default ArgumnetHome;