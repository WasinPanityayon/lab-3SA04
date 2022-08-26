import React, { useState } from "react";
import { Text, ImageBackground, StyleSheet} from "react-native";
import Forecast from "./Forecast";
export default function Weather(props){
    const[forecastInfo, setForecastInfo]= useState({
        main: '-',
        descrtion: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        <Text style={styles.stylefont}>
            Zip Code is {props.zipCode}.
        </Text>
        <Forecast {...forecastInfo}/>
        </ImageBackground>

    )  
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    stylefont: {
        paddingTop: 25,
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});