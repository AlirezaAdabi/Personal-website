import axios from "axios";

export const api = async (data) => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/contact"
      : "https://alireza-adabi.ir/api/contact";

  return axios.post(url, data);
};
