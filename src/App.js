import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dasboard/dashboard';
import ProjectDetails from './Components/projects/projectDetails';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/project/:id" component={ProjectDetails} />

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;

