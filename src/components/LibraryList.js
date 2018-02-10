import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render () {
    return;
  }
}

export default connect()(LibraryList);
//When connect is called it calls another fucntion, then we call
//that function with LibraryList (strange call because redux was not only designed for
// react)
