import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.view}>
            <Text style={styles.fontm}>{props.main}</Text>
            <Text style={styles.fontd}>{props.description}</Text>
            <Text style={styles.fontt}>{props.temp}
                <Text style={styles.fontc}>°C</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fontm: {
        color: 'black',
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 20,
        paddingTop: 15
    },
    fontd: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 25
    },
    fontt: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    fontc: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
        
    }
})
   