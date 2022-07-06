import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import style from './style'
import ThenCatch from '../pages/thenCatch'
import AsyncAwait from '../pages/asyncAwait'
import HomeScreen from '../pages/homeScreen'
export default function Container() {
    const Stack = createNativeStackNavigator()
    return (
        <View style={style.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeScreen'>
                    <Stack.Screen name="AsyncAwait" component={AsyncAwait} />
                    <Stack.Screen name="ThenCatch" component={ThenCatch} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    )
}