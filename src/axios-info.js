import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://avas-portfolio.firebaseio.com/'
});

export default instance;