import React from 'react'

import {
  SafeAreaView, 
  Text, 
  View
} from 'react-native'

import {
  Button
} from 'react-native-elements'

import LeafIcon from '../elements/LeafMenuIcon'
import Styles from '../elements/Styles'

const Home = (props) => {
  return(
    <SafeAreaView style={Styles.homeContainter}>

      <View style={Styles.homeUpView} > 

        <LeafIcon/>

        <Text style={Styles.homeWelcome}>
          Olá, Seja Bem vindo!!
        </Text>

        <Text style={Styles.homeDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </Text>

      </View>

      <View style={Styles.homeDownView}>
        <Button 
          buttonStyle={Styles.homeButtonRegister}   
          onPress={() => props.navigation.navigate('register') } 
          title='Register here' 
          titleStyle={Styles.homeButtonTitle} 
          type="outline"  
        />

        <Button 
          buttonStyle={Styles.homeButtonLogin} 
          onPress={() => props.navigation.navigate('login') } 
          title='Login'
          titleStyle={Styles.homeButtonTitle}  
          type="outline" 
        />
      </View>

      <Text style={Styles.homeCopyright}>
        {'\u00A9'} 2020-2021 OrionSolutions, Inc.
      </Text>
    
    </SafeAreaView>
  )
}

export default Home