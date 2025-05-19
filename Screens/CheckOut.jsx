import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Text, Card, RadioButton, Divider } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';

const CheckOut = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [address, setAddress] = useState('');
    const navigation = useNavigation();

    const cartItems = useSelector((state) => state.cart?.items ?? []);
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = 1.5;
    const total = subtotal + deliveryFee;

    const thankYouForOrder = () => {
        navigation.replace('ThankYouBox')
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Checkout</Text>

            {/* Cart Items */}
            <Card style={styles.card}>
                {cartItems.map((item, index) => (
                    <View key={index} style={styles.cartItem}>
                        <Image source={{ uri: item.image }} style={styles.cartImage} />
                        <View style={styles.cartDetails}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text>${item.price.toFixed(2)}</Text>
                            <Text style={styles.itemQty}>Qty: {item.quantity}</Text>
                        </View>
                    </View>
                ))}
            </Card>

            {/* Address and Map */}
            <Card style={styles.card}>
                <Text style={styles.sectionTitle}>Delivery Address</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your delivery address"
                    value={address}
                    onChangeText={setAddress}
                />
                <View style={styles.mapContainer}>
                    <WebView
                        source={{
                            uri: `https://maps.app.goo.gl/3j2iJp18Lm9oDe8J6`
                        }}
                        style={styles.map}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        scrollEnabled={false}
                    />
                </View>
            </Card>

            {/* Order Summary */}
            <Card style={styles.card}>
                <Text style={styles.sectionTitle}>Order Summary</Text>
                <View style={styles.summaryRow}>
                    <Text>Subtotal</Text>
                    <Text>${subtotal.toFixed(2)}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text>Delivery Fee</Text>
                    <Text>${deliveryFee.toFixed(2)}</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />
                <View style={styles.summaryRow}>
                    <Text style={{ fontWeight: 'bold' }}>Total</Text>
                    <Text style={{ fontWeight: 'bold' }}>${total.toFixed(2)}</Text>
                </View>
            </Card>

            {/* Payment Method */}
            <Card style={styles.card}>
                <Text style={styles.sectionTitle}>Payment Method</Text>
                <RadioButton.Group
                    onValueChange={value => setPaymentMethod(value)}
                    value={paymentMethod}
                >
                    <View style={styles.radioRow}>
                        <RadioButton value="card" />
                        <Text>Credit / Debit Card</Text>
                    </View>
                    <View style={styles.radioRow}>
                        <RadioButton value="paypal" />
                        <Text>PayPal</Text>
                    </View>
                    <View style={styles.radioRow}>
                        <RadioButton value="cod" />
                        <Text>Cash on Delivery</Text>
                    </View>
                </RadioButton.Group>
            </Card>

            {/* Place Order */}
            <TouchableOpacity onPress={thankYouForOrder} style={styles.loginwith}>
                <Text style={styles.loginwithText}>Place Order</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default CheckOut;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    card: {
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartImage: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    cartDetails: {
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemQty: {
        marginTop: 5,
        fontSize: 13,
        color: 'gray',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    mapContainer: {
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
    },
    map: {
        flex: 1,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    loginwith: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        borderRadius: 25,
        width: '100%',
        backgroundColor: '#009944',
        paddingVertical: 15,
        marginBottom: 20
    },
    loginwithText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
