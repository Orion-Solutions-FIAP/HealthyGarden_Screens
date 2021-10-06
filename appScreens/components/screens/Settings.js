import React, {useState, useEffect} from 'react'

import {
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

const Settings = () => {

    const[change, setChange] = useState(true)
    
    const[name, setName] = useState('')
    const[gardenName, setGardenName] = useState('')
    const[gardenDescription, setGardenDescription] = useState('')
    const[minTemp, setMinTemp] = useState(0)
    const[maxTemp, setMaxTemp] = useState(0)
    const[minHum, setMinHum] = useState(0)
    const[maxHum, setMaxHum] = useState(0)

    useEffect(() => {
      
    })

    return(
      <ScrollView>

        <SafeAreaView style={Styles.settingsContainer} >
          
          <View>
          
            <Switch 
              color="green" 
              onValueChange={()=> setChange(!change)} 
              value={change} 
            />
            
            <Input 
              inputContainerStyle={Styles.settingsInputContainer}
              label='Nome'
              labelStyle={Styles.settingsLabel}
              onChangeText={(txt) => setName(txt)}
              placeholder='Nome'
              value={name}
            />
    
            <Input 
              inputContainerStyle={Styles.settingsInputContainer}
              label='Nome da Horta' 
              labelStyle={Styles.settingsLabel} 
              onChangeText={(txt) => setGardenName(txt)}
              placeholder='Nome da Horta'
              value={gardenName}
            />
    
            <Input 
              inputContainerStyle={Styles.settingsInputContainerDescription}
              inputStyle={Styles.settingsInputDescription}
              label='Descrição'
              labelStyle={Styles.settingsLabel}  
              maxLength={200}
              multiline={true} 
              onChangeText={(txt) => setGardenDescription(txt)}
              placeholder='Descrição'
              value={gardenDescription} 
            /> 
    
          </View>
          
          <View style={Styles.settingsViewInputs}>
          
            <View style={Styles.settingsInputsTemp}>
              
              <InputMinMax
                onChangeText={(txt) => setMinTemp(txt)} 
                placeholder='°C' 
                title='Temp. Min' 
                value={minTemp} 
              />
              
              <InputMinMax 
                onChangeText={(txt) => setMaxTemp(txt)}
                placeholder='°C' 
                title='Temp. Máx' 
                value={maxTemp}
              />

            </View>
          
            <View style={Styles.settingsInputsUmd}>
              <InputMinMax 
                onChangeText={(txt) => setMinHum(txt)}
                placeholder='%' 
                title='Umd. Min' 
                value={minHum}
              />
              <InputMinMax 
                onChangeText={(txt) => setMaxHum(txt)}
                placeholder='%' 
                title='Umd. Máx' 
                value={maxHum}
              />
            </View>

          </View>
          
          <View style={Styles.settingsViewButton}>
            <Button 
              buttonStyle={Styles.settingsButton}  
              title='Salvar'
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