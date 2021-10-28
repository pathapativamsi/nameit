import React, { useState } from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultsContainer/ResultsContainer';
import './App.css';
const name = require('@rstacruz/startup-name-generator');

const App = () => {
    const [headerText, setheaderText] = useState('Name It!');
    const [headerExpanded, setheaderExpanded] = useState(true);
    const [names, setnames] = useState([]);
    const handleInputChange = (value) => {
        setheaderExpanded(!value);
        setnames(value ? name(value) : []);
    };
    return (
        <div>
            <Header headerTitle={headerText} headerExpanded={headerExpanded} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultContainer nameresult={names} />
        </div>
    );
};

export default App;
