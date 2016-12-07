import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const btnImage = require('../assets/button-bulb.png');

class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.onStartHandler}>
          <Image style={styles.buttonImage} source={btnImage} />
        </TouchableOpacity>
        <Text style={styles.readyText}>
          I'm ready to relax...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889dad',
  },
  readyText: {
    color: '#fff'
  },
  button: {
    borderRadius: 16,
    padding: 10,
    marginBottom: 20
  },
  buttonImage: {
    height: 46,
    width: 46
  }
});

export default StartScreen;