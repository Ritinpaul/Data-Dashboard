import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);
  const navigate = useNavigate();

  return (
    <div className="p-4 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Favorite Movies</h1>

      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
          onClick={() => navigate('/search')}
        >
          Back to Search
        </button>
      </div>

      {favorites.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <li key={movie.imdbID} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Rating: {movie.imdbRating}</p>
                <button
                  onClick={() => removeFromFavorites(movie.imdbID)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all duration-300"
                >
                  Remove from Favorites
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">No favorite movies added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
