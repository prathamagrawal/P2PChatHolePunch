// src/ConnectionForm.js
import React, { useState } from 'react';

function Login({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [keyID, setKeyID] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ username, keyID });
    };

    return (
        <div>
            <h2>Connection Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    KeyID:
                    <input
                        type="text"
                        value={keyID}
                        onChange={(e) => setKeyID(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Connect</button>
            </form>
        </div>
    );
}

export default Login;
