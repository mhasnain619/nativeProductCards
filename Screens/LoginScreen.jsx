import { Label } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Alert, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput, Button, RadioButton } from 'react-native-paper';


const LoginScreen = () => {
    const navigation = useNavigation();

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [value, setValue] = React.useState('paypal');

    const handleSubmitData = async () => {
        // Direct navigation for now, you can add login logic later
        navigation.replace('TabNavigation');

        // Uncomment and use this for real login later
        // try {
        //     const res = await axios.post('http://localhost:5000/has/api/login', data)
        //     console.log(res.data);
        //     Alert.alert('Login successfully');
        //     navigation.replace('TabNavigation'); // Navigate after success
        // } catch (error) {
        //     console.error("Login Error:", error.response?.data || error.message);
        //     Alert.alert("Invalid email or password.");
        // }
    };
    const handleForgotPassword = () => {
        navigation.replace('ForgotPassword')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        height='100%' width='100%'
                        source={require('../Components/Images/newLogo.png')} // Replace with your illustration
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.loginText}>Login</Text>

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
                    <View style={styles.rowContainer}>
                        <View style={styles.radioRow}>
                            <RadioButton
                                value="paypal"
                                status={value === 'paypal' ? 'checked' : 'unchecked'}
                                onPress={() => setValue('paypal')}
                            />
                            <Text style={styles.radioLabel}>Remember Me</Text>
                        </View>

                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={styles.forgotPassword}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={handleSubmitData} style={styles.login} >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.orcontine}>-------- or continue with -------</Text>
                    <TouchableOpacity style={styles.loginwith} >
                        <Text> Login with Google</Text>
                    </TouchableOpacity>
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
        height: 200,
        marginBottom: 10,
    },
    loginText: {
        color: 'white'
    },

    input: {
        width: '100%',
        marginBottom: 15,
    },

    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        borderRadius: 25,
        width: '100%',
        backgroundColor: '#009944',
    },
    loginwith: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        borderRadius: 25,
        width: '100%',
        borderWidth: 2,
        backgroundColor: '#ffffff',
        borderColor: '#009944',
        paddingVertical: 14
    },
    login: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        borderRadius: 25,
        width: '100%',
        backgroundColor: '#009944',
        paddingVertical: 16
    },
    orcontine: {
        marginVertical: '20'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    radioRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 30
    },
    radioLabel: {
        fontSize: 14,
    },
    forgotPassword: {
        color: '#007BFF',
        textDecorationLine: 'underline',
        fontSize: 14,
    },
});
