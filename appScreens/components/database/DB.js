import AsyncStorage from "@react-native-async-storage/async-storage"

/**
 * Salva um token no banco.
 * @param {string} token 
 * @param {function} callback 
 */
export const saveToken = async (token, callback = null) => {
    try {
        await AsyncStorage.setItem('token', token, callback)
    } catch (error) {
        throw new Error('Não foi possivel salvar o token!')
    }
}

/**
 * remove um token no banco.
 * @param {function} callback 
 */
export const removeToken = async (callback = null) => {
    try {
        await AsyncStorage.removeItem('token', callback)
    } catch (error){
        throw new Error('Não foi possivel apagar o token!')
    }
}

export const getToken = async (callback = null) => {
    try {
        await AsyncStorage.getItem('token', callback)
    } catch (error) {   
        throw new Error('Não foi possivel recuperar o token!')

    }
}

export const saveUserId = async (userId, callback = null) => {
    try {
        const obj = JSON.stringify(userId)
        await AsyncStorage.setItem('userId', obj, callback)
    } catch (error) {
        throw new Error('Não foi possivel salvar o userId!')
    }
}

export const removeUserId = async (callback = null) => {
    try{
        await AsyncStorage.removeItem('userId', callback)
    } catch (error){
        throw new Error('Não foi possivel apagar o userId!')
    }
}

export const getUserId = async (callback = null) => {
    try{
        await AsyncStorage.getItem('userId', callback)
    } catch (error){
        throw new Error('Não foi possivel recuperar o userId!')
    }
}