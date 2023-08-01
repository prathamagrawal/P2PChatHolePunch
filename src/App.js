// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import './App.css';
import Login from './Login'; // Import the Login component
import Register from './Register'; // Import the Register component

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Welcome to My App</h1>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
