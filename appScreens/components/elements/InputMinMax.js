import React from 'react'
import {
  StyleSheet, Text, View, TextInput
} from 'react-native'


const InputMinMax = (props) =>{
    return(
        <View style={styles.view}>
            <Text style={styles.text}>{props.title}</Text>
            <TextInput keyboardType='numeric' maxLength={3} placeholder={props.placeholder} style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        borderRadius: 10,
        borderWidth: 1,
        height: 50, 
        textAlign: 'center', 
        width: 100
    },
    text : {
        alignSelf: 'center'
    },
    view : {
        flexDirection:'column'
    }
})

export default InputMinMax