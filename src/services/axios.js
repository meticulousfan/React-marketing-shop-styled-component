import axios from 'axios';

export default axios.create({
    // baseURL: 'http://127.0.0.1:3001',
    // baseURL: 'https://onlineshop-1.herokuapp.com',
    baseURL: 'http://localhost:5000',
});
