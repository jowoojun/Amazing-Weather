import React from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from './components/loading'
import Weather from './components/weather'


export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weatherId: null,
  };

  componentDidMount() {
    const APIkey = process.env.weather;
    navigator.geolocation.getCurrentPosition(position =>{
      console.log(position)
      this._getWeather(position.coords.latitude, position.coords.longitude, APIkey) 
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
      // console.log(json);
      this.setState({
        temperature:json.main.temp,
        weatherId:json.weather[0].id,
        isLoaded:true
      })
    })
  }  

  render() {
    const {isLoaded, error, temperature, weatherId} = this.state
    return (
      <View style={styles.container}>
        {isLoaded ? 
          <Weather temp={temperature} weatherId={weatherId}/> : <Loading error={error}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
