import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";


const weatherList = {
  0: {
    colors:['#FEF253', '#FF7300'],
    title: "Sunny! go outside!",
    subtitle: "Go get your body burnt",
    icon: 'weather-sunny'
  },
  2: {
    colors:['#00ECBC', '#007ADF'],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of house",
    icon: 'weather-lightning'
  },
  3: {
    colors:['#89F7FE', '#66A6FF'],
    title: "Drizzle, little cold",
    subtitle: "Is like rain, but Umm.. ",
    icon: "weather-rainy"
  },
  5: {
    colors:['#00C6FB', '#005BEA'],
    title: "Raining like cool!",
    subtitle: "For more info look outside!",
    icon: 'weather-pouring'
  },
  6: {
    colors:['#7DE2FC', '#B9B6E5'],
    title: "Snow, very cold",
    subtitle: "Do you wanna build a snowman?",
    icon: "weather-snowy"
  },
  7: {
    colors:['#D7D2CC', '#B9B6E5'],
    title: "Drizzle, little cold",
    subtitle: "Is like rain, but Umm.. ",
    icon: "weather-fog"
  },
  8: {
    colors:['#D7D2CC', '#304352'],
    title: "Clouds, cheer up!",
    subtitle: "I know, it's boring",
    icon: 'weather-cloudy'
  },
}

function Weather({temp, weatherId}) {
  const weather = weatherId === 800 ? weatherList[0] : weatherList[parseInt(weatherId / 100)];
  return(
    <LinearGradient colors={weather.colors} style={styles.container}>
      <View style={styles.weatherIconBox}>
        <MaterialCommunityIcons colors="white" size={144} name={weather.icon} />
        <Text style={styles.temp}>{Math.ceil(temp - 273.15)}°C</Text>
      </View>
      <View style={styles.WeatherTextBox}>
        <Text style={styles.WeatherTitle}>{weather.title}</Text>
        <Text style={styles.WeatherSubtitle}>{weather.subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherId: PropTypes.number.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp:{
    fontSize:38,
  },
  weatherIconBox: {
    flex: 1,
    alignItems:"center",
    justifyContent: "flex-end",
  },
  WeatherTextBox:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 28,
    paddingBottom: 260,
  },
  WeatherTitle:{
    fontSize:38,
    paddingBottom: 20,
  },
  WeatherSubtitle:{
    fontSize:24
  }
});