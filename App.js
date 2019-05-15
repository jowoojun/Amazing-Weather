import React from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from './components/loading'

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };

  componentDidMount() {
    const APIkey = 'ac5623f134c3d2fc2431069b3e7ea623';
    navigator.geolocation.getCurrentPosition(position =>{
      this._getWeather(position.coords.latitude, position.coords.longitude, APIkey)
      this.setState({
        isLoaded:true
      }),
      error => {
        this.setState({
          error:error,
        })
      }
    })
  }

  _getWeather = (lat, lon, APIkey) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
    ).then(Response => json = Response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main
      })
    })
  }  

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
