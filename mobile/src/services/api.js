import axios from 'axios';

const api = axios.create({
    baseURL:'http://150.162.208.50:55918/',
});

export default api;
