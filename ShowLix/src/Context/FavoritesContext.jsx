import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const FavoritesContext = createContext(null);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('showlex_favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('showlex_favorites', JSON.stringify(favorites));
      } catch (error) {
        console.error('Failed to save favorites:', error);
      }
    }
  }, [favorites, isLoaded]);

  const isFavorite = useCallback((movieId) => {
    return favorites.some(movie => movie._id === movieId || movie.id === movieId);
  }, [favorites]);

  const toggleFavorite = useCallback((movie) => {
    setFavorites(prev => {
      const movieId = movie._id || movie.id;
      const exists = prev.some(m => m._id === movieId || m.id === movieId);

      if (exists) {
        return prev.filter(m => m._id !== movieId && m.id !== movieId);
      } else {
        return [...prev, movie];
      }
    });
  }, []);

  const addFavorite = useCallback((movie) => {
    setFavorites(prev => {
      const movieId = movie._id || movie.id;
      if (prev.some(m => m._id === movieId || m.id === movieId)) {
        return prev;
      }
      return [...prev, movie];
    });
  }, []);

  const removeFavorite = useCallback((movieId) => {
    setFavorites(prev => prev.filter(m => m._id !== movieId && m.id !== movieId));
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return (
    <FavoritesContext.Provider value={{
      favorites,
      isLoaded,
      isFavorite,
      toggleFavorite,
      addFavorite,
      removeFavorite,
      clearFavorites,
      count: favorites.length
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};