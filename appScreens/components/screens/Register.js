import React, {useState} from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native'

import {
  Input,
  Button,
 } from 'react-native-elements'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LeafIcon from '../elements/LeafMenuIcon';

const Stack = createNativeStackNavigator()

const Register = (props) => {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [repeatPassword, setRepeatPassword] = useState('')


    return (

      <ScrollView style={styles.container}>
        <SafeAreaView>
          <View style={{alignSelf: 'center', paddingBottom: 16}}>
            <LeafIcon />
          </View>
          <Input 
            label="Name" 
            labelStyle={styles.labelStyle} 
            inputStyle={styles.inputStyle}
            onChangeText={(value) => {
              setName(value);
            }}/>
          <Input 
            label="Email" 
            labelStyle={styles.labelStyle} 
            inputStyle={styles.inputStyle}
            onChangeText={(value) => {
              setEmail(value);
            }}/>
          <Input
            secureTextEntry={true}
            label="Password" 
            labelStyle={styles.labelStyle} 
            inputStyle={styles.inputStyle}
            onChangeText={(value) => {
              setPassword(value);
            }}/>
          <Input 
            secureTextEntry={true}
            label="Repeat password" 
            labelStyle={styles.labelStyle} 
            inputStyle={styles.inputStyle}
            onChangeText={(value) => {
              setRepeatPassword(value)
            }}/>

          <Button 
            type="outline" 
            title="Register here" 
            titleStyle={styles.titleStyle} 
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              if(password !== repeatPassword) alert('Errado') 
              else props.navigation.navigate("login")
            }}/>
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
    }
  
    
  })
  export default Register