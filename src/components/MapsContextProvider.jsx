import React, { createContext } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

export const MapsContext = createContext({});

const libraries = ["visualization"];

const MapsContextProvider = ({ children }) => {
  const mapsJsApi = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (mapsJsApi.isLoaded) {
    mapsJsApi.maps = window.google.maps;
  }

  return (
    <MapsContext.Provider value={mapsJsApi}>{children}</MapsContext.Provider>
  );
};

export default MapsContextProvider;
