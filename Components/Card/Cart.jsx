import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} from '../../Store/Slices/AddToCartSlice';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const { cart } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const total = cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2);

    const renderItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        onPress={() => dispatch(decrementQuantity(item.id))}
                        style={styles.quantityButton}
                    >
                        <Text style={styles.quantityText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantityNumber}>{item.quantity}</Text>

                    <TouchableOpacity
                        onPress={() => dispatch(incrementQuantity(item.id))}
                        style={styles.quantityButton}
                    >
                        <Text style={styles.quantityText}>+</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
                    <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>🛒 Your Cart</Text>
            <FlatList
                data={cart}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                ListEmptyComponent={
                    <Text style={styles.empty}>Your cart is empty</Text>
                }
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.total}>${total}</Text>
            </View>
            <TouchableOpacity
                style={styles.checkoutButton}
                onPress={() => {
                    navigation.replace('CheckOut');
                    // You can navigate or handle checkout logic here
                }}
            >
                <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f7f7f7',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 12,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        resizeMode: 'contain',
    },
    info: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    price: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    quantityButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantityNumber: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    remove: {
        color: 'red',
        marginTop: 6,
        fontSize: 12,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 16,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: '600',
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2196F3',
    },
    empty: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: '#999',
    },
    checkoutButton: {
        backgroundColor: '#009944',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },

    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
