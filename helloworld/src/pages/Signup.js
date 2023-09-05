import React, { useState } from 'react'
import Header from '../Header'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(email, password);
            // Successful signup
        } catch (error) {
            // Handle signup error
            console.error(error.message);
        }
    };
    return (
        <div>
            <Header />
            <div>
                <h2>Sign Up</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    )
}
export default Signup;