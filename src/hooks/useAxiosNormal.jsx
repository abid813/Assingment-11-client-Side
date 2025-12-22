import axios from "axios";
import React from "react";
const instance = axios.create({
  baseURL: "https://final-assignment-server-swart.vercel.app",
});
const useAxiosNormal = () => {
  return instance;
};

export default useAxiosNormal;
