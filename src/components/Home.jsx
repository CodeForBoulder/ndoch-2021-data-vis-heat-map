import React, { useMemo } from "react";
import { HeatmapLayer } from "@react-google-maps/api";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Map from "./Map";
import DesktopMenu from "./DesktopMenu";
import use911Data from "../hooks/use911Data";
import useMapsApi from "../hooks/useMapsApi";

const Home = () => {
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
    <Grid
      component={Box}
      container
      direction="column"
      width="100vw"
      height="100vh"
    >
      <Grid item xs="auto">
        <DesktopMenu />
      </Grid>
      <Grid component={Box} display="flex" item xs>
        <Map>
          <HeatmapLayer data={heatMapData} />
        </Map>
      </Grid>
    </Grid>
  );
};

export default Home;
