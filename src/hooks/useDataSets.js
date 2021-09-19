import { useContext } from "react";
import { DataSetsContext } from "../components/DataSetsContextProvider";

const useDataSets = () => useContext(DataSetsContext);

export default useDataSets;
