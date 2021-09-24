import React, {useState} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native'
import {
    Button,
    Input
} from 'react-native-elements'

const Password = (props) => {
    
    let [email,setEmail] = useState("")
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Recuperação de Senha</Text>
            <View style={styles.containerContent}>
                <Text style={styles.textStyle}>Para recuperar a senha, favor informar seu e-mail cadastrado e clicar no botão <Text style={{fontWeight:'bold'}}>'Enviar Email'</Text>, para que sua senha seja enviada!</Text>
                <Input 
                    label="Email" 
                    labelStyle={styles.labelStyle} 
                    inputStyle={styles.inputStyle}
                    value={email}
                    onChangeText={(value) => {
                    setEmail(value);
                }}/>
                
                <Button 
                  title='Enviar Email' 
                  buttonStyle={styles.buttonStyle} 
                  containerStyle={styles.buttonContainer}/>

                <Button 
                  title='Retornar ao Login' 
                  buttonStyle={styles.buttonStyle} 
                  containerStyle={styles.buttonContainer} 
                  onPress={()=>{
                    props.navigation.navigate("login")}}/>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width: 160,
        margin: 28
      },
    
      buttonStyle:{
        backgroundColor:'#09894C', 
        borderStyle:'solid', 
        borderColor:'#FEFEFE', 
        borderWidth:1
      },

      container:{
        flex: 1,
        backgroundColor: '#08B662'
      },

      inputStyle: {
        borderRadius: 16,
        backgroundColor: 'white',
        color: "#000",
      },
    
      labelStyle: {
        fontSize: 20,
        paddingLeft: 10,
        color: "#000"
      },

      containerContent:{
        flexDirection: 'column',
        margin: 28,
        justifyContent: 'center',
        alignItems:'center'
      },

      title:{
          fontSize: 24,
          fontWeight: 'bold',
          marginLeft: 16,
          marginTop:16

      },

      textStyle:{
          marginBottom:28,
          fontSize: 20    

      }
})

export default Password