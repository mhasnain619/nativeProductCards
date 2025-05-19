import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Text, Card, TextInput, Button } from 'react-native-paper';
import axios from 'axios';

const categories = ['All', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

const Browse = () => {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProductData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("API Error:", err);
                Alert.alert("Error", "Failed to fetch products");
                setLoading(false);
            });
    }, []);

    const filteredProducts = productData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (activeCategory === 'All' || item.category === activeCategory)
    );

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search..."
                value={search}
                onChangeText={setSearch}
                mode="outlined"
                style={styles.searchInput}
            />

            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginBottom: 10 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.categoryButton,
                            item === activeCategory && styles.categoryButtonActive
                        ]}
                        onPress={() => setActiveCategory(item)}
                    >
                        <Text style={item === activeCategory ? styles.activeCategoryText : styles.categoryText}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
            />

            {loading ? (
                <ActivityIndicator size="large" color="#009944" style={{ marginTop: 50 }} />
            ) : (
                <FlatList
                    data={filteredProducts}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => (
                        <Card style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Card.Content>
                                <Text numberOfLines={2} style={styles.productName}>{item.title}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                                <Button
                                    mode="contained"
                                    onPress={() => Alert.alert("Added", `${item.title} added to cart`)}
                                    style={styles.button}
                                >
                                    Add to Cart
                                </Button>
                            </Card.Content>
                        </Card>
                    )}
                />
            )}
        </View>
    );
};

export default Browse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
    },
    searchInput: {
        marginBottom: 15,
    },
    categoryButton: {
        paddingHorizontal: 15,
        paddingVertical: 2,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        marginRight: 10,
    },
    categoryButtonActive: {
        backgroundColor: '#009944',
    },
    categoryText: {
        color: '#000',
    },
    activeCategoryText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        width: '48%',
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: 120,
        width: '100%',
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    price: {
        color: '#666',
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#009944',
        borderRadius: 20,
    },
});
