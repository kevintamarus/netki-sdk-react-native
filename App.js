import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ValidateID from './components/ValidateID';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ValidateID/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;