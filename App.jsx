
import React from 'react'
import NavigationReact from './config/Navigation'
import TabNavigation from './config/TabNavigation'
import DrawerNavigation from './config/DrawerNavigation'
import WelcomeScreen from './Screens/WellcomeScreen'
import LoginScreen from './Screens/LoginScreen'
import Header from './Components/Header/Header'
import { View } from 'react-native'

const App = () => {
  return (
    <>
      <NavigationReact />
      {/* <TabNavigation /> */}
      {/* <DrawerNavigation /> */}
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <View>
        <Header />
      </View> */}
    </>
  )
}

export default App