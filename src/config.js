import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://blogcup.herokuapp.com/',
})