import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultsContainer/ResultsContainer';
import './App.css';
const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: 'Nameit!',
        headerExpanded: true,
        names: [],
    };
    handleInputChange = (value) => {
        console.log(name(value));
        this.setState({ headerExpanded: !value, names: name(value) });
    };
    render() {
        return (
            <div>
                <Header
                    headerTitle={this.state.headerText}
                    headerExpanded={this.state.headerExpanded}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer nameresult={this.state.names} />
            </div>
        );
    }
}

// function App() {}

export default App;
