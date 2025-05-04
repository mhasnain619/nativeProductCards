import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import MyProducts from '../Screens/MyProducts';
import Contact from '../Screens/Contact';
import Image_picker from '../Components/Image/Image_picker';
import CardTwo from '../Components/Card/Card';
import Login from '../Components/Access/Login';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='Products' component={MyProducts} />
                <Drawer.Screen name='Contact' component={Contact} />
                <Drawer.Screen name='Image' component={Image_picker} />
                <Drawer.Screen name='Card' component={CardTwo} />
                <Drawer.Screen name='Login' component={Login} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation