import React from 'react'
import {
  SafeAreaView, StyleSheet, Text, View, ScrollView
} from 'react-native'

import {
  Button, Input, Switch
} from 'react-native-elements'

import InputMinMax from '../elements/InputMinMax'

const Settings = () => {
    return(
      <ScrollView>
        <SafeAreaView style={styles.container} >
          
          <View style={styles.view1}>
          
            <Switch color="green" value={true} />
            
            <Input 
              inputContainerStyle={{ borderColor: '#000'}}
              label='Nome'
              labelStyle={{color: '#000'}}
              placeholder='Nome'
            />
    
            <Input 
              inputContainerStyle={{ borderColor: '#000'}}
              label='Nome da Horta' 
              labelStyle={{color: '#000'}} 
              placeholder='Nome da Horta'
            />
    
            <Input 
              inputContainerStyle={{borderColor: '#000', borderRadius: 10, borderWidth: 1, height:75}}
              inputStyle={{height:85, textAlignVertical: 'top'}}
              label='Descrição'
              labelStyle={{color: '#000'}}  
              maxLength={200}
              multiline={true} 
              placeholder='Descrição'  
            /> 
    
          </View>
          
          <View style={styles.view2}>
          
            <View style={styles.view3}>
              <InputMinMax title='Temp. Min' placeholder='°C' />
              <InputMinMax title='Temp. Máx' placeholder='°C'/>
            </View>
          
            <View style={styles.view4}>
              <InputMinMax title='Umd. Min' placeholder='%'/>
              <InputMinMax title='Umd. Máx' placeholder='%'/>
            </View>
          
            <Button
            buttonStyle={{ borderColor: "#FFF", width: 150, height: 55, alignSelf: 'center', backgroundColor: '#0B6F3F'}} 
            containerStyle={{marginBottom: 30}} 
            title='Save'
            />
          
          </View>
          
          <Text style={styles.copy} >{'\u00A9'} 2020-2021 OrionSolutions, Inc.</Text>
        
        </SafeAreaView>
      </ScrollView>
    )
}


const styles = StyleSheet.create({
    container : {
      flex: 1,
      flexDirection: 'column', 
      padding: 16
    },
    copy : {
      alignSelf: 'center',
      color: '#000'
    },
    view1 : {
      flex: 1
    },
    view2 : {
      flex: 1,
      flexDirection:'column', 
      paddingTop:50
    },
    view3 : {
      flex: 1, 
      flexDirection:'row', 
      justifyContent: 'space-evenly'
    },
    view4 : {
      flex: 2, 
      flexDirection:'row', 
      justifyContent: 'space-evenly'
    } 
})

export default Settings