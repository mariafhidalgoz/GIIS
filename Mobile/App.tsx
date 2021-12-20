import React, { useState } from 'react';
import { Alert, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [idUser, setIdUser] = useState(null);

  const baseUrl = 'http://localhost:8000/'

  const updateCurrentLocation = async () => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
      );
      return;
    }

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  const postAlert = async (params) => {
    setIsLoading(true);
    try {
      // Send POST request
      const response = await axios.post(`${baseUrl}incidents/`, params);
      if (response.status === 201) {
        const result = JSON.stringify(response.data)
        alert(` You have created an alert in: ${location.coords.latitude}, ${location.coords.longitude}.`);
        setIsLoading(false);
        setIsActive(true);
        // setIsActive(result.is_active);
        // setIdUser(result.id);
      } else {
        throw new Error("An error has occurred.");
      }
    } catch (error) {
      alert("An error has occurred.");
      setIsLoading(false);
    }
  };


  const closeAlert = async (alertPoint, date) => {
    const params = {
      "id": 0,
      "location": alertPoint,
      "type": "Blabla2",
      "is_active": true,
      "created_at": date,
      "closed_at": ""
    }
    setIsLoading(true);
    try {
      // Send POST request
      const response = await axios.put(`${baseUrl}incidents/`, params);
      if (response.status === 201) {
        const result = JSON.stringify(response.data)
        alert(`You have closed the alert in: ${location.coords.latitude}, ${location.coords.longitude}.`);
        setIsLoading(false);
        setIsActive(false);
        // setIsActive(result.is_active);
        // setIdUser(result.id);
      } else {
        throw new Error("An error has occurred.");
      }
    } catch (error) {
      alert("An error has occurred.");
      setIsLoading(false);
    }
  };

  const onPress = () => {

    // if (isActive) {
    //   Alert.alert(
    //     "Close alert",
    //     "Are you sure you want to close the alert?",
    //     [
    //       {
    //         text: "Cancel",
    //         onPress: () => console.log("Cancel Pressed"),
    //         style: "cancel"
    //       },
    //       {
    //         text: "OK", onPress: () => {
    //           console.log("OK Pressed");
    //           // const date = ""
    //           // const params = {
    //           //   "id": 0,
    //           //   "is_active": false,
    //           //   "closed_at": date
    //           // }
    //           // closeAlert(params);
    //         }
    //       }
    //     ]
    //   );
    // }

    updateCurrentLocation()

    if (!location)
      return;

    // Parameter object
    const alertPoint = `POINT(${location.coords.latitude} ${location.coords.longitude})`
    const date = new Date(location.timestamp)

    const params = {
      "id": 0,
      "location": alertPoint,
      "type": "Blabla2",
      "is_active": true,
      "created_at": date,
      "closed_at": date
    }
    postAlert(params)
  }

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
    <View style={styles.container}>
      {/*<Text style={styles.paragraph}>{text}</Text>*/}
      <FontAwesome.Button name="bell" size={50} style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Alert</Text>
      </FontAwesome.Button>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#9d0909',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  text: {
    fontSize: 50,
    color: '#fff'
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
