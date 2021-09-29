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
        {x:"seg",y:24},
        {x:"ter",y:26},
        {x:"qua",y:20},
        {x:"qui",y:25},
        {x:"sex",y:19},
        {x:"sab",y:28},
        {x:"dom",y:30}
    ],
    moisture:[
        {x:"seg",y:60},
        {x:"ter",y:30},
        {x:"qua",y:80},
        {x:"qui",y:12},
        {x:"sex",y:45},
        {x:"sab",y:90},
        {x:"dom",y:32}
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