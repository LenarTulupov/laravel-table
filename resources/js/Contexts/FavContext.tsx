<<<<<<< HEAD
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
=======
import { createContext, ReactNode, useContext, useState } from "react";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

interface IFavContext {
  favorites: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const FavContext = createContext<IFavContext>({} as IFavContext);

export const FavProvider = ({ children }: { children: ReactNode }) => {
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

<<<<<<< HEAD
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if(storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  return (
    <FavContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavContext);
