import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const SignupScreen = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    console.log(userData);

    const handleSubmitData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signup', userData);
            console.log(response.data);
            Alert.alert('User Created Successfully');
            console.log(userData.name, userData.email, userData.password, userData.confirmpassword);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Signup failed. Please try again.');
        }
    };
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
                        value={userData.name}
                        onChangeText={(text) => setUserData({ ...userData, name: text })}
                    />

                    <TextInput
                        label="Email"
                        mode="outlined"
                        style={styles.input}
                        keyboardType="email-address"
                        value={userData.email}
                        onChangeText={(text) => setUserData({ ...userData, email: text })}
                    />

                    <TextInput
                        label="Password"
                        mode="outlined"
                        secureTextEntry
                        style={styles.input}
                        value={userData.password}
                        onChangeText={(text) => setUserData({ ...userData, password: text })}
                    />
                    <TextInput
                        label="Confirm Password"
                        mode="outlined"
                        secureTextEntry
                        style={styles.input}
                        value={userData.confirmpassword}
                        onChangeText={(text) => setUserData({ ...userData, confirmpassword: text })} />

                    <Text style={styles.forgotPassword}>Already have an account.</Text>

                    <Button
                        mode="contained"
                        style={styles.button}
                        contentStyle={{ paddingVertical: 6 }}
                        onPress={handleSubmitData}
                    >
                        Sign Up
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
}
export default SignupScreen

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
        height: 190,
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
