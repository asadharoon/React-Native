import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to React Native</Text>
      {}
      <Button title='Go to Components Page' onPress={() => props.navigation.navigate('Components')}></Button>
      <Button onPress={() => props.navigation.navigate("List")} title="Go to List Page" style={styles.button2}>

      </Button>
    </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button2: {
    margin: 2,
    padding: 3,
    color: 'aqua'
  }
});

export default HomeScreen;