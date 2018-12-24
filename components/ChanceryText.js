import React from 'react';
import { Text } from 'react-native';

export class ChanceryText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'apple-chancery' }]} />;
  }
}
