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
        setnames(name(value));
    };
    return (
        <div>
            <Header headerTitle={headerText} headerExpanded={headerExpanded} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultContainer nameresult={names} />
        </div>
    );
};

// class App extends React.Component {
//     state = {
//         headerText: 'Nameit!',
//         headerExpanded: true,
//         names: [],
//     };
//     handleInputChange = (value) => {
//         console.log(name(value));
//         this.setState({ headerExpanded: !value, names: name(value) });
//     };
//     render() {
//         return (
//             <div>
//                 <Header
//                     headerTitle={this.state.headerText}
//                     headerExpanded={this.state.headerExpanded}
//                 />
//                 <SearchBox onInputChange={this.handleInputChange} />
//                 <ResultContainer nameresult={this.state.names} />
//             </div>
//         );
//     }
// }

// function App() {}

export default App;
