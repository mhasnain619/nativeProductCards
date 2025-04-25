import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MyButton = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3498db",
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },
});

export default MyButton;
