import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Contact from '../Screens/Contact'
import Card from '../Components/Card/Card'
import MyProducts from '../Screens/MyProducts'
import { NavigationContainer } from '@react-navigation/native'
import CardTwo from '../Components/Card/Card'

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Profile' component={Profile} />
                <Tab.Screen name='Card' component={CardTwo} />
                <Tab.Screen name='MyProducts' component={MyProducts} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default TabNavigation