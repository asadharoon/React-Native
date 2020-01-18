import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
const InputContainer = props => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          autoCapitalize="none"
          autoCorrect="false"
          placeholder="Enter input(All false)"
          onChange={e => setInput(e.target.value)}
          style={styles.input}
        ></TextInput>
        <TextInput
          autoCapitalize="words"
          autoCorrect="false"
          placeholder="Enter input(Auto Capitialize On)"
          onChange={e => setInput(e.target.value)}
          style={styles.input}
        ></TextInput>
        <TextInput
          autoCapitalize="none"
          autoCorrect="true"
          placeholder="Enter input(Auto Correction On)"
          onChange={e => setInput(e.target.value)}
          style={styles.input}
        ></TextInput>
        <TextInput
          autoCapitalize="true"
          keyboardAppearance="dark"
          autoCorrect="true"
          placeholder="Enter input(Both On) Password Type"
          secureTextEntry={true}
          onChange={e => setInput(e.target.value)}
          style={styles.input}
        ></TextInput>
        <Text>Your input is: {input}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "aqua",
    padding: 30,
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: "100%",
    padding: 8,
    margin: 10
  }
});
export default InputContainer;
