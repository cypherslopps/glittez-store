import Axios from "axios";

const axios = Axios.create({
    baseURL: import.meta.env.VITE_GLITTEZ_BACKEND_API
});

export default axios;