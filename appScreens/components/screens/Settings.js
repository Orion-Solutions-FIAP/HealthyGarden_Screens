import React, {useState, useEffect} from 'react'

import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text, 
  View
} from 'react-native'

import {
  Button, 
  Input, 
  Switch
} from 'react-native-elements'

import InputMinMax from '../elements/InputMinMax'

import Styles from '../elements/Styles'

import { getSetting, putSetting } from '../services/SettingServices'
import { getGardenByIdUser, putGarden} from '../services/GardenServices'
import { getUser, putUser } from '../services/UserServices'
import { getUserId } from '../database/DB'
import { PROPERTY_TYPES, stringLiteral } from '@babel/types'
import { useLinkProps } from '@react-navigation/native'

const Settings = (props) => {
    
    const[user, setUser] = useState({})
    const[garden, setGarden] = useState({})
    const[setting, setSetting] = useState({})

    useEffect(() => {
      getUserId((error, success) => {
        if( !error && success && success.trim().length > 0 ) {
          const id = JSON.parse(success)
          getUser(id)
            .then((response) => {
              setUser(() => response.data)
              getGardenByIdUser(id)
                .then((response) => {
                  setGarden(() => response.data)
                  getSetting(response.data.id)
                    .then((response) => {
                      setSetting(() => response.data)
                    })
                    .catch((error) => {
                      Alert.alert("Error", "Ocorreu um erro ao achar as configurações")
                    })
                })
                .catch((error) => {
                  Alert.alert("Erro", "Ocorreu um erro ao achar a horta!")
                })
            })
            .catch((error) => {
              Alert.alert("Erro", "Ocorreu um erro ao achar o usuário!")
            })
        }
      })
    },[])

    return(
      <ScrollView>

        <SafeAreaView style={Styles.settingsContainer} >
          
          <View>
          
            <Switch 
              color="green" 
              onValueChange={()=> setSetting(prevState => ({...prevState, isAutomatic: !setting.isAutomatic}))} 
              value={setting.isAutomatic} 
            />
            
            <Input 
              inputContainerStyle={Styles.settingsInputContainer}
              label='Nome'
              labelStyle={Styles.settingsLabel}
              onChangeText={(txt) => setUser(prevState => ({...prevState, name:txt}))}
              placeholder='Nome'
              value={user.name}
            />
    
            <Input 
              inputContainerStyle={Styles.settingsInputContainer}
              label='Nome da Horta' 
              labelStyle={Styles.settingsLabel} 
              onChangeText={(txt) => setGarden(prevState => ({...prevState,name:txt}))}
              placeholder='Nome da Horta'
              value={garden.name}
            />
    
            <Input 
              inputContainerStyle={Styles.settingsInputContainerDescription}
              inputStyle={Styles.settingsInputDescription}
              label='Descrição'
              labelStyle={Styles.settingsLabel}  
              maxLength={200}
              multiline={true} 
              onChangeText={(txt) => setGarden(prevState => ({...prevState, description:txt}))}
              placeholder='Descrição'
              value={garden.description} 
            /> 
    
          </View>
          
          <View style={Styles.settingsViewInputs}>
          
            <View style={Styles.settingsInputsTemp}>
              
              <InputMinMax
                onChangeText={(txt) => {
                  if(!Number.isNaN(parseInt(txt))){
                    setSetting(prevState => ({...prevState,minimumTemperature: parseInt(txt)}))
                  } else {
                    setSetting(prevState => ({...prevState, minimumTemperature: 0}))
                  }
                }}
                placeholder='°C' 
                title='Temp. Min' 
                value={String(setting.minimumTemperature)} 
              />
              
              <InputMinMax 
                onChangeText={(txt) => {
                  if(!Number.isNaN(parseInt(txt))){
                    setSetting(prevState => ({...prevState,maximumTemperature: parseInt(txt)}))
                  } else {
                    setSetting(prevState => ({...prevState, maximumTemperature: 0}))
                  }
                }}  
                placeholder='°C' 
                title='Temp. Máx' 
                value={String(setting.maximumTemperature)}
              />

            </View>
          
            <View style={Styles.settingsInputsUmd}>
              <InputMinMax 
                onChangeText={(txt) => {
                  if(!Number.isNaN(parseInt(txt))){
                    setSetting(prevState => ({...prevState,minimumMoisture: parseInt(txt)}))
                  } else {
                    setSetting(prevState => ({...prevState, minimumMoisture: 0}))
                  }
                }} 
                placeholder='%' 
                title='Umd. Min' 
                value={String(setting.minimumMoisture)}
              />
              <InputMinMax 
                onChangeText={(txt) => {
                  if(!Number.isNaN(parseInt(txt))){
                    setSetting(prevState => ({...prevState,maximumMoisture: parseInt(txt)}))
                  } else {
                    setSetting(prevState => ({...prevState, maximumMoisture: 0}))
                  }
                }} 
                placeholder='%' 
                title='Umd. Máx' 
                value={String(setting.maximumMoisture)}
              />
            </View>

          </View>
          
          <View style={Styles.settingsViewButton}>
            <Button 
              buttonStyle={Styles.settingsButton}  
              title='Salvar'
              onPress={() => {
                putSetting(setting.gardenId, setting.isAutomatic, setting.minimumMoisture, setting.maximumMoisture, setting.minimumTemperature, setting.maximumTemperature)
                  .then(() => {
                    putGarden(garden.id, garden.userId, garden.moistureStatus, garden.temperatureStatus, garden.name, garden.description)
                      .then(() => {
                        putUser(user.id, user.name, user.email, user.password, user.salt)
                          .then(() => {
                            props.navigation.reset({
                              index : 0,
                              routes : [{
                                  name: 'principal'
                              }]
                            })
                          })
                          .catch((error) => {
                            console.log(error)
                            Alert.alert("Erro", "Erro ao atualizar o usuário")
                          })
                      })
                      .catch((error) => {
                        Alert.alert("Error", "Erro ao atualizar a horta")
                      })
                  })
                  .catch((error) => {
                    Alert.alert("Erro", "Erro ao atualizar as configurações")
                  })
              }}
            />
            <Text style={Styles.settinsCopyright}>
              {'\u00A9'} 2020-2021 OrionSolutions, Inc.
            </Text>
          </View>
        
        </SafeAreaView>

      </ScrollView>
    )
}


export default Settings