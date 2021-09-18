import { useContext } from "react";
import { MapsContext } from "../components/MapsContextProvider";

const useMapsApi = () => useContext(MapsContext);

export default useMapsApi;
