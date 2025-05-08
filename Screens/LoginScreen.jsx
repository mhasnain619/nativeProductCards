import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                        value={name}
                        onChangeText={setName}
                    />

                    <TextInput
                        label="Email"
                        mode="outlined"
                        style={styles.input}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        label="Password"
                        mode="outlined"
                        secureTextEntry
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Text style={styles.forgotPassword}>Forgot password?</Text>

                    <Button
                        mode="contained"
                        style={styles.button}
                        contentStyle={{ paddingVertical: 6 }}
                    >
                        Sign Up
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
