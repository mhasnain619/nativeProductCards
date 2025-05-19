import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Yahan aap API call bhi kar sakte ho
        setOrders([
            {
                id: '1',
                item: 'Cheese Pizza',
                quantity: 2,
                price: 1200,
            },
            {
                id: '2',
                item: 'Zinger Burger',
                quantity: 1,
                price: 650,
            },
            {
                id: '3',
                item: 'Coca Cola',
                quantity: 3,
                price: 300,
            }
        ]);
    }, []);

    const renderOrder = ({ item }) => (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.item}>{item.item}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Price: Rs {item.price}</Text>
                <Text style={styles.total}>Total: Rs {item.quantity * item.price}</Text>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Orders</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={renderOrder}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    );
};

export default Orders;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        marginBottom: 12,
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
    },
    item: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 4,
    },
    total: {
        fontWeight: 'bold',
        marginTop: 5,
        color: '#009944',
    },
});
