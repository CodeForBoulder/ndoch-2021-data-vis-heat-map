import axios from "axios";

export default axios.create({
  baseURL: "https://api.data.world/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_DATA_WORLD_READ_WRITE_API_TOKEN}`,
  },
});
