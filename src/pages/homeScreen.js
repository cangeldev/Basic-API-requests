import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'

export default function HomeScreen({ navigation }) {
    return (
        <View style={style.container}>

            <TouchableOpacity onPress={() => navigation.navigate("AsyncAwait")} style={style.touchableOpacity}>
                <Text style={style.text}>AsyncAwait</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ThenCatch")} style={style.touchableOpacity}>
                <Text style={style.text}>ThenCatch</Text>
            </TouchableOpacity>
        </View>
    )
}