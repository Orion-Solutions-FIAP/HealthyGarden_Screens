import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Principal from '../screens/Principal';
import Settings from '../screens/Settings';
import Password from '../screens/Password';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#000', tabBarInactiveTintColor:'#FEFEFE',tabBarStyle:{backgroundColor:'#08B662'}}}>
            <Tab.Screen name="Home" component={Principal} options={{title:'Home',tabBarBadgeStyle:{color:'#FEFEFE'}}}/>
            <Tab.Screen name="Histórico" component={Password} />
            <Tab.Screen name="Configuração" component={Settings} />
            <Tab.Screen name="Sair" component={Home} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs