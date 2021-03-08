import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [fetching, setFetching] = useState(true);

  const removeFavourite = (favouriteIndex, id) => {
    setFavourites(
      favourites.filter((item, index) => {
        return favouriteIndex !== index;
      })
    );

    topNews[id].added = false;
  };

  const addToFavourites = (item) => {
    setFavourites([...favourites, item]);

    topNews[item.id].added = true;
  };

  const contextValue = {
    topNews,
    favourites,
    fetching,
    actions: {
      addToFavourites,
      removeFavourite,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/news");

      setTopNews(result.data);
      setFetching(false);
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
