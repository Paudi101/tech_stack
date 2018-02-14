import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  //Lifecycle method - called when we are about to render this component
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries); //Use this list of libraries to render content to screen
  }

  renderRow(library) {
    return <ListItem library={library} />
  }

  render () {
    return (
      <ListView dataSource={this.dataSource}
      renderRow={this.renderRow} />
    );
  }
}

const mapStateToProps = state => {
  return  { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);
//When connect is called it calls another fucntion, then we call
//that function with LibraryList (strange call because redux was not only designed for
// react)
