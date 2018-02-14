import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation, Platform, UIManager } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '.././actions';

class ListItem extends Component {


  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex:1,paddingLeft:15,paddingRight:15}}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize:18,
    paddingLeft: 15
  }
}

// Do logic outside the component ...
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);
