// @flow
import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'yellowgreen'}}>
          <Text>Username or Welcome, guest</Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'mediumspringgreen'}}>
          <Text>Latest deal in the area, must ask for location</Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'lightgreen'}} />
      </View>
    );
  }
}
