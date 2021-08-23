import React, {useState} from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'

import {
  Input,
  Button,
 } from 'react-native-elements'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LeafIcon from '../elements/LeafMenuIcon';

const Stack = createNativeStackNavigator()

const Login = (props) => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    return (

      <ScrollView style={styles.container}>
        <SafeAreaView>
          <View style={{alignSelf: 'center', paddingBottom: 16}}>
            <LeafIcon/>
          </View>
          
          <Input 
            label="Email" 
            labelStyle={styles.labelStyle} 
            inputStyle={styles.inputStyle}/>

          <Input
            secureTextEntry={true} 
            label="Senha" 
            labelStyle={styles.labelStyle} 
            inputStyle={styles.inputStyle}/>

          <Button 
            type="outline" 
            title="Login" 
            titleStyle={styles.titleStyle} 
            buttonStyle={styles.buttonStyle} 
            onPress={() => {
                props.navigation.navigate("createGarden")
            }}/>

          <TouchableOpacity 
            style={styles.microsoftButton} 
            onPress={() => {
                props.navigation.navigate("createGarden")
            }}>
            <Image style={styles.icon} source={require('../../src/image/icon_microsoft.png')}/>
            <Text style={styles.titleStyle}> Login with Microsoft </Text>
          </TouchableOpacity>

        </SafeAreaView>
      </ScrollView>     
    )
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
      backgroundColor: "#08B662",
    },
  
    inputStyle: {
      borderRadius: 16,
      backgroundColor: 'white',
      color: "#000",
    },
  
    labelStyle: {
      fontSize: 20,
      paddingLeft: 10,
      color: "#000"
    },
  
    buttonStyle: {
      alignSelf: 'center',
      height: 60,
      width: 200,
      color: "#fefefe",
      backgroundColor: "#09894C",
      borderColor: "#FFF"
    },
  
    titleStyle: {
      color: '#FEFEFE'
    },

    microsoftButton: {
        marginTop: 16,
        height: 60,
        width: 200,
        backgroundColor: "#09894C",
        borderColor: "#FFF",
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon: {
        height: 40,
        width: 40
    }
  
    
  })
  export default Login