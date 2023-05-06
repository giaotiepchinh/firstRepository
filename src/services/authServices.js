import axios from "axios";
import axiosClient from "../api/axiosClient";

const authServices = {
  getbyId: (id) => {
    const url = `/Auth?${id}`;
    return axiosClient.get(url);
  },

  postLogin: async (data) => {
    const url = "https://localhost:7244/api/Auth";
    console.log(data);
    return await axios.post(url, { data });
  },
};

export default authServices;
