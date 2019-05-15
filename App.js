import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Loading from './components/loading'

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
  };

  render() {
    const {isLoaded, error} = this.state
    return (
      <View style={styles.container}>
        {isLoaded ? 
          null : <Loading error={error}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
