import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../Screens/Home'
import Contact from '../Screens/Contact'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../Screens/LoginScreen'
import WelcomeScreen from '../Screens/WellcomeScreen'
import SignupScreen from '../Screens/SignupScreen'

const Stack = createNativeStackNavigator()
const NavigationReact = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen options={{ headerShown: false }} name='WelcomeScreen' component={WelcomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name='LoginScreen' component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name='SignupScreen' component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationReact