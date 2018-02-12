import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render () {
    console.log(this.props)
    return;
  }
}

const mapStateToProps = state => {
  return  { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);
//When connect is called it calls another fucntion, then we call
//that function with LibraryList (strange call because redux was not only designed for
// react)
