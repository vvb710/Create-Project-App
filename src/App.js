import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                </div>
            </Router>
        )
    }
}

export default App;

