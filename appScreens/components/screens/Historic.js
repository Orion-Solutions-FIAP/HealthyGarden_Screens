import React, {useState, useEffect} from 'react'
import {
    Alert,
    Text,
    SafeAreaView,
    View
} from 'react-native'
import {
    VictoryAxis,
    VictoryChart,
    VictoryGroup,
    VictoryBar,
    VictoryLegend,
    VictoryContainer
} from 'victory-native'
import{
    Header
} from 'react-native-elements'

import LeafMenuIcon from '../elements/LeafMenuIcon'
import Styles from '../elements/Styles'
import { getHistoricByIdGarden } from '../services/HistoricServices'

const Historic = () => {

    const [dados, setDados] = useState([])

    const daysOfWeek = ['Dom', 'Seg','Ter', 'Qua', 'Qui', 'Sex', 'Sab']

    useEffect(() => {
        getHistoricByIdGarden(22)
            .then((response) => {
            setDados(response.data)
            console.log(response.data)
        })
            .catch((error) => {
            Alert.alert("Erro", "Não foi possivel resgatar o histórico")
        })
    }, [])

    
    return (
        <SafeAreaView style={Styles.principalContainer}>
            <View style={Styles.homeUpView}>
                <Header 
                    backgroundColor='#08B662' 
                    leftComponent={<LeafMenuIcon/>}
                />
                <VictoryContainer style={{marginTop:40}}>
                    <VictoryChart domain={{y:[0,100]}}>
                        <VictoryAxis style={{tickLabels:{fill:'#FEFEFE', fontWeight:'bolder'}}} tickFormat={x => (daysOfWeek[new Date(x).getDay()])}/>
                        <VictoryAxis dependentAxis style={{tickLabels:{fill:'#FEFEFE', fontWeight:'bolder'}}}/>
                        <VictoryGroup offset={10} >
                            <VictoryBar 
                                data={dados}
                                x="irrigationDate"
                                y="temperature"
                                style={{
                                    data: {
                                        fill: 'orange'
                                    }
                                }}/>
                            <VictoryBar 
                                data={dados}
                                x="irrigationDate"
                                y="moisture"
                                style={{
                                    data: {
                                        fill: '#2C6F9F'
                                    }
                                }}/>
                        </VictoryGroup>
                        
                        <VictoryLegend
                            style={{
                                labels:{
                                    fill: '#FEFEFE',
                                    fontWeight:'bolder'
                                }
                            }}
                            symbolSpacer={10}
                            gutter={30}
                            orientation= 'horizontal'
                            data={[
                                {
                                    name: 'Temperatura' ,
                                    symbol:{
                                        fill:'orange'
                                    }
                                },
                                {
                                    name:'Umidade',
                                    symbol:{
                                        fill:'#2C6F9F'
                                    }
                                }
                            ]}
                        />
                        
                    </VictoryChart>
                </VictoryContainer>
            </View>

        </SafeAreaView>
    )
}

export default Historic