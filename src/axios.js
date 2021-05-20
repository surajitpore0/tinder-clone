import axios from "axios";

const instance = axios.create({
    baseURL: "https://tin-cl-backend.herokuapp.com/",
});

export default instance;
