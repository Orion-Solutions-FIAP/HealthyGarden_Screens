import React from 'react'
import {
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

const data = {
    temperature:[
        {x:"23/11",y:24},
        {x:"24/11",y:26},
        {x:"25/11",y:20},
        {x:"26/11",y:25},
        {x:"27/11",y:19},
        {x:"28/11",y:28},
        {x:"29/11",y:30}
    ],
    moisture:[
        {x:"23/11",y:60},
        {x:"23/11",y:30},
        {x:"23/11",y:80},
        {x:"23/11",y:12},
        {x:"23/11",y:45},
        {x:"23/11",y:90},
        {x:"23/11",y:32}
    ]
}

const Historic = () => {
    
    return (
        <SafeAreaView style={Styles.principalContainer}>

            <View style={Styles.homeUpView}>
                <Header 
                    backgroundColor='#08B662' 
                    leftComponent={<LeafMenuIcon/>}
                />
                <VictoryContainer style={{marginTop:40}}>
                    <VictoryChart domain={{y:[0,100]}}>
                        <VictoryAxis style={{tickLabels:{fill:'#FEFEFE', fontWeight:'bolder'}}}/>
                        <VictoryAxis dependentAxis style={{tickLabels:{fill:'#FEFEFE', fontWeight:'bolder'}}}/>
                        <VictoryGroup offset={10} >
                            <VictoryBar 
                                data={data.temperature}
                                style={{
                                    data: {
                                        fill: 'orange'
                                    }
                                }}/>
                            <VictoryBar 
                                data={data.moisture}
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
                                    name: 'Temperatura',
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