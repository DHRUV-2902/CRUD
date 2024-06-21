import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-10 flex items-center justify-center">
            <div className="container mx-auto px-4 py-6 bg-white shadow-md rounded-lg max-w-4xl">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">Users</h1>
                    <Link to="/create" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300">Add</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b bg-gray-100 text-center">Name</th>
                                <th className="py-2 px-4 border-b bg-gray-100 text-center">Email</th>
                                <th className="py-2 px-4 border-b bg-gray-100 text-center">Age</th>
                                <th className="py-2 px-4 border-b bg-gray-100 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-100 transition duration-300">
                                    <td className="py-2 px-4 border-b text-gray-700 text-center">{user.name}</td>
                                    <td className="py-2 px-4 border-b text-gray-700 text-center">{user.email}</td>
                                    <td className="py-2 px-4 border-b text-gray-700 text-center">{user.age}</td>
                                    <td className="py-2 px-4 border-b text-center">
                                        <Link to={`/up/${user._id}`} className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded transition duration-300 mr-2">Update</Link>
                                        <button onClick={() => handleDelete(user._id)} className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded transition duration-300">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
