import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Asad");

  const [isToggle, setToggle] = useState(false);
  // State Toggle on Buton Click
  const onButtonClick = () => {
    console.log(isToggle);
    if (!isToggle == true) {
      setName("Changed Text");
      setToggle(true);
    } else {
      console.log("button clicked");
      setName("Asad");
      setToggle(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Hello Asad to Lesson 1 by NetNinja</Text>
        <Button title="Change State" onPress={onButtonClick}></Button>
        {/* Another way of Setting function onPress to the button  */}
        {/* <Button title="Change State" onPress={e=> onButtonClick()}></Button> */}
      </View>
      <Text>My name is: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "red",
    padding: 20
  },
  heading: {
    fontWeight: "bold"
  }
});
