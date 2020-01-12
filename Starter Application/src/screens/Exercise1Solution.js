import React from 'react';
import { StyleSheet, Style, View,Text } from 'react-native';

const Exercise1 = () => {
    return (
        <View>
            <Text style={styles.first}>Getting started with react native!</Text>
            <Text style={styles.second}>My name is Asad</Text>
        </View>
    );
   
};
const styles = StyleSheet.create({
    first: {
       fontSize:45
    },
    second: {
        fontSize:20
    }
});
 
export default Exercise1;