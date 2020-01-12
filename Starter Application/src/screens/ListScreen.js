import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friendsList = [{ name: 'Rasib' }, { name: "Adil" }, { name: "Fahad" }, { name: "Choota" }];

    return (
        <View>
            <Text style={styles.heading}>List of Friends</Text>
            <FlatList
                keyExtractor={friend => friend.name}
                data={friendsList} renderItem={({ item }) => {
                    return <Text style={styles.listItems}>{item.name}</Text>
                }}></FlatList>
        </View>

    );

};
const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'red'
    },
    listItems: {
        padding: 2,
        margin: 2,
        marginLeft: 5,
        fontSize: 20
    }
});

export default ListScreen;