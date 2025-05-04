import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import MyButton from '../Button/Button';

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: ''
    });
    const getData = () => {
        console.log(userData.email, userData.password, userData.name);
        userData.email.value == '',
            userData.password.value == '',
            userData.name.value == ''
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Enter Email'
                value={userData.email}
                onChangeText={(text) => setUserData({ ...userData, email: text })}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter Password'
                secureTextEntry
                value={userData.password}
                onChangeText={(text) => setUserData({ ...userData, password: text })}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter code'
                keyboardType="numeric"
                value={userData.name}
                onChangeText={(text) => setUserData({ ...userData, name: text })}
            />
            <MyButton onPress={getData} title='Submit' />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    }
});

export default Login;
