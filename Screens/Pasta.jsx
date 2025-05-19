import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const pastaDishes = [
    {
        id: '1',
        name: 'Spaghetti Bolognese',
        image: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    },
    {
        id: '2',
        name: 'Fettuccine Alfredo',
        image: 'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg',
    },
    {
        id: '3',
        name: 'Penne Arrabbiata',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
];

const Pasta = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pasta Dishes</Text>
            <FlatList
                data={pastaDishes}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    name: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600',
    },
});

export default Pasta;
