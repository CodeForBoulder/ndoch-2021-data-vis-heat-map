import { useQuery } from "react-query";

import dataWorldClient from "../utils/dataWorldClient";

const use911DataSets = () =>
  useQuery(
    "dataSets",
    async () => {
      const response = await dataWorldClient.get(
        `v0/datasets/${process.env.REACT_APP_DATA_WORLD_USERNAME}/911-psap-data`
      );
      return response.data;
    },
    {
      // disabling retry for now to prevent spam
      retry: false,
    }
  );

export default use911DataSets;
