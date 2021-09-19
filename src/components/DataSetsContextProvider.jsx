import React, { createContext, useCallback, useEffect, useState } from "react";

import use911DataSets from "../hooks/use911DataSets";

export const DataSetsContext = createContext({});

const DataSetsContextProvider = ({ children }) => {
  const [dataSets, setDataSets] = useState({});
  const updateDataSets = useCallback(
    (key, values) => {
      setDataSets((ds) => ({
        ...ds,
        [key]: {
          ...ds[key],
          ...values,
        },
      }));
    },
    [setDataSets]
  );

  const { data, ...rest } = use911DataSets();

  useEffect(() => {
    if (data) {
      const dataSets = data.files.reduce(
        (acc, dataSet) => ({
          ...acc,
          [dataSet.name]: {
            ...dataSet,
            isActive: false,
          },
        }),
        {}
      );
      setDataSets(dataSets);
    }
  }, [data, updateDataSets]);

  return (
    <DataSetsContext.Provider
      value={[{ data: dataSets, ...rest }, updateDataSets]}
    >
      {children}
    </DataSetsContext.Provider>
  );
};

export default DataSetsContextProvider;
