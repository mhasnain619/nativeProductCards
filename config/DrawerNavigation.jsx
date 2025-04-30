import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import MyProducts from '../Screens/MyProducts';
import Contact from '../Screens/Contact';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='Products' component={MyProducts} />
                <Drawer.Screen name='Contact' component={Contact} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation