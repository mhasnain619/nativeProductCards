import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomeScreen = () => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            {/* Illustration */}
            <Image
                height='100%' width='100%'
                source={require('../Components/Images/home.png')} // Replace with your illustration
                style={styles.image}
                resizeMode="contain"
            />

            {/* Text */}
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subtitle}>
                Welcome To Little Drop, where you manage your daily tasks
            </Text>

            {/* Buttons */}
            <Button mode="outlined" style={styles.signUpButton}>
                Login
            </Button>
            <Button mode="outlined" style={styles.signUpButton}>
                Sign Up
            </Button>

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
        height: 300,
        marginBottom: 5,
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
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
        fontWeight: '600',
        marginVertical: 8,
        color: '#514EB6',
        borderColor: '#514EB6',
        borderWidth: 2
    },
    socialText: {
        marginTop: 10,
        fontSize: 14,
        color: 'gray',
    },
    socialIcons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    icon: {
        marginHorizontal: 10,
    },
});

export default WelcomeScreen;
