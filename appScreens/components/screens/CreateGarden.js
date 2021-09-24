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


import LeafIcon from '../elements/LeafMenuIcon';
import { postGarden } from '../services/GardenServices';

const CreateGarden = (props) => {

    let [gardenName, setGardenName] = useState('')
    let [gardenDescription, setGardenDescription] = useState('')
    
    const validate = () => {
      if(gardenName.trim().length < 5){
        Alert.alert('Erro', 'O nome precisa ter no mínimo 5 caractéres') // =================== VERIFICAR NO BANCO DE DADOS
        return false
      }

      if(gardenDescription.trim().length < 10){
        Alert.alert('Erro', 'A descrição precisa ter pelo menos 10 caractéres') // =================== VERIFICAR NO BANCO DE DADOS
        return false
      }

      return true
    }

    const registerGarden = () => {
      if(validate()){
        postGarden(gardenName, gardenDescription, 1)
          .then(() => {
            Alert.alert("Sucesso", "Horta cadastrada com sucesso")          
            props.navigation.navigate("principal")
          })
          .catch(() => {
            Alert.alert('Erro', "Não foi possível cadastrar a horta")
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
              registerGarden()
            }}/>
            <Button 
            type="outline" 
            title="Create Garden" 
            titleStyle={styles.titleStyle} 
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              props.navigation.navigate("principal")
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