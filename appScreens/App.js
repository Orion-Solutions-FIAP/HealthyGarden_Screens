import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native'

const Stack = createNativeStackNavigator()

const Home = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Text>Jardim</Text>
    </SafeAreaView>
  )
}

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#08B662'
  }
})

export default App