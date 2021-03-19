import axios from "axios";

const ApiUrl = axios.create({
  baseURL: "https://itunes.apple.com/search?term=Michael+jackson",
});
export default ApiUrl;
