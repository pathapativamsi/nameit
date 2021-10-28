import React from 'react';
import './NameContainer.css';

const NameContainer = ({ name }) => {
    return (
        <div className="result-name-card">
            <div className="result-name">{name}</div>
        </div>
    );
};

export default NameContainer;
