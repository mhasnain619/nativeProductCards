import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
// import { MaterialIcons } from '@expo/vector-icons';

const ThankYouBox = () => {
    const [rating, setRating] = useState(3);
    const [feedback, setFeedback] = useState('');
    const navigation = useNavigation();

    const handleStarPress = (index) => {
        setRating(index + 1);
    };
    const gotoHome = () => {
        navigation.replace('TabNavigation')
    }
    return (
        <View style={styles.container}>
            <Image
                height='100%' width='100%'
                source={require('../Components/Images/than.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.title}>Thank You!</Text>
            <Text style={styles.subtitle}>Order Completed</Text>

            <View style={styles.starContainer}>
                {[...Array(5)].map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                        {/* <MaterialIcons
                            name={index < rating ? 'star' : 'star-border'}
                            size={32}
                            color={index < rating ? '#FFA500' : '#E0E0E0'}
                        /> */}
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                mode="outlined"
                placeholder="Leave feedback"
                value={feedback}
                onChangeText={setFeedback}
                style={styles.input}
            />

            <View style={styles.buttonRow}>
                <Button mode="contained" onPress={() => console.log('Submitted')} style={styles.submitBtn}>
                    Submit
                </Button>
                {/* <Button mode="outlined" onPress={gotoHome} style={styles.skipBtn}>
                    Skip
                </Button> */}
                <TouchableOpacity onPress={gotoHome} style={styles.skipBtn} >
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ThankYouBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    topBackground: {
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#000',
    },
    image: {
        height: 200,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
    },
    starContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    submitBtn: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#009944',
        borderRadius: 8,
    },
    skipBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
        borderColor: '#009944',
        borderWidth: 1,
        borderRadius: 8,
    },
});
