import axios from "axios";
import { store } from "../redux/store";


axios.defaults.baseURL = "http://skyonliners.com/demo/holmeddoc";

const axiostokenInstance = axios.create()

axiostokenInstance.interceptors.request.use((request) => {
  const state = store.getState();
  const { user } = state;
  if (user?.user?.remember_token) {
    request.headers["access-token"] = user?.user?.remember_token;
  }
  return request;
});
export default axiostokenInstance;
// axios.interceptors.response.use(response => {
//   return response;
// })