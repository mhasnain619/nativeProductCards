import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Screens/Home';
import Browse from '../Screens/Browse';
import Orders from '../Screens/Orders';
import Cart from '../Components/Card/Cart';
import Account from '../Screens/Account';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home-outline';
                            break;
                        case 'Browse':
                            iconName = 'search-outline';
                            break;
                        case 'Cart':
                            iconName = 'cart-outline';
                            break;
                        case 'Orders':
                            iconName = 'receipt-outline';
                            break;
                        case 'Account':
                            iconName = 'person-outline';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: true,
                    headerTitle: 'Find your flavour',
                    headerStyle: {
                        backgroundColor: '#e2e2e2',
                    },
                    headerShadowVisible: false,
                }}
            />
            <Tab.Screen name='Browse' component={Browse} />
            <Tab.Screen name='Cart' component={Cart} />
            <Tab.Screen name='Orders' component={Orders} />
            <Tab.Screen name='Account' component={Account} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
