import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-projekat.firebaseio.com/'
});

export default instance;