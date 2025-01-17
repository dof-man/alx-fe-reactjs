import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

export const fetchUserData = async ({ searchTerm, location, minRepos }) => {
    let query = searchTerm ? `${searchTerm} in:login` : '';
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    try {
        const response = await axios.get(`${BASE_URL}?q=${query}`);
        return response.data.items; // Returns an array of matching users
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
};
