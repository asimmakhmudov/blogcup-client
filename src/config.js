import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://limonblogapi.herokuapp.com/api',
})