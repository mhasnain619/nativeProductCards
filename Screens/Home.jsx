import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                <Text>goto contact  Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home