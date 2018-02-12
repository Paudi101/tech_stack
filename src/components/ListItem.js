import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common'

class ListItem extends Component {
  render() {
    <CardSection>
      <Text>{this.props.library.title}</Text>
      <Text>{this.props.library.description}</Text>
    </CardSection>
  }
}

export default ListItem;
