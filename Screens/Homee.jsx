import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CardTwo from '../Components/Card/Cart'
import MyProducts from './Home'

const Homee = () => {
    const navigation = useNavigation()
    return (
        <View>
            <MyProducts />
        </View>
    )
}

export default Homee