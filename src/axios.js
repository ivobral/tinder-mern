import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-clone-an.herokuapp.com/'
})

export default instance;