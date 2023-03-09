import {$host, $authHost} from './index'

export const registration = async (username, password, email, code, ref) => {
    const {data} = await $host.post('api/user/registration', {username, password, email, code, ref})
    localStorage.setItem('token', data.token)
    localStorage.removeItem('ref')
    return data.user
}

export const login = async (username, password, email, code) => {
    const {data} = await $host.post('api/user/login', {username, password, email, code})
    localStorage.setItem('token', data.token)
    return data.user
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return data.user
}

export const sendEmail = async (email) => {
    const {data} = await $host.put('/api/user/email', {email})
    return data
}

export const edit = async (username, password, email, code) => {
    const {data} = await $authHost.put('api/user', {username, password, email, code})
    return data
}

export const getReferralLink = async () => {
    const {data} = await $authHost.get('api/user/ref')
    return data
}