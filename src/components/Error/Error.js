import React from 'react';
import './Error.css';
const Error = () => {
    return (
        <div className='error__container'>
            <div className='error'>404</div>
            <div className='error-text'>This page could not be found.</div>
        </div>
    );
};

export default Error;