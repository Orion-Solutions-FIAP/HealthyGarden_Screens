import React from 'react'

import {
  SafeAreaView, StyleSheet, Text, View
} from 'react-native'

import {
  Button
} from 'react-native-elements'

import LeafIcon from '../elements/LeafMenuIcon'

const Home = (props) => {
  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.upView} >

        <LeafIcon/>

        <Text style={styles.text1}>Olá, Seja Bem vindo!!</Text>

        <Text style={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>

      </View>

      <View style={styles.downView}>
        <Button type="outline"  onPress={() => { props.navigation.navigate('register') }} buttonStyle={{ borderColor: "#FFF", width: 150, height: 55}}   titleStyle={{color:"#FFF"}} title='Register here' />

        <Button type="outline" onPress={() => { props.navigation.navigate('login') }} buttonStyle={{ borderColor: "#FFF", width: 150, height: 55, backgroundColor: '#0B6F3F'}} titleStyle={{color:"#FFF"}}  title='Login' />
      </View>
      <Text style={{alignSelf: 'center', color: '#FFF'}} >{'\u00A9'} 2020-2021 OrionSolutions, Inc.</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: '#09894C',
      flex: 1,
      flexDirection: 'column',
      padding: 16
    },
    downView : {
      flex: 1,
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    upView : {
      alignSelf: 'center',
      flex: 2,
      flexDirection: 'column'
    },
    text1 : {
      color : "#FFF",
      fontSize : 30,
      paddingTop: 30
    },
    text2 : {
      color : "#FFF",
      fontSize : 25,
      paddingTop: 30
    }
  })

  export default Home