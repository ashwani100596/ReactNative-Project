import axios from "axios";

export const ApiUrl = axios.create({
  baseURL: "https://itunes.apple.com/",
});
