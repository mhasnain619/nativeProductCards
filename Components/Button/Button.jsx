import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MyButton = ({ title, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        borderRadius: 18,
        alignItems: "center",
    },
    text: {
        color: '#514EB6',
        fontSize: 15,
        fontWeight: "bold",
    },
});

export default MyButton;
