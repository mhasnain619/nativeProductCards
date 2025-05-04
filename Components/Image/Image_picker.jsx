import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { launchCamera } from 'react-native-image-picker';

const Image_picker = () => {
    const [image, setImage] = useState('')
    const openCamera = async () => {
        const result = await launchCamera({
            includeBase64: true
        })
        if (result) {
            const uri = result.assets[0].uri
            setImage(uri)
            console.log(uri);
        }

    }
    return (
        <View>
            <TouchableOpacity onPress={openCamera} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginVertical: 30, padding: 15, backgroundColor: 'green', color: 'white' }}>Open Camera</Text>
            </TouchableOpacity>
            <View style={{ height: 200, width: 200, justifyContent: 'center', alignItems: 'center' }}>
                {
                    image ? <Image source={{ uri: image }} height='100%' width='100%' /> : null
                }
            </View>
        </View>
    )
}

export default Image_picker