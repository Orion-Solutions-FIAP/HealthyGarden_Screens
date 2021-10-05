const axios = require("axios")
const URL_GARDEN_API = 'https://healthygardenapi.azurewebsites.net/api/Garden'


export const getGarden = (id) => {
    return axios({
        url: URL_GARDEN_API + '/' + id,
        method: 'get'
    })
}

export const getGardenByIdUser = (idUser) => {
    return axios({
        url: URL_GARDEN_API + '/user/' + idUser,
        method: 'get'
    })
}

export const postGarden = (name, description, userId = 16, moistureStatus = 3, temperatureStatus = 3) => {
    return axios({
        url: URL_GARDEN_API,
        method: 'post',
        data: {
            userId,
            moistureStatus,
            temperatureStatus,
            name,
            description
        }
    })
}


export const putGarden = (name, description) => {
    return axios({
        url: URL_GARDEN_API,
        method: 'put',
        data: {
            name,
            description
        }
    })
}

export const deleteGarden = (gardenId) => {
    return axios({
        url: URL_SETTING_API + "/" + gardenId,
        method: 'delete',
    })
}
