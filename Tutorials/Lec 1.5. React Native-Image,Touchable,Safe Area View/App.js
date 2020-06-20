import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default function App() {
  console.log("App executed");
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={3}>Hi I am Asad Haroon</Text>
      <TouchableWithoutFeedback
        onPress={() => console.log("touchable1 tapped")}
      >
        <Image
          source={{
            uri: "https://wallpaperplay.com/walls/full/d/6/8/178663.jpg",
          }}
          style={{ width: "100%", height: "100%" }}
          onLoad={() => {
            console.log("on load image");
          }}
          onLoadStart={() => {
            console.log("Load image has been started");
          }}
          onLoadEnd={() => console.log("On image load end")}
        ></Image>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => console.log("touchable2 tapped")}>
        <Image
          source={require("./assets/moon.jpg")}
          style={{ width: 50, height: 50 }}
        ></Image>
      </TouchableOpacity>
      {}
      <TouchableHighlight onPress={() => console.log("touchable3 tapped")}>
        <Image
          source={require("./assets/moon.jpg")}
          style={{ width: 150, height: 150 }}
        ></Image>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
