import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Contact = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text>Contact</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>goto Home Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Contact