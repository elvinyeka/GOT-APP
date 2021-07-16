import React from 'react';

import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <div>
            <div className="error-box">
                <img src={img} alt="error" />
                <span>Something goes wrong</span>
            </div>
        </div>
    )
}

export default ErrorMessage;
