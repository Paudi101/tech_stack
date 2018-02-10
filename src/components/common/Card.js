import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    // Renders any component mapped to props
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 2, //Round the border corners
    borderColor: '#ddd',
    borderBottomWidth: 0, //Hide bottom of border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2, //Round the shadow corners
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
