const axios = require("axios")

const URL_USER_API = "https://10.0.0.107:44320/api/User"

export const getUser = () => {
    return axios({
        url: URL_USER_API + '',
        method: 'get'
    })
}

export const postUser = (name, email, password) => {
    return axios({
        url: URL_USER_API,
        method: 'post',
        data: {
            name,
            email,
            password
        }
    })
}