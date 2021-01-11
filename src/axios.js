import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-dc000.cloudfunctions.net/api",

  //http://localhost:5001/clone-dc000/us-central1/api
});

export default instance;
