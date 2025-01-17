import { useState } from "react";
import { fetchUsers } from "../services/githubService"; // API call function
import { fetchUserData } from "../services/githubService"; // Import the function

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [users, setUsers] = useState([]); // Stores fetched users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const userData = await fetchUsers(username, location, repos);
      setUsers(userData); // ✅ Ensure users array is populated
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Location (e.g., Nigeria)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Min Repositories"
            value={repos}
            onChange={(e) => setRepos(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-4 text-center">Loading...</p>}
      {error && <p className="text-red-500 mt-4 text-center">Looks like we can't find the user</p>}

      {users.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Search Results</h2>
          <ul className="space-y-4">
            {users.map((user) => ( // ✅ Ensure `map` is used for rendering multiple users
              <li key={user.id} className="p-4 border rounded shadow flex items-center">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{user.login}</h3>
                  <p className="text-sm text-gray-600">Location: {user.location || "N/A"}</p>
                  <p className="text-sm text-gray-600">Public Repos: {user.public_repos}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
