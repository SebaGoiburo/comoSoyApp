import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colores } from "../global/colors";

const AddButton = ({
    title = "",
    onPress = () => {},
    color = colores.salmon,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "60%",
        backgroundColor: colores.salmon,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        color: "#ffffff"
    },
});