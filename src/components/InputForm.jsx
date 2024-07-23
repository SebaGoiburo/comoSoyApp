import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colores } from "../global/colors";

const InputForm = ({ placeholder, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");
  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
    inputContainer:{

    },
    input:{    
        textAlign: 'center',
        height: 20,
        margin: 12,
        borderBottomWidth: 1,
        fontSize: 16,
        color: colores.gris,
    },
    error: {
            paddintTop: 2,
            fontSize: 16,
            color: "red",
            fontFamily: "Josefin",
            fontStyle: "italic",
    }
});