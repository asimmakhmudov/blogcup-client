import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://limonblog.herokuapp.com/',
})