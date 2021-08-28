import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Principal from '../screens/Principal';
import Settings from '../screens/Settings';
import Password from '../screens/Password';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
        <Tab.Navigator screenOptions={({route})=>({tabBarActiveTintColor: '#000', tabBarInactiveTintColor:'#FEFEFE',tabBarStyle:{backgroundColor:'#08B662'},tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
                case 'Home':
                    iconName = 'home';
                    break;
                case 'Histórico':
                    iconName = 'book-open';
                    break;
                case 'Configuração':
                    iconName = 'settings';
                    break;
                case 'Sair':
                    iconName = 'log-out';
                    break;
                default:
                    iconName = 'circle';
                    break;
            }

            return <Icon name={iconName} size={size} color={color} />;
        }})}>
            <Tab.Screen name="Home" component={Principal} options={{title:'Home',tabBarBadgeStyle:{color:'#FEFEFE'}}} option={{headerShown: false}}/>
            <Tab.Screen name="Histórico" component={Password} />
            <Tab.Screen name="Configuração" component={Settings} />
            <Tab.Screen name="Sair" component={Home} />
        </Tab.Navigator>
  );
}

export default MyTabs