const axios = require("axios")

const URL_USER_API = "https://healthygardenapi.azurewebsites.net/api/User"

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

export const putUser = (name, email, password) => {
    return axios({
        url: URL_USER_API,
        method: 'put',
        data: {
            name,
            email,
            password
        }
    })
}

export const deleteUser = (userId) => {
    return axios({
        url: URL_USER_API + '/' + userId,
        method: 'delete',
    })
}