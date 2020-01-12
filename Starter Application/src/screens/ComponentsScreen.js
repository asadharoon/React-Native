import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Hello = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Hello Asad In React SFC. with color red</Text>
            <Text style={styles.secondText}>Hello I am 2nd Heading in Div/View</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'red',
    },
    secondText: {
        fontSize: 40
    }
});


export default Hello;
