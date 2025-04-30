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
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

const MyProducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const clickMe = () => {
        // Alert.alert("Order placed successfully!");
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <View style={styles.rateRating}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.rating}>⭐ {item.rating.rate}</Text>
            </View>
            <TouchableOpacity onPress={clickMe} style={styles.button}>
                <Text style={styles.buttonText}>View Now</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        loading ? (
            <Text style={styles.loading}>Loading...</Text>
        ) : (
            <View style={styles.container}>
                <StatusBar backgroundColor="green" />
                <Text style={styles.heading}>🛒 Shop Deals</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        )
    );

};

export default MyProducts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: "#2d3436",
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 16,
    },
    card: {
        backgroundColor: "#fff",
        width: CARD_WIDTH,
        borderRadius: 16,
        padding: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 4,
    },
    rateRating: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    image: {
        width: "100%",
        height: 120,
        resizeMode: "contain",
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#f1f2f6",
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#2c3e50",
        marginBottom: 4,
    },
    category: {
        fontSize: 12,
        color: "#636e72",
        fontStyle: "italic",
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        fontWeight: "600",
        color: "#27ae60",
    },
    rating: {
        fontSize: 13,
        color: "#f39c12",
        fontWeight: "500",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#0984e3",
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },
    loading: {
        marginTop: '200px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
        fontWeight: '900',
        color: 'green'
    }
});
