import {
    Alert,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Modal,
    ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator, Card, Searchbar } from 'react-native-paper';
import { addToCart } from "../Store/Slices/AddToCartSlice";
import { useDispatch } from "react-redux";
import pizza from '../Components/Images/pizza.jpeg'
import pasta from '../Components/Images/pasta.jpeg'
import burger from '../Components/Images/burder.jpeg'
import dessert from '../Components/Images/dessert.jpeg'
import drink from '../Components/Images/drink.jpeg'
import products from "../Components/Data/Data";
import { useNavigation } from "@react-navigation/native";
const categories = [
    {
        name: "Pasta",
        image: pasta,
    },
    {
        name: "Dessert",
        image: dessert,
    },
    {
        name: "Pizza",
        image: pizza,
    },
    {
        name: "Burgers",
        image: burger,
    },

    {
        name: "Drinks",
        image: drink,
    },
];

const Home = () => {
    const [productData, setProductData] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Restaurants');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation()
    const dispatch = useDispatch()

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
    console.log(productData);

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => navigation.navigate(item.name)} // match name in <Stack.Screen />
        >
            <View style={styles.imageWrapper}>
                <Image source={item.image} style={styles.image} />
            </View>
            <Text
                style={[
                    styles.label,
                    activeCategory === item.name && styles.activeLabel,
                ]}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    return (
        <>
            {/* <Searchbar
                style={styles.searchBar}
                placeholder="Search"
            /> */}
            <View style={styles.container}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <ActivityIndicator size="large" color="#009944" />
                    <Text style={{ marginTop: 10 }}>Loading products...</Text>
                </View>
            ) : (
                <ScrollView>
                    <View style={styles.productsList}>
                        {productData.map((item, key) => (
                            <TouchableOpacity
                                key={key}
                                onPress={() => {
                                    setSelectedProduct(item);
                                    setIsModalVisible(true);
                                }}
                            >
                                <Card style={styles.productCard}>
                                    <Card.Cover source={{ uri: item.image }} style={styles.productImage} />
                                    <Card.Content>
                                        <Text style={styles.productTitle} numberOfLines={2}>{item.title}</Text>
                                        <Text style={styles.productPrice}>${item.price}</Text>
                                    </Card.Content>
                                </Card>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            )}

            {/* Modal for product details */}
            {selectedProduct && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Image
                                source={{ uri: selectedProduct.image }}
                                style={styles.modalImage}
                            />
                            <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
                            <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
                            <Text style={styles.modalPrice}>${selectedProduct.price}</Text>

                            <TouchableOpacity
                                style={styles.addToCartButton}
                                onPress={() => {
                                    dispatch(addToCart(selectedProduct));
                                    Alert.alert("Success", "Item added to cart!");
                                    setIsModalVisible(false);
                                }}
                            >
                                <Text style={styles.addToCartText}>Add to Cart</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                <Text style={{ color: 'red', marginTop: 10 }}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    categoryContainer: {
        alignItems: 'center',
        marginRight: 20,
    },
    imageWrapper: {
        width: 70,
        height: 70,
        borderRadius: 50,
        overflow: 'hidden',
        marginVertical: 5,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 50
    },
    loginwith: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        borderRadius: 25,
        width: '100%',
        borderWidth: 2,
        backgroundColor: '#ffffff',
        borderColor: '#009944',
        paddingVertical: 15
    },
    label: {
        fontSize: 12,
        color: '#888',
    },
    activeLabel: {
        color: '#000',
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    productsList: {
        paddingHorizontal: 10,
        paddingBottom: 100,
    },
    productCard: {
        margin: 5,
        borderRadius: 12,
        overflow: 'hidden',
    },
    productImage: {
        height: 150,
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    productTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 8,
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
    },
    modalImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    modalDescription: {
        fontSize: 14,
        marginVertical: 10,
        textAlign: 'center',
    },
    modalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#888',
    },
    addToCartButton: {
        marginTop: 10,
        backgroundColor: '#009944',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    addToCartText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
