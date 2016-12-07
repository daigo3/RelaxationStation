import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Quote extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{this.props.heading}</Text>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

Quote.proptypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  text: {
    fontSize: 14,
    color: '#444'
  }
});

export default Quote;