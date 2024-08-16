import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
        
    //     // Check if user exists and password is correct
    //     const users = JSON.parse(localStorage.getItem('users')) || [];
    //     const user = users.find(u => u.email === email && u.password === password);

    //     if (user) {
    //         // Store the logged-in user's email in localStorage
    //         localStorage.setItem('currentUser', email);
    //         alert('Sign in successful!');
    //         navigate('/HomePage');
    //     } else {
    //         alert('Invalid email or password!');
    //     }
    // };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/SignIn', { email, password });
            if (response.data.success) {
                localStorage.setItem('currentUser', response.data.userId);
                alert('Sign in successful!');
                navigate('/HomePage');
            } else {
                alert('Invalid email or password!');
            }
        } catch (error) {
            console.log(error)
            alert('Invalid email or password!');
        }
    };


    return (
        <div className='flex flex-col min-h-screen'>
            <div className="flex flex-col items-center justify-center flex-grow sm:p-8">
                <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md">
                    <h1 className="text-2xl font-bold mb-4">Sign In</h1>

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

                        <div className="mb-6">
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

                        <div className="flex justify-center ">
                            <input
                                type="submit"
                                value="Sign In"
                                className="button-class bg-gray-500 hover:bg-gray-600"
                            />
                        </div>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-300">
                        <p className="text-center text-gray-700 mb-2">Don't have an account?</p>
                        <div className="flex justify-center">
                            <Link to="/SignUp" className="button-class bg-gray-500 hover:bg-gray-600 text-center">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;