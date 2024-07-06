import Axios from "axios";

const axios = Axios.create({
    baseURL: `${import.meta.env.VITE_GLITTEZ_BACKEND_API}`
});

axios.interceptors.request.use(config => {
    const token = JSON.parse(localStorage.getItem("glittez_tk"));

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        config.headers.Authorization = null;
    }

    return config;
}, (error) => {
    console.log(error);
    return Promise.reject(error);
});


export default axios;