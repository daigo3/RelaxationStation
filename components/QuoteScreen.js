import React, { Component, PropTypes } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Quote from './Quote';

const bgImage = require('../assets/quote-bg.jpg');

class QuoteScreen extends Component {
  render() {
    return (
      <Image style={styles.backgroundContainer} source={bgImage}>
        <View style={styles.container}>
          <Quote
            heading={this.props.heading}
            text={this.props.text}/>
        </View>
      </Image>
    );
  }
}

QuoteScreen.proptypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default QuoteScreen;