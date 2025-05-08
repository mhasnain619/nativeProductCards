import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const SignupScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        height='100%' width='100%'
                        source={require('../Components/Images/loginImg.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.loginText}>Signup</Text>
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

                    <Text style={styles.forgotPassword}>Already have account</Text>

                    <Button
                        mode="contained"
                        style={styles.button}
                        contentStyle={{ paddingVertical: 6 }}
                    >
                        Signup
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
        height: 200,
        marginBottom: 20,
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        paddingVertical: 2,
        borderRadius: 10,
        marginBottom: 15,
    },
    forgotPassword: {
        alignSelf: 'flex-start',
        color: '#999',
        marginBottom: 20,
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
