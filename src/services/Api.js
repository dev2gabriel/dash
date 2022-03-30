import axios from "axios";

export const api = axios.create({
    baseURL: 'http://172.30.61.131:8005'
});

export const createSession = async(username, password) => {
    return api.post('/api/v1/login', {username, password})
}