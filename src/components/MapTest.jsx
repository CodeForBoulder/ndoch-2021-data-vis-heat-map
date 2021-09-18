import React, { useMemo } from "react";
import { HeatmapLayer } from "@react-google-maps/api";

import Map from "./Map";
import use911Data from "../hooks/use911Data";
import useMapsApi from "../hooks/useMapsApi";

const MapTest = () => {
  const { isLoading, error, data } = use911Data();
  const { maps } = useMapsApi();
  const heatMapData = useMemo(() => {
    if (data && maps) {
      return data.map(
        ({ latitude, longitude }) => new maps.LatLng(latitude, longitude)
      );
    }
    return [];
  }, [data, maps]);
  if (isLoading) {
    return "loading...";
  }
  if (error) {
    return "Derp, something went wrong...";
  }

  return (
    <>
      <h1>Placeholders</h1>
      <h2>Map Placeholder</h2>
      <Map>
        <HeatmapLayer data={heatMapData} />
      </Map>
      <h2>Data Pull Example</h2>
      <pre style={{ background: "#ccc" }}>
        {isLoading && "...loading..."}
        {error && "something went wrong"}
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
};

export default MapTest;
