import React from 'react'
import { Alert, View } from 'react-native'


const Logout = ({navigation}) => {
    return(
        <View>
            { Alert.alert(
            'Confirmação',
            'Quer realmente sair ?',
            [
                {text: 'Sim', onPress: () => (
                    navigation.reset({
                        index:1,
                        routes:[{name:'home'}]
                    })
                )},
                {text: 'Não', onPress:() => (
                    navigation.reset({
                        index:1,
                        routes:[{name:'principal'}]
                    })
                )} 
            ])}
        </View>
       
    )
}

export default Logout