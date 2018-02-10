// Import my libraies
import React from 'react';
import { Text, View } from 'react-native';
//Make my component
const Header = (props) => {
  //Ignore this error - generally when function is multiple line use the other way
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //vertical
    alignItems: 'center', //horizontal
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25
  }
};

//Make component abailable from other parts of my app
//We export to allow other files to be able to use it
export { Header };
