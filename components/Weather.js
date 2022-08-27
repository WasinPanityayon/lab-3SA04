import React, { useEffect, useState } from "react";
import { Text, ImageBackground, StyleSheet, View} from "react-native";
import Forecast from "./Forecast";
import DateTime from "./DateTime";

export default function Weather(props){
    const[forecastInfo, setForecastInfo]= useState({
        main: '-',
        descrtion: '-',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=ac23d7a1fe58e170509193d5d6ac4836`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    icon: json.weather[0].icon,
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    feelslike: json.main.feels_like,
                    humidity: json.main.humidity,
                    pressure: json.main.pressure,
                    windspeed: json.wind.speed,
                    zipCode: props.zipCode,
                    zipPlace: json.name
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.containermain}>
                    <Forecast {...forecastInfo}/>
                </View>
            </ImageBackground>
    )  
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
    },

    containermain: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    }

});