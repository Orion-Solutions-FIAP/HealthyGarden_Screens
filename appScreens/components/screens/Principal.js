import React, {useState} from 'react'

import {
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native'

import {
  Button,
  Header
} from 'react-native-elements'

import DropIcon from '../elements/DropIcon'
import LeafMenuIcon from '../elements/LeafMenuIcon'
import MQTT from 'sp-react-native-mqtt'
import PlantIcon from '../elements/PlantIcon'
import StatusCard from '../elements/StatusCard'
import Styles from '../elements/Styles'
import ThermometerIcon from '../elements/ThermometerIcon'

const client = MQTT.createClient({
  uri: 'ws://ioticos.org:1883',
  clientId: 'client1239845y29qdc',
  auth: true,
  user:'24iFJYlSQfP4y2A',
  pass:'2uQJJ3JTE4BAbYA'
})

const Principal = () => {
  
  const [temperature, setTemperature] = useState(0)
  const [humidity, setHumidity] = useState(0)

  
  client.then(function(client) {
    client.on('message', function(msg) {
      let obj = JSON.parse(msg.data)
      console.log(obj)

      if(obj[1] == "temp") setTemperature(obj[0])
      if(obj[1] == "humidity") setHumidity(obj[0])

      //setTemperature(obj["temperature"])
      //setHumidity(obj["humidity"])
    });
  
    client.on('connect', function() {
      console.log('connected');
      client.subscribe('11FkGoi1g8h6cP8/temp/', 0);
      client.subscribe('11FkGoi1g8h6cP8/humidity/', 0);
    });
  
    client.connect();
  })

  return(
    <ScrollView style={Styles.principalContainer}>
      <SafeAreaView>
        <Header 
          backgroundColor='#08B662' 
          leftComponent={<LeafMenuIcon/>}
        />
        
        <Text style={Styles.principalTitle}>Jardim</Text>
        
        <StatusCard 
          componentIcon={<PlantIcon/>}
          containerColor='#4A9F2C' 
          statusText='Sua horta está:' 
          textSize = {16} 
        />

        <StatusCard 
          componentIcon={<DropIcon/>}
          containerColor='#2C6F9F' 
          statusText={humidity+"%"}  
          textSize = {24} 
        />
        
        <StatusCard 
          componentIcon={<ThermometerIcon/>}
          containerColor='#9F712C' 
          statusText={temperature} 
          textSize = {24} 
        />
        
        <View style={Styles.principalViewButtons}>
        
          <Button 
            buttonStyle={Styles.principalButton} 
            containerStyle={Styles.principalButtonContainer}
            onPress={() => {client.then(function(client){client.publish('11FkGoi1g8h6cP8/solenoid/', "0", 0, false);})}} 
            title='Abre'
          /> 
          <Button 
            buttonStyle={Styles.principalButton} 
            containerStyle={Styles.principalButtonContainer}
            onPress={() => {client.then(function(client){client.publish('11FkGoi1g8h6cP8/solenoid/', "1", 0, false);})}} 
            title='Fecha' 
          />
        </View>
      </SafeAreaView>
    </ScrollView>
    
  )
}

export default Principal