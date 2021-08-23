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

const CreateGarden = (props) => {

    let [gardenName, setGardenName] = useState('')
    let [gardenDescription, setGardenDescription] = useState('')
    
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <View style={{alignSelf: 'center', paddingBottom: 16}}>
            <LeafIcon />
          </View>

          <Input 
            label="Garden's name" 
            labelStyle={styles.labelStyle} 
            inputStyle={styles.inputStyle}
            onChangeText={(value) => {
                setGardenName(value)
            }}/>
            
          <Input 
            multiline={true} 
            numberOfLines={7} 
            label="Description" 
            labelStyle={styles.labelStyle} 
            inputStyle={styles.inputStyle}
            onChangeText={(value) => {
                setGardenDescription(value)
            }}/>

          <Button 
            type="outline" 
            title="Create Garden" 
            titleStyle={styles.titleStyle} 
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              console.log("faij0fai")
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
      textAlignVertical: 'top'
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
  export default CreateGarden