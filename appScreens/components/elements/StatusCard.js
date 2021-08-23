import React from 'react'
import {
    Card,
    Icon
} from 'react-native-elements'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import DropIcon from './DropIcon'

const StatusCard = (props) => {
    
    const styles = StyleSheet.create({
        container:{
            borderRadius:16,
            margin:32,
            backgroundColor: props.containerColor
        },

        mainText:{
            color:"#FEFEFE",
            fontSize: props.textSize,
            textAlign:'center', 
            alignSelf:"center", 
            flex:2
        }
    })

    return (
        <Card containerStyle={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                {props.componentIcon}
                <Text style={styles.mainText}>{props.statusText}</Text>
            </View>
        </Card>
    )
}

export default StatusCard