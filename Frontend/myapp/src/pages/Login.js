import React, { useState } from 'react';
import logo from '../img/logoschool.png'; // with import
import axios from 'axios'

import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const onFinish = event => {
        event.preventDefault();
        axios.post('http://localhost:3001/validatePassword', { username, password })
        .then(res => {
            if(res.data.validation){
                alert('Your password is correct')
                return navigate("/Home");
            }
            else{
                alert('Your password is incorrect')
            }
        })
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div><img src={logo} className="w-[200px] mx-auto mt-24" alt="Logo"></img></div>
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl  ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700  uppercase ">
                   Sign in
                </h1>
                <form className="mt-6" onSubmit={onFinish}>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Username
                        </label>
                        <input
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                  
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                
            </div>
        </div>
    );
}
