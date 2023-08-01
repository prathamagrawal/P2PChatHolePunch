import React, { useState } from 'react';
import './App.css';
import DHT from 'hyperdht'
import b4a from 'b4a'

const keyPair = DHT.keyPair()

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showGreeting, setShowGreeting] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowGreeting(true);
    };

    return (
        <div className="App">
            <h1>P2P Private Chat App</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <button type="submit">Show Public Key</button>
            </form>
            {showGreeting && (
                <div>
                    <h2>{b4a.toString(keyPair.publicKey, 'hex')}</h2>
                </div>
            )}
        </div>
    );
}

export default App;
