import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {
    const img = {uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`}
    return (
        <View style={styles.container}>
            <View style={styles.texttempmain}>
                <Image source={img} style={styles.image}/>
                <Text style={styles.texttemp}>{props.main}</Text>
                <Text style={styles.textdescription}>{props.description}</Text>
                <Text style={styles.textvaluetemp}>{props.temp}
                    <Text style={styles.fontunittemp}> °C</Text>
                </Text>
            </View>
            <View style={styles.detail}>
                <View style={styles.textitem}>
                    <Text style={styles.textmain}>Feels Like</Text>
                    <Text style={styles.textvalue}>{props.feelslike}
                        <Text style={styles.fontunit}> °C</Text>
                    </Text>
                </View>
                <View style={styles.textitem}>
                    <Text style={styles.textmain}>Humidity</Text>
                    <Text style={styles.textvalue}>{props.humidity}
                        <Text style={styles.fontunit}> %</Text>
                    </Text>
                </View>
                <View style={styles.textitem}>
                    <Text style={styles.textmain}>Pressure</Text>
                    <Text style={styles.textvalue}>{props.pressure}
                        <Text style={styles.fontunit}> mbar</Text>
                    </Text>
                </View>
                <View style={styles.textitem}>
                    <Text style={styles.textmain}>Wind Speed</Text>
                    <Text style={styles.textvalue}>{props.windspeed}
                        <Text style={styles.fontunit}> km/h</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },

    texttempmain: {
        flexDirection: 'column',
    },

    image: {
        width: 150,
        height: 150,
        alignItems: 'center'
    },

    texttemp: {
        color : 'black',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center'
    },

    textdescription: {
        color : 'black',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center'
    },
    
    textvaluetemp: {
        color : 'black',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center'
    },

    fontunittemp: {
        color : 'black',
        fontSize: 12,
        fontWeight: '500',
    },

    detail: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },

    textitem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textmain: {
        color : 'black',
        fontSize: 14,
        fontWeight: '500'
    },

    textvalue: {
        color : 'black',
        fontSize: 14,
        fontWeight: '500'
    },

    fontunit: {
        color : 'black',
        fontSize: 12,
        fontWeight: '500'
    }
})
   