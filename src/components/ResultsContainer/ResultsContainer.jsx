import React from 'react';
import './ResultsContainer.css';
import NameContainer from '../NameContainer/NameContainer';
const namecheapurl$ =
    'https://www.namecheap.com/domains/registration/results/?domain=';
const ResultContainer = ({ nameresult }) => {
    const resultjsx = nameresult.map((item) => {
        return (
            <a className="link" href={`${namecheapurl$}${item}`}>
                <NameContainer name={item} />
            </a>
        );
    });
    return <div className="result-container">{resultjsx}</div>;
};

export default ResultContainer;
