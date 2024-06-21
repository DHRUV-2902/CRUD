import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateUsers() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", { name, email, age })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center py-10">
            <form onSubmit={Submit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-lg w-full">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Add User</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                    <input
                        type="number"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
