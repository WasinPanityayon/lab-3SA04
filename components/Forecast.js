import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.container}>
            <View style={styles.textitem}>
                <Text style={styles.textmain}>{props.main}</Text>
                {/* <Text style={styles.textdescription}>{props.description}</Text> */}
                <Text style={styles.textvalue}>{props.temp}
                    <Text style={styles.fontunit}>°C</Text>
                </Text>
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

    textitem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textmain: {
        color : 'black',
        fontSize: 14,
        fontWeight: '500'
    },

    textdescription: {
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
        fontSize: 10,
        fontWeight: '500'
    }
})
   