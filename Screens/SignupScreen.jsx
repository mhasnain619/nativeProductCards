import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Alert, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const SignupScreen = () => {
    const navigation = useNavigation();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: '',
    });

    const handleSubmitData = async () => {
        console.log('Button clicked');
        console.log(userData.name, userData.email, userData.password, userData.confirmpassword);


        // Validation
        if (!userData.name || !userData.email || !userData.password || !userData.confirmpassword) {
            Alert.alert('Error', 'All fields are required.');
            return;
        }

        if (userData.password !== userData.confirmpassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://192.168.35.230/has/api/signup', userData);
            console.log(response.data);
            Alert.alert('Success', 'User Created Successfully', [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate('LoginScreen'),
                },
            ]);
        } catch (err) {
            console.error(err);
            Alert.alert('Error', 'Failed to create user. Please try again.');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        source={require('../Components/Images/newLogo.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.loginText}>Create an account</Text>
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
                        label="Phone"
                        mode="outlined"
                        style={styles.input}
                        keyboardType="number"
                        value={userData.phone}
                        onChangeText={(text) => setUserData({ ...userData, phone: text })}
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
                        onChangeText={(text) => setUserData({ ...userData, confirmpassword: text })}
                    />
                    <Text
                        onPress={() => navigation.navigate('LoginScreen')}
                        style={styles.forgotPassword}
                    >
                        Already have an account?
                    </Text>
                    <Button
                        mode="contained"
                        style={styles.button}
                        contentStyle={{ paddingVertical: 6 }}
                        onPress={handleSubmitData}
                    >
                        Sign Up
                    </Button>
                    <Text style={styles.orcontine}>-------- or continue with -------</Text>
                    <TouchableOpacity style={styles.loginwith} >
                        <Text style={styles.loginwithText}> Login with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignupScreen;

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
        paddingVertical: 15
    },
    orcontine: {
        marginVertical: '20'
    }
});