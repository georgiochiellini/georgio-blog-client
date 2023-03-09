import axios from 'axios'
import { API_URL } from '../app/url'

const $host = axios.create({
    baseURL: API_URL
})

const $authHost = axios.create({
    baseURL: API_URL
})

const authInterceptor = config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
