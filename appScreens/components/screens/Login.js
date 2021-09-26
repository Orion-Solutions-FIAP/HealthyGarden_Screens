import React, {useState} from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import {
  Button,
  Input
 } from 'react-native-elements'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LeafIcon from '../elements/LeafMenuIcon';

import Styles from '../elements/Styles';

const Stack = createNativeStackNavigator()

const Login = (props) => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    const validate = () => {
      
      return true
    }

    return (

      <ScrollView style={Styles.loginContainer}>
        
        <SafeAreaView>
          
          <View style={Styles.loginIcon}>
            <LeafIcon/>
          </View>
          
          <Input 
            inputStyle={Styles.loginInput}
            label="Email" 
            labelStyle={Styles.loginLabel} 
          />

          <View>
            <Input
              containerStyle={Styles.loginInputPass}
              inputStyle={Styles.loginInput}
              label="Senha" 
              labelStyle={Styles.loginLabel} 
              secureTextEntry={true} 
            />

            <TouchableOpacity 
              onPress={() => {props.navigation.navigate("password")}}
              style={Styles.loginForgotPass}>
                
              <Text style={Styles.loginForgotPassText}>
                Esqueci minha senha
              </Text>
            
            </TouchableOpacity>
          </View>

          <Button 
            buttonStyle={Styles.loginButton} 
            onPress={() => props.navigation.navigate("createGarden")}
            title="Login" 
            titleStyle={Styles.loginButtonTitle} 
            type="outline" 
          />

          <TouchableOpacity 
            onPress={() => props.navigation.navigate("createGarden")}
            style={Styles.loginMicrosoftButton}>
            
            <Image 
              source={require('../../src/image/icon_microsoft.png')}
              style={Styles.loginIconMicrosoft} 
            />
            
            <Text style={Styles.loginButtonTitle}>
              Login with Microsoft 
            </Text>
          </TouchableOpacity>

        </SafeAreaView>
      
      </ScrollView>     
    )
  }

export default Login