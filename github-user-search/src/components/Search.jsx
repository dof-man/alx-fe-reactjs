import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ searchTerm, location, minRepos });
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        placeholder="GitHub username"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
                    <input
                        type="number"
                        placeholder="Min Repos"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
