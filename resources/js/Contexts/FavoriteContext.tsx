import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IFavoriteContext {
  favorites: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const addToFavorites = (id: number) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(id)) {
        return [...prevFavorites, id];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter((fav) => fav !== id);
    });
  };

  const isFavorite = (id: number) => {
    const result = favorites.includes(id);
    return result;
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if(storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoriteContext);
