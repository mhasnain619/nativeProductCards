import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import MyButton from './Components/Button/Button';
import { useEffect, useState } from "react";
import axios from "axios";

const screenWidth = Dimensions.get("window").width;

const App = () => {
  const [data, setData] = useState([]);

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
    Alert.alert("Order placed!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor='green' />
      <Text style={styles.heading}>Product List:</Text>

      {data.map((item) => (
        <View key={item.id} style={styles.product}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price} $</Text>
          </View>
        </View>
      ))}

      <MyButton onPress={clickMe} title='Order Now' />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 20,
  },
  product: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexShrink: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
    flexWrap: "wrap",
  },
  price: {
    fontSize: 16,
    color: "green",
  },
});
