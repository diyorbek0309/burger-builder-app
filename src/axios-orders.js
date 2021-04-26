import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-d1f92-default-rtdb.firebaseio.com/",
});

export default instance;
