import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
const ListSolution = () => {
    const listitems = [
        { name: 'Rasib', age: 10 },
        { name: 'Rasib', age: 20 },
        { name: 'Rasib', age: 30 },
        { name: 'Rasib', age: 40 },
        { name: 'Rasib', age: 50 }

    ]
    return (
        <View>
            <Text>List of Friends With age</Text>
            <FlatList
                data={listitems}
                keyExtractor={friend => friend.age}
                renderItem={({ item }) => {
                    return <Text>
                        Name: {item.name} Age: {item.age}
                    </Text>
                }
                }
            ></FlatList>
        </View>
    );
}

export default ListSolution;