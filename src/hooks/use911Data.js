import { useQuery } from "react-query";

import dataWorldClient from "../utils/dataWorldClient";

const use911Data = () => {
  return useQuery(
    "latLongQuery",
    async () => {
      const response = await dataWorldClient.post("/911-psap-data", {
        query:
          "SELECT latitude, longitude FROM ny_2021_nypd_calls_for_service LIMIT 20",
      });
      return response.data;
    },
    {
      // disabling retry for now to prevent spam
      retry: false,
    }
  );
};

export default use911Data;
