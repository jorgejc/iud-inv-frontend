import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:4000/'
       baseURL: 'https://app-bk.onrender.com/'
});

export {
    axiosInstance,
}