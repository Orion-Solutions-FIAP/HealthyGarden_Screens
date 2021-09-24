const axios = require("axios")
const URL_SETTING_API = 'http://10.0.0.107:44320/api/Setting'


export const getSetting = () => {
    return axios({
        url: URL_SETTING_API + '/1',
        method: 'get'
    })
}

export const postSetting = (isAutomatic, minimumMoisture, maximumMoisture, minimumTemperature, maximumTemperature) => {
    return axios({
        url: URL_SETTING_API,
        method: 'post',
        data: {
            isAutomatic,
            minimumMoisture,
            maximumMoisture,
            minimumTemperature,
            maximumTemperature
        }
    })
}


export const putSetting = (gardenId, isAutomatic, minimumMoisture, maximumMoisture, minimumTemperature, maximumTemperature) => {
    return axios({
        url: URL_SETTING_API,
        method: 'put',
        data: {
            gardenId,
            isAutomatic,
            minimumMoisture,
            maximumMoisture,
            minimumTemperature,
            maximumTemperature
        }
    })
}

export const deleteSetting = (settingId) => {
    return axios({
        url: URL_SETTING_API + "/" + settingId,
        method: 'delete',
    })
}

