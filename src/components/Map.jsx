import React from "react";
import { GoogleMap } from "@react-google-maps/api";

import useMapsApi from "../hooks/useMapsApi";

const containerStyle = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "100%",
};

const newYorkCenter = {
  lat: 40.7128,
  lng: -74.006,
};

const Map = ({ children }) => {
  const { isLoaded, loadError } = useMapsApi();

  if (loadError) {
    return "Something went wrong loading the map!";
  }

  if (!isLoaded) {
    return "...loading the map...";
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={newYorkCenter}
      zoom={10}
    >
      {children}
    </GoogleMap>
  );
};

export default Map;
