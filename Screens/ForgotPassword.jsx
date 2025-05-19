import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const theme = useTheme();

    const handleResetPassword = () => {
        // Add your forgot password logic here
        console.log('Reset link sent to:', email);
        // Optionally show toast or navigate back
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.select({ ios: 'padding', android: undefined })}
        >
            <View style={styles.inner}>
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.subtitle}>Enter your email address and we’ll send you a link to reset your password.</Text>

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    mode="outlined"
                />

                <Button
                    mode="contained"
                    onPress={handleResetPassword}
                    style={styles.button}
                >
                    Send Reset Link
                </Button>

                <Button
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    textColor={theme.colors.primary}
                >
                    Back to Login
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f8fa',
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginVertical: 8,
        paddingVertical: 8,
        backgroundColor: '#009944'
    },
    backButton: {
        marginTop: 10,
    },
});
