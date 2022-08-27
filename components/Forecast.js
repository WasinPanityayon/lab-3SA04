import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DateTime from "./DateTime";

export default function Forecast(props) {
    const img = {uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`}
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <DateTime />
                </View>
                <View style={styles.rightAlign}>
                        <Text style={styles.textzipcode}>Zip Code</Text>
                        <Text style={styles.zipcode}>{props.zipPlace} / {props.zipCode}</Text>
                </View>
            </View>
            <View style={styles.view}>
                <View style={styles.texttempmain}>
                    <Image source={img} style={styles.image}/>
                    <View style={styles.text}>
                        <Text style={styles.textvaluetemp}>{props.temp}
                            <Text style={styles.fontunittemp}> °C</Text>
                        </Text>
                        <Text style={styles.texttemp}>{props.main}</Text>
                        <Text style={styles.textdescription}>{props.description}</Text>
                    </View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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

    view: {
        backgroundColor: "#18181b75",
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },

    texttempmain: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    image: {
        width: 150,
        height: 150,
        alignItems: 'center'
    },

    text: {
        justifyContent: 'center',
    },

    texttemp: {
        color : '#18181b',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },

    textdescription: {
        color : '#18181b',
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center'
    },
    
    textvaluetemp: {
        color : '#dadaeb',
        fontSize: 40,
        fontWeight: '500',
        textAlign: 'center'
    },

    fontunittemp: {
        color : '#dadaeb',
        fontSize: 20,
        fontWeight: '500',
    },

    detail: {
        backgroundColor: "#dadaeb99",
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
   