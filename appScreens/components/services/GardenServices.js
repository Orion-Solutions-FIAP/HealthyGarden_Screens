const axios = require("axios")
const URL_GARDEN_API = 'http://10.0.0.107:44320/api/Garden'


export const getGarden = () => {
    return axios({
        url: URL_GARDEN_API + '/1',
        method: 'get'
    })
}

export const postGarden = (gardenName, gardenDescription) => {
    return axios({
        url: URL_GARDEN_API,
        method: 'post',
        data: {
            "userId": 1,
            "statusId": 6,
            "name": gardenName,
            "description": gardenDescription
        }
    })
}
