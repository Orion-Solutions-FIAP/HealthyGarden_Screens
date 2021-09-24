const axios = require("axios")
const URL_GARDEN_API = 'https://healthygardenapi.azurewebsites.net/api/Garden/'


export const getGarden = () => {
    return axios({
        url: URL_GARDEN_API + '/1',
        method: 'get'
    })
}

export const postGarden = (name, description, userId = 1, statusId=6,) => {
    return axios({
        url: URL_GARDEN_API,
        method: 'post',
        data: {
            userId,
            statusId,
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
