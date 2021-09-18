import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import use911Data from "../hooks/use911Data";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapTest = () => {
  const { isLoading, error, data } = use911Data();
  if (isLoading) {
    return "loading...";
  }
  if (error) {
    return "Derp, something went wrong...";
  }

  return (
    <>
      <h1>Placeholders</h1>
      <h2>Data Pull Example</h2>
      <pre style={{ background: "#ccc" }}>
        {isLoading && "...loading..."}
        {error && "something went wrong"}
        {JSON.stringify(data, null, 2)}
      </pre>
      <h2>Map Placeholder</h2>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapTest;
