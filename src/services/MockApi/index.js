import axios from "axios";


const api =axios.create({
    baseURL: 'https://66512fa820f4f4c442771d6a.mockapi.io/'
});

export default api;