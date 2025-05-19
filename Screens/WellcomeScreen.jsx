import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyButton from '../Components/Button/Button';
import { useNavigation } from '@react-navigation/native'
const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Illustration */}
            <Image
                height='100%' width='100%'
                source={require('../Components/Images/newLogohome.png')}
                style={styles.image}
                resizeMode="contain"
            />

            {/* Text */}
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subtitle}>
                Welcome To Little Drop, where you manage your daily tasks
            </Text>

            {/* Buttons */}

            <MyButton
                onPress={() => navigation.navigate('LoginScreen')}
                title="Login"
                style={styles.signUpButton}
                textStyle={{ fontWeight: '600', color: '#514EB6' }}
            />
            <MyButton
                onPress={() => navigation.navigate('SignupScreen')}
                title="Signup"
                style={styles.signUpButton}
                textStyle={{ fontWeight: '600', color: '#514EB6' }}
            />


            {/* Social Icons */}
            <Text style={styles.socialText}>Sign up using</Text>
            <View style={styles.socialIcons}>
                <Icon name="facebook" size={24} color="#3b5998" style={styles.icon} />
                <Icon name="google" size={24} color="#db4437" style={styles.icon} />
                <Icon name="linkedin" size={24} color="#0077b5" style={styles.icon} />
            </View>
        </View>
    );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        // width: '100%',
        height: 250,
        marginBottom: 5,
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: 'black',
        marginTop: 20,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 14,
        color: 'gray',
        marginBottom: 30,
        marginTop: 10,
    },
    signUpButton: {
        width: '80%',
        marginVertical: 8,
        borderColor: '#009944',
        borderWidth: 2,
        borderRadius: 18,
        paddingVertical: 10,
        alignItems: 'center',
    },
    socialText: {
        marginTop: 10,
        fontSize: 14,
        color: '009944',
    },
    socialIcons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    icon: {
        marginHorizontal: 10,
    },
});

