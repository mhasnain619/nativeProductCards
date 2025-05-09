import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleSubmitData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/login', data)
            console.log(res.data);
            Alert.alert('login sucessfully')
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            Alert.alert("Invalid email or password.");
        }

    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        height='100%' width='100%'
                        source={require('../Components/Images/loginImg.png')} // Replace with your illustration
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.loginText}>Login</Text>
                    <TextInput
                        label="Name"
                        mode="outlined"
                        style={styles.input}
                        value={data.name}
                        onChangeText={(text) => setData({ ...data, name: text })}
                    />

                    <TextInput
                        label="Email"
                        mode="outlined"
                        style={styles.input}
                        keyboardType="email-address"
                        value={data.email}
                        onChangeText={(text) => setData({ ...data, email: text })}
                    />

                    <TextInput
                        label="Password"
                        mode="outlined"
                        secureTextEntry
                        style={styles.input}
                        value={data.password}
                        onChangeText={(text) => setData({ ...data, password: text })}
                    />

                    <Text style={styles.forgotPassword}>Forgot password?</Text>

                    <Button
                        onPress={handleSubmitData}
                        mode="contained"
                        style={styles.button}
                        contentStyle={{ paddingVertical: 6 }}
                    >
                        Login
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        paddingVertical: 30,
        paddingHorizontal: 25,
        width: '100%',
        alignItems: 'center',
    },
    image: {
        height: 260,
        marginBottom: 20,
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 15,
    },
    forgotPassword: {
        alignSelf: 'flex-start',
        color: '#999',
        marginVertical: 10,
        fontSize: 12,
    },
    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        borderRadius: 25,
        width: '40%',
        backgroundColor: '#4B47F5',
    },
});
