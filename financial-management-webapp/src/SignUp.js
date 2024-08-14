import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.email === email)) {
            alert('User with this email already exists!');
            return;
        }

        // Add new user
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Sign up successful! Please sign in.');
        navigate('/');
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <div className="flex flex-col items-center justify-center flex-grow sm:p-8">
                <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md">
                    <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Confirm your password"
                            />
                        </div>

                        <div className="flex justify-center">
                            <input
                                type="submit"
                                value="Sign Up"
                                className="button-class bg-gray-500 hover:bg-gray-600"
                            />
                        </div>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-300">
                        <p className="text-center text-gray-700 mb-2">Already have an account?</p>
                        <div className="flex justify-center">
                            <Link to="/" className="button-class bg-gray-500 hover:bg-gray-600 text-center">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;