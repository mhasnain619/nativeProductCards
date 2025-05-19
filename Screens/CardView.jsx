import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native';

const CardView = ({ route, navigation }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={{ uri: product.image }} style={styles.image} />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Button title="Add to Cart" onPress={() => alert("Added to cart!")} />
            </ScrollView>
        </View>
    );
};

export default CardView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#888',
        marginVertical: 10,
    },
    description: {
        fontSize: 14,
        marginBottom: 20,
    },
});
