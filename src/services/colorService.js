import axios from "axios";

export const getColors = () => {
  return axios.get("http://127.0.0.1:3001/colors");
};
