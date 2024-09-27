import { createContext, useState } from 'react';

// Create context
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.find((fav) => fav.imdbID === movie.imdbID)) {
        return [...prevFavorites, movie];
      }
      return prevFavorites;
    });
  };

  // Remove a movie from favorites
  const removeFromFavorites = (imdbID) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.imdbID !== imdbID));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
