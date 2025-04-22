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
        padding: 10,
        marginTop: 10, borderRadius: 10,
        width: 90
        // marginTop: 20,
    },
    text: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
    },
});

export default MyButton;
