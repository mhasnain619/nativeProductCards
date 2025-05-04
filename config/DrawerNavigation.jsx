import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import MyProducts from '../Screens/MyProducts';
import Contact from '../Screens/Contact';
import Image_picker from '../Components/Image/Image_picker';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='Products' component={MyProducts} />
                <Drawer.Screen name='Contact' component={Contact} />
                <Drawer.Screen name='Image' component={Image_picker} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation