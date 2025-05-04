import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { launchCamera } from 'react-native-image-picker';

const Image_picker = () => {
    const openCamera = async () => {
        const result = await launchCamera({
            includeBase64: true
        })
        console.log(result);

    }
    return (
        <View>
            <TouchableOpacity onPress={openCamera} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginVertical: 30, padding: 15, backgroundColor: 'green', color: 'white' }}>Open Camera</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Image_picker