import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginScreen() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
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
                    onPress={() => { }}
                    style={styles.button}
                    contentStyle={{ paddingVertical: 6 }}
                >
                    Sign Up
                </Button>
            </View>
        </View>
    );
}

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
        height: 150,
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
        alignSelf: 'flex-end',
        color: '#999',
        marginBottom: 20,
        fontSize: 12,
    },
    button: {
        alignItems: 'center',
        borderRadius: 25,
        width: '40%',
        backgroundColor: '#4B47F5',
    },
});
