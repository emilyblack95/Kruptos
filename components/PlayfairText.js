import React from 'react';
import { Text } from 'react-native';

export class PlayfairText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'playfair-display' }]} />;
  }
}
