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
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.container}>
                <View>
                    <DateTime />
                    <Forecast {...forecastInfo}/>
                </View>
                <View style={styles.rightAlign}>
                        <Text style={styles.textzipcode}>Zip Code</Text>
                        <Text style={styles.zipcode}>{props.zipCode}</Text>
                </View>
            </View>
            </ImageBackground>
    )  
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
    },

    container: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },

    rightAlign: {
        textAlign: 'right',
        marginTop: 20
    },

    textzipcode: {
        fontSize: 20,
        color: 'black',
        fontWeight: '300',
        textAlign: 'right'
    },

    zipcode: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
        textAlign: 'right'
    },

});