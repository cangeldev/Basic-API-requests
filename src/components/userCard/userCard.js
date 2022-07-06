import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
export default function UserCard(props) {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        {props.name + " " + props.username + " --> " + props.email}
      </Text>
    </View>
  )
}