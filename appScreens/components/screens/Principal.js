import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Header,
  Button
} from 'react-native-elements'
import StatusCard from '../elements/StatusCard'
import LeafMenuIcon from '../elements/LeafMenuIcon'
import DropIcon from '../elements/DropIcon'
import PlantIcon from '../elements/PlantIcon'
import ThermometerIcon from '../elements/ThermometerIcon'
import MQTT from 'sp-react-native-mqtt';

const client = MQTT.createClient({
  uri: 'ws://ioticos.org:1883',
  clientId: 'client1239845y29qdc',
  auth: true,
  user:'24iFJYlSQfP4y2A',
  pass:'2uQJJ3JTE4BAbYA'
})

const Principal = () => {
  
  let [temperature, setTemperature] = useState(0)
  let [humidity, setHumidity] = useState(0)

  
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
    <SafeAreaView style={styles.container}>
      <Header backgroundColor='#08B662' leftComponent={<LeafMenuIcon/>}/>
      <Text style={styles.title}>Jardim</Text>
      <StatusCard containerColor='#4A9F2C' textSize = {16} statusText='Sua horta está:' componentIcon={<PlantIcon/>}/>
      <StatusCard containerColor='#2C6F9F' textSize = {24} statusText={humidity+"%"}  componentIcon={<DropIcon/>}/>
      <StatusCard containerColor='#9F712C' textSize = {24} statusText={temperature} componentIcon={<ThermometerIcon/>}/>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Button title='Abre' buttonStyle={styles.buttonStyle} containerStyle={styles.buttonContainer}
          onPress={() => {client.then(function(client){client.publish('11FkGoi1g8h6cP8/solenoid/', "0", 0, false);})}} />
        <Button title='Fecha' buttonStyle={styles.buttonStyle} containerStyle={styles.buttonContainer}
          onPress={() => {client.then(function(client){client.publish('11FkGoi1g8h6cP8/solenoid/', "1", 0, false);})}} />
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#08B662'
    },
  
    title:{
      marginTop: 32,
      textAlign: 'center',
      color: '#FEFEFE',
      fontSize: 36
    },
  
    buttonContainer:{
      width: 80, 
      margin: 40
    },
  
    buttonStyle:{
      backgroundColor:'#09894C', 
      borderStyle:'solid', 
      borderColor:'#FEFEFE', 
      borderWidth:1
    }
  })

export default Principal