import { useState, useContext } from 'react';
import DataFetcher from '../components/DataFetcher';
import { FavoritesContext } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const { addToFavorites } = useContext(FavoritesContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleDataFetched = (data) => {
    setMovies(data);
  };

  return (
    <div className={`p-4 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-2xl font-bold mb-4 text-center">Search Movies</h1>
      <div className="flex justify-center mb-4">
        <input
          className="border p-2 rounded max-w-md w-full bg-gray-200 dark:bg-gray-700 dark:text-white"
          type="text"
          placeholder="Enter movie title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <DataFetcher query={query} onDataFetched={handleDataFetched} />
      
      {movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
                <p className="mb-2">Rating: {movie.imdbRating}</p>
                <p className="mb-4">{movie.Plot}</p>
                <button
                  onClick={() => addToFavorites(movie)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="flex justify-center mt-4">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all duration-300"
          onClick={() => navigate('/favorites')}
        >
          View Favorites
        </button>
      </div>
    </div>
  );
};

export default Search;
