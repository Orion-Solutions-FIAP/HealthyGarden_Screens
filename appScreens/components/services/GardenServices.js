const axios = require("axios")
const URL_GARDEN_API = 'http://10.0.0.107:44320/api/Garden'


export const getGarden = () => {
    return axios({
        url: URL_GARDEN_API + '/1',
        method: 'get'
    })
}

export const postGarden = (userId = 1, name, description) => {
    return axios({
        url: URL_GARDEN_API,
        method: 'post',
        data: {
            userId,
            "statusId": 6,
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
