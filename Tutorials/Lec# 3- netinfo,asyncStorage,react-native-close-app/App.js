import { useState } from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage, SafeAreaView, BackHandler } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import RNCloseApp from 'react-native-close-app';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      prev: '',
      isConnected: false,
      lastRefresh: Date(Date.now()).toString()
    }
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);


  }
  forceUpdateHandler() {
    this.forceUpdate();
    this.setState({ lastRefresh: Date(Date.now()).toString() })
  }
  async init() {
    await AsyncStorage.getItem('username').then((value) => {
      if (value != null) {
        this.setState({ prev: value });
      }
      console.log(value);

    });
    await NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected == true) {
        this.setState({ isConnected: true });
      }
      //console.log('First, is ' + (isConnected ? this.setState({ isConnected: true }) : 'offline'));
    });


  }
  async componentDidMount() {
    await this.init();
    setInterval(() => {

      this.setState({
        lastRefresh: new Date().toLocaleString()
      });
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected == true) {
          this.setState({ isConnected: true });
        }
        else {
          this.setState({ isConnected: false });
        }
        //console.log('First, is ' + (isConnected ? this.setState({ isConnected: true }) : 'offline'));
      });

    }, 1000);
    if (this.state.isConnected == false) {
      setInterval(() => {
        console.log("yes closed app");
        BackHandler.exitApp();

        //  RNCloseApp.close();
      }, 5000);
    }
  }
  onButtonClick = () => {
    try {
      console.log("saving username")
      AsyncStorage.setItem('username', this.state.value);
    }
    catch (err) {
      console.log(err);
    }

  }
  render() {
    return (
      <View>
        <SafeAreaView style={this.state.isConnected ? { backgroundColor: "yellow", alignItems: "center" } : { backgroundColor: "red", alignItems: "center" }}>
          {this.state.isConnected ? <Text>Connected</Text> : <Text>No Internet Connection</Text>}
        </SafeAreaView>
        <View style={styles.container}>

          <Text>Open up App.js to start working on your app!</Text>
          <Text>{this.state.lastRefresh}</Text>
          {this.state.prev == '' ? <Text>Nothing saved earlier</Text> : <Text>Previously saved item is: {this.state.prev}</Text>}
          <TextInput
            placeholder="Enter input"
            onChange={e => this.setState({ value: e.target.value })}
            style={styles.input}></TextInput>
          <Text>You entered:{this.state.value}</Text>
          <Button onPress={this.onButtonClick} title="Submit">Submit</Button>
          <Button title="Refresh Page" onPress={this.forceUpdateHandler}></Button>
        </View>
      </View>

    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: "100%",
    padding: 8,
    margin: 10
  }
});
