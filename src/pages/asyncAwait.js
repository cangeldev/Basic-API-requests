import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import axios from 'axios'
import style from './style'
import UserCard from "../components/userCard/userCard"
export default function AsyncAwait() {
    const [data, setData] = React.useState([])
    async function fetchData() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(response.data)
    }
    const renderUser = ({ item }) => <UserCard name={item.name} username={item.username} email={item.email} />
    return (
        <View style={style.containerA}>
            <TouchableOpacity style={style.touchableOpacity} onPress={fetchData}>
                <Text style={style.text}>Click me</Text>
            </TouchableOpacity>
            <FlatList data={data} renderItem={renderUser} />
        </View>
    )
}