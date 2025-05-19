import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Contact from '../Screens/Contact'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../Screens/LoginScreen'
import WelcomeScreen from '../Screens/WellcomeScreen'
import SignupScreen from '../Screens/SignupScreen'
import Checkout from '../Screens/CheckOut'
import TabNavigation from './TabNavigation'
import ForgotPassword from '../Screens/ForgotPassword'
import ThankYouBox from '../Screens/ThankyouBox'
import Home from '../Screens/Home'
import Pasta from '../Screens/Pasta'
import Dessert from '../Screens/Dessert'

const Stack = createNativeStackNavigator()
const NavigationReact = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen options={{ headerShown: false }} name='WelcomeScreen' component={WelcomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name='LoginScreen' component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name='SignupScreen' component={SignupScreen} />
                <Stack.Screen options={{ headerShown: false }} name='TabNavigation' component={TabNavigation} />
                <Stack.Screen options={{ headerShown: false }} name='CheckOut' component={Checkout} />
                <Stack.Screen options={{ headerShown: false }} name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen options={{ headerShown: false }} name='ThankYouBox' component={ThankYouBox} />
                <Stack.Screen options={{ headerShown: false }} name='Pasta' component={Pasta} />
                <Stack.Screen options={{ headerShown: false }} name='Dessert' component={Dessert} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationReact