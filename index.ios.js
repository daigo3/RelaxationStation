import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Quote from './components/Quote';
import StartScreen from './components/StartScreen';
import QuoteScreen from './components/QuoteScreen';

const { quotes } = require('./quotes.json');

export default class RelaxationStation extends Component {
  render() {
    const quote = quotes[2];
    return (
        <Navigator
          initialRoute={{ name: 'StartScreen' }}
          renderScene={(route, navigator) => {
            switch(route.name) {
              case 'StartScreen':
                return <StartScreen
                  onStartHandler={() => navigator.push({ name: 'QuoteScreen' })} />;
              case 'QuoteScreen':
                return <QuoteScreen
                  heading={quote.heading}
                  text={quote.description}/>;
            }
          }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161737',
  },
  readyText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  
});

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
