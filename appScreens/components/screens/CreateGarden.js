import React, {useState} from 'react'
import {
  Alert,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native'

import {
  Button,
  Input
 } from 'react-native-elements'

import LeafIcon from '../elements/LeafMenuIcon';
import { postGarden } from '../services/GardenServices';
import Styles from '../elements/Styles';

const CreateGarden = (props) => {

    const [gardenName, setGardenName] = useState('')
    const [gardenDescription, setGardenDescription] = useState('')
    
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
        postGarden(gardenName, gardenDescription)
          .then(() => {
            Alert.alert("Sucesso", "Horta cadastrada com sucesso")          
            props.navigation.navigate("principal")
          })
          .catch((err) => {
            console.log(err)
            Alert.alert('Erro', "Não foi possível cadastrar a horta" + err)
          })
      }
    }

    return (
      <ScrollView style={Styles.createGardenContainer}>

        <SafeAreaView>

          <View style={Styles.createGardenIcon}>
            <LeafIcon />
          </View>

          <Input 
            inputStyle={Styles.createGardenInput}
            label="Garden's name" 
            labelStyle={Styles.createGardenLabel} 
            onChangeText={(value) => setGardenName(value)}
          />
            
          <Input 
            inputStyle={Styles.createGardenInput}
            label="Description" 
            labelStyle={Styles.createGardenLabel} 
            multiline={true} 
            numberOfLines={7} 
            onChangeText={(value) => setGardenDescription(value)}
          />

          <Button 
            buttonStyle={Styles.createGardenButton}
            onPress={() => registerGarden()}
            title="Create Garden" 
            titleStyle={Styles.createGardenButtonTitle} 
            type="outline" 
          />
            <Button 
            buttonStyle={Styles.createGardenButton}
            onPress={() => props.navigation.navigate("principal")}
            title="Create Garden" 
            titleStyle={Styles.createGardenButtonTitle} 
            type="outline" 
          />

        </SafeAreaView>
      
      </ScrollView>     
    )
  }

export default CreateGarden