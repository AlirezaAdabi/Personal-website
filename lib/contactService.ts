import axios from "axios";

export const api = async (data) => {
  const url =
    process.env.NODE_ENV === "development"
      ? "https://alireza-adabi.ir/api/contact"
      : "https://alireza-adabi.ir/api/contact";

  return axios.post(url, data);
};
