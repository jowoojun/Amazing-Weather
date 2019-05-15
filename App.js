import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

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
          null : (
          <View style={styles.loading}> 
            <ActivityIndicator style={styles.spinner} size="large" color="#0000ff" />
            <View style={styles.loadingTextBox}>
              <Text style={styles.loadingText}>Getting the Amazing Weather!!</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading:{
    flex:1,
    backgroundColor: '#FDF6AA',
  },
  spinner:{
    flex:1,
    justifyContent: "center",
    alignItems:'center',
  },
  loadingTextBox:{
    paddingLeft: 28,
    paddingBottom: 140,
  },
  loadingText:{
    justifyContent: 'flex-end',
    marginBottom: 10,
    fontSize:38
  },
  errorText:{
    color:"red",
    backgroundColor: "transparent",
    fontSize:24
  },
});
