import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Contact from '../Screens/Contact'
import MyProducts from '../Screens/MyProducts'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Profile' component={Profile} />
                <Tab.Screen name='Contact' component={Contact} />
                <Tab.Screen name='MyProducts' component={MyProducts} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default TabNavigation