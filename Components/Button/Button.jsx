// Components/MyButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';

const MyButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        padding: 20,
        borderRadius: 10,
        // marginTop: 20,
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default MyButton;
