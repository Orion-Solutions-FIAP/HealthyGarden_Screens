import React, {useState} from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native'

import {
  Input,
  Button,
 } from 'react-native-elements'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LeafIcon from '../elements/LeafMenuIcon';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import { postUser } from '../services/UserServices';

const Stack = createNativeStackNavigator()


const Register = (props) => {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [repeatPassword, setRepeatPassword] = useState('')

    const validate = () => {
      if(name.trim().length === 0){
        Alert.alert('Erro', 'Nome não informado')
        return false
      }

      const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if(!regEmail.test(email)){
        Alert.alert('Erro', 'Email incorreto')
        return false
      }

      if(password.length == 0){
        Alert.alert('Erro', 'A senha é obrigatória')
        return false
      }

      if(password !== repeatPassword){
        Alert.alert('Erro', 'As senhas precisam ser iguais')
        return false
      }

      return true

    }

    const register = () => {
      if(validate()) {
        console.log(name,email,password)
        postUser(name,email,password)
          .then(() => {
            Alert.alert("Sucesso", "Usuário cadastrado com sucesso")
            props.navigation.navigate("login")
          })
          .catch((err) => {
            console.log(err)
            Alert.alert("Erro", "Não foi possível cadastrar")
          })
      }
    }

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
              register()
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