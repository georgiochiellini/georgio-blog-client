
const type = 'production'

const apiUrls = {
    developing: 'http://localhost:5000/',
    production: 'https://watchmachine.onrender.com/'
}

const clientUrls = {
    developing: 'http://localhost:3000/',
    production: 'https://watchmachine-promoting.onrender.com/'
}

export const API_URL = apiUrls[type]
export const CLIENT_URL = clientUrls[type]