import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import axios from 'axios'
import UserCard from '../components/userCard/userCard'
export default function ThenCatch() {
  const [users, setUsers] = React.useState([])
  function fetchData() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error))
  }
  const renderUser = ({ item }) => <UserCard name={item.name} username={item.username} email={item.email} />
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.touchableOpacity} onPress={fetchData}>
        <Text style={style.text}>
          Click me
        </Text>
      </TouchableOpacity>
      <FlatList data={users} renderItem={renderUser} />
    </View>
  )
}