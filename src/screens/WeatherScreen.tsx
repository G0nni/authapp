import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import authent from '../auth/firebase';

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!authent.currentUser) {
      console.log('Aucun utilisateur connecté.');
      return;
    }

    const API_KEY = '99e149da7f53b0caecb80fb84bf766a8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Tarbes&appid=${API_KEY}&units=metric`;

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Météo à Tarbes</Text>
      <Text>Température: {weatherData.main.temp}°C</Text>
      <Text>Humidité: {weatherData.main.humidity}%</Text>
      <Text>Description: {weatherData.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WeatherScreen;
